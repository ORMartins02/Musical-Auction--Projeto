/* eslint-disable react-hooks/exhaustive-deps */
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
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  toastFailBidRegister,
  toastSuccesBid,
  toastSuccesLogin,
  toastSuccesRegister,
  toastSuccesInstrumentRegister,
  toastFail,
  toastFailLogin,
} from "../components/toasts/toasts";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  userImg: string;
  ageOfBirth: string;
  contact: string;
  address: string;
  bids?: [];
}

export interface UserLogin {
  email: string;
  password: string;
}

interface currentBid {
  currentBid: number;
}

interface UserEdit {
  img?: string;
  password?: string;
  name?: string;
}

export interface Instrument {
  title: string;
  description: string;
  category: string;
  minPrice: number;
  img: string;
  minBid: number;
  currentBid: number;
  bidUserId: number;
  userId: number;
  id: number;
}

export interface UserProviderData {
  login: {
    userImg: string;
    name: string;
    age: number;
    bids: Instrument[];
  };
  isModalEditOpen: boolean;
  isModalAddOpen: boolean;
  loading: boolean;
  modalBid: boolean;
  isModalEditUser: boolean;
  setModalEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  setModalBid: React.Dispatch<React.SetStateAction<boolean>>;
  instrument: Instrument;
  instruments: Instrument[];
  setInstruments: Dispatch<SetStateAction<Instrument[]>>;
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => Promise<void>;
  handlePostInstrument: (data: Instrument) => void;
  handleGetInstrument: (data: number) => void;
  handleBidInstrument: (data: currentBid) => void;
  handleEditInstrument: (data: Instrument) => void;
  handleEditUser: (data: UserEdit) => void;
  userFilt: string;
  userBids: Instrument[];
  loadBids: () => void;
  setUserFilt: React.Dispatch<React.SetStateAction<string>>;
  navigate: NavigateFunction;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setInstrument: React.Dispatch<React.SetStateAction<Instrument>>;
  logoutBtn: () => void;
  token: string | null;
  userId: string | null;
  userInst: Instrument[] | undefined;
  handleDeleteInstrument: (id: number) => void;
}

export interface IChildrenProps {
  children: ReactNode;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modalBid, setModalBid] = useState(false);
  const [instrument, setInstrument] = useState<Instrument>({} as Instrument);
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [isModalEditOpen, setModalEdit] = useState(false);
  const [isModalEditUser, setModalEditUser] = useState(false);
  const [isModalAddOpen, setModalAdd] = useState(false);
  const [login, setLogin] = useState<UserProviderData["login"]>(
    {} as UserProviderData["login"]
  );
  const [userBids, setUserBids] = useState<Instrument[]>([]);
  const [userFilt, setUserFilt] = useState<string>("products");
  const [userInst, setUserInst] = useState<Instrument[]>([]);
  const token = localStorage.getItem("@token");
  const userId = localStorage.getItem("@userId");

  const loadInstruments = async () => {
    await api
      .get("/userInstrument")
      .then((response) => {
        setInstruments(response.data);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  const loadBids = async () => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .get(`/users/${userId}`)
      .then((response) => {
        setUserBids(response.data.bids);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  useEffect(() => {
    setLoading(true);
    loadInstruments();
    loadBids();
    setLoading(false);
  }, []);

  const checkToken = async () => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const data = await api.get(`users/${userId}`);
      if (data.status === 200) {
        setLogin(data.data);
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkToken();
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

  const handleLogin: SubmitHandler<UserLogin> = async (data) => {
    await api
      .post("login", data)
      .then((response) => {
        if (response.status === 200) {
          setLogin(response.data.user);
          window.localStorage.setItem("@token", response.data.accessToken);
          window.localStorage.setItem("@userId", response.data.user.id);
          navigate(`/dashboard/:${response.data.user.id}`, { replace: true });
          toastSuccesLogin();
        }
      })
      .catch((err) => {
        console.log(err);
        toastFailLogin();
      });
  };

  const handlePostInstrument = (data: Instrument) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .post("userInstrument", { ...data, currentBid: 0, userId: userId })
      .then((response) => {
        console.log("instrumento criado");
        loadInstruments();
        setModalAdd(false);
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

  useEffect(() => {
    const handleGetUserInstruments = () => {
      const userId = localStorage.getItem("@userId");
      api.get(`userInstrument?userId=${userId}`).then((response) => {
        setUserInst(response.data);
      });
    };
    handleGetUserInstruments();
  }, []);

  const handleDeleteInstrument = (id: number) => {
    console.log(id);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.delete(`userInstrument/${id}`).then((response) => {
      console.log(response);
    });
  };
  const handleEditInstrument = (data: Instrument) => {
    api
      .patch(`userInstrument/${instrument.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {});
  };

  const handleEditUser = async (data: UserEdit) => {
    console.log(data);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api.patch(`users/${userId}`, data).then(() => {});
  };

  const logoutBtn = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const filteredData = (data: Instrument) => {
    const newData = userBids.filter((elem) => elem.id !== data.id);
    handleAddUserInstrumentBid(data, newData);
  };

  const handleAddUserInstrumentBid = async (
    data: Instrument,
    array: Instrument[]
  ) => {
    const newData = { bids: [...array, data] };

    console.log(newData);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api.patch(`users/${userId}`, newData).then(() => {
      loadBids();
    });
  };

  // Função de dar lance

  const handleBidInstrument = (data: currentBid) => {
    const {
      title,
      description,
      category,
      minPrice,
      img,
      minBid,
      currentBid,
      userId,
      id,
    } = instrument;

    const newData = {
      title: title,
      description: description,
      category: category,
      minPrice: minPrice,
      img: img,
      minBid: minBid,
      currentBid: data.currentBid,
      bidUserId: userId,
      userId: userId,
      id: id,
    };

    if (newData.currentBid <= currentBid + minBid) {
      toastFailBidRegister();
    } else {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .patch(`userInstrument/${instrument.id}`, newData)

        .then(() => {
          toastSuccesBid();
          setModalBid(false);
          filteredData(newData);
          loadInstruments();
        })
        .catch((response) => {
          console.log(response);
          toastFail();
        })
        .finally();
    }
  };

  return (
    <UserContext.Provider
      value={{
        isModalAddOpen,
        setModalAdd,
        instrument,
        setInstrument,
        instruments,
        setInstruments,
        isModalEditUser,
        setModalEditUser,
        login,
        handleEditUser,
        loading,
        modalBid,
        handleLogin,
        handlePostInstrument,
        handleDeleteInstrument,
        handleEditInstrument,
        userFilt,
        setUserFilt,
        navigate,
        setModalEdit,
        isModalEditOpen,
        logoutBtn,
        token,
        userId,
        userInst,
        userBids,
        loadBids,
        setModalBid,
        handleRegister,
        handleBidInstrument,
        handleGetInstrument,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
