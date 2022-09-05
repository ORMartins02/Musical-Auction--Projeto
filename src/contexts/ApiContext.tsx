/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler } from "react-hook-form";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  toastFailBidRegister,
  toastSuccesBid,
  toastSuccesLogin,
  toastSuccesRegister,
  toastSuccesInstrumentRegister,
  toastFail,
} from "../components/toasts/toasts";

interface UserProps {
  children: ReactNode;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  userImg: string;
  ageOfBirth: string;
  contact: string;
  address: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

interface currentBid {
  currentBid: number;
}

export interface Instrument {
  title: string;
  description: string;
  category: string;
  minPrice: number;
  img: string;
  currentBid: number;
  minBid: number;
  bidUserId: null;
  userId: number;
  id: number;
}

export interface UserProviderData {
  login: {
    name: string;
    age: number;
  };
  loading: boolean;
  modalBid: boolean;
  setModalBid: React.Dispatch<React.SetStateAction<boolean>>;
  instrument: Instrument;
  instruments: Instrument[];
  setInstruments: Dispatch<SetStateAction<Instrument[]>>;
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => void;
  handlePostInstrument: (data: Instrument) => void;
  handleGetInstrument: (data: number) => void;
  handleBidInstrument: (data: currentBid) => void;
  handleGetUserById: () => void;
  handleGetUserInstruments: () => void;
  handleDeleteInstrument: (data: Instrument) => void;
  handleEditInstrument: (data: Instrument) => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modalBid, setModalBid] = useState(false);
  const [instrument, setInstrument] = useState<Instrument>({} as Instrument);
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [login, setLogin] = useState<UserProviderData["login"]>(
    {} as UserProviderData["login"]
  );

  const loadInstruments = async () => {
    await api
      .get("/userInstrument")
      .then((response) => {
        setInstruments(response.data);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  useEffect(() => {
    setLoading(true);
    loadInstruments();
    setLoading(false);
  }, []);

  const handleRegister = async ({
    email,
    password,
    name,
    userImg,
    ageOfBirth,
    contact,
    address,
  }: Omit<User, "id">) => {
    const newData = {
      email,
      password,
      name,
      userImg,
      ageOfBirth,
      contact,
      address,
    };

    await api
      .post("register", newData)
      .then((response) => {
        if (response.status === 201) {
          return navigate("/");
        }
        toastSuccesRegister();
      })
      .catch((err) => {
        console.log(err);
        toastSuccesRegister();
      });
  };

  const handleLogin: SubmitHandler<UserLogin> = (data) => {
    api
      .post("login", data)
      .then((response) => {
        if (response.status === 200) {
          setLogin(response.data.user);
          window.localStorage.setItem("@token", response.data.accessToken);
          window.localStorage.setItem("@userId", response.data.user.id);
          // navigate(`/Dashboard/${response.data.user.id}`);
          window.location.reload();
          toastSuccesLogin();
        }
      })
      .catch((err) => {
        console.log(err);
        toastFail();
      });
  };

  const handlePostInstrument = (data: Instrument) => {
    const token = localStorage.getItem("@token");
    api
      .post("userInstrument", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("instrumento criado");
      })
      .catch((err) => {
        console.warn(err);
        toastFail();
      });
  };

  const handleGetInstrument = (data: number) => {
    api.get(`userInstrument/${data}`).then((response) => {
      setInstrument(response.data);
      setModalBid(true);
    });
  };

  const handleGetUserById = () => {
    const userId = localStorage.getItem("@userId");
    const token = localStorage.getItem("@token");
    api
      .get<{ name: string; address: string }>(`users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const userData = {
          name: response.data.name,
          address: response.data.address,
        };
      });
  };

  const handleGetUserInstruments = () => {
    const userId = localStorage.getItem("@userId");
    api
      .get<{ title: string; description: string; minPrice: number }>(
        `userInstrument?userId=${userId}`
      )
      .then((response) => {
        const userInstrument = {
          title: response.data.title,
          description: response.data.description,
          minPrice: response.data.minPrice,
        };
      });
  };

  const handleDeleteInstrument = (instrument: Instrument) => {
    const token = localStorage.getItem("@token");

    api
      .delete(`userInstrument/${instrument.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("instrumento deletado");
      });
  };
  const handleEditInstrument = (data: Instrument) => {
    const token = localStorage.getItem("@token");
    api
      .patch(`userInstrument/${instrument.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {});
  };

  const handleBidInstrument = (data: currentBid) => {
    console.log(data);

    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@userId");
    const { title, description, category, minPrice, img, minBid, currentBid } =
      instrument;
    const newData = {
      title: title,
      description: description,
      category: category,
      minPrice: minPrice,
      currentBid: data.currentBid,

      bidUserId: userId,
      img: img,
    };

    if (newData.currentBid < currentBid + minBid) {
      toastFailBidRegister();
    } else {
      api
        .patch(`userInstrument/${instrument.id}`, newData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          toastSuccesBid();
          setModalBid(false);

          loadInstruments();
        })
        .catch((response) => console.log(response))
        .finally();
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        loading,
        modalBid,
        instrument,
        instruments,
        handleLogin,
        setModalBid,
        setInstruments,
        handleRegister,
        handleGetUserById,
        handleBidInstrument,
        handleGetInstrument,
        handleEditInstrument,
        handlePostInstrument,
        handleDeleteInstrument,
        handleGetUserInstruments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
