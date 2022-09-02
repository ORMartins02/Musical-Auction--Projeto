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

export interface Instrument {
  title: string;
  description: string;
  category: string;
  minPrice: number;
  img: string;
  currentBid?: number;
  bidUserId?: null;
  userId?: number;
  id?: number;
}

export interface UserProviderData {
  login: {
    name: string;
    age: number;
  };
  loading: boolean;
  instruments: Instrument[];
  setInstruments: Dispatch<SetStateAction<Instrument[]>>;
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => void;
  handlePostInstrument: (data: Instrument) => void;
  handleGetInstruments: () => void;
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

    setLoading(false);
    loadInstruments();
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
      })
      .catch((err) => console.log(err));
  };

  const handleLogin: SubmitHandler<UserLogin> = (data) => {
    api
      .post("login", data)
      .then((response) => {
        if (response.status === 200) {
          setLogin(response.data.user);
          window.localStorage.setItem("@token", response.data.accessToken);
          window.localStorage.setItem("@userId", response.data.user.id);
          navigate(`/Dashboard/${response.data.user.id}`);
        }
      })
      .catch((err) => console.log(err));
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
      .catch((err) => console.warn(err));
  };

  const handleGetInstruments = () => {
    api.get("userInstrument").then((response) => {
      setInstruments(response.data);
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

  return (
    <UserContext.Provider
      value={{
        instruments,
        setInstruments,
        login,
        loading,
        handleRegister,
        handleLogin,
        handlePostInstrument,
        handleGetInstruments,
        handleGetUserById,
        handleGetUserInstruments,
        handleDeleteInstrument,
        handleEditInstrument,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
