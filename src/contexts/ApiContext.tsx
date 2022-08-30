import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface UserProps {
  children: ReactNode;
}

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
  contact: string;
  address: string;
}

interface UserLogin {
  login: string;
  password: string;
}

interface Instrument {
  title: string;
  description: string;
  price: number;
  userId?: number;
  id?: number;
}

export interface UserProviderData {
  login: {
    name: string;
    age: number;
  };
  instruments: Instrument[];
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => void;
  handlePostInstrument: (data: Instrument) => void;
  handleGetInstruments: () => void;
  handleGetUserById: () => void;
  handleGetUserInstruments: () => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const navigate = useNavigate();
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [login, setLogin] = useState<UserProviderData["login"]>(
    {} as UserProviderData["login"]
  );

  const handleRegister = async ({
    email,
    password,
    name,
    age,
    contact,
    address,
  }: Omit<User, "id">) => {
    const newData = {
      email,
      password,
      name,
      age,
      contact,
      address,
    };

    await api
      .post("register", newData)
      .then((response) => {
        if (response.status === 201) {
          //   return navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (data: UserLogin) => {
    api
      .post("login", data)
      .then((response) => {
        if (response.status === 200) {
          setLogin(response.data.user);
          window.localStorage.setItem("@token", response.data.token);
          window.localStorage.setItem("@userId", response.data.user.id);
          // navigate(`/Dashboard/${response.data.user.id}`);
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
      .get<{ title: string; description: string; price: number }>(
        `userInstrument?userId=${userId}`
      )
      .then((response) => {
        const userInstrument = {
          title: response.data.title,
          description: response.data.description,
          price: response.data.price,
        };
      });
  };

  return (
    <UserContext.Provider
      value={{
        instruments,
        login,
        handleRegister,
        handleLogin,
        handlePostInstrument,
        handleGetInstruments,
        handleGetUserById,
        handleGetUserInstruments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
