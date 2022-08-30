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
  contact: number;
  address: string;
}

interface UserLogin {
  login: string;
  password: string;
}

export interface UserProviderData {
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const navigate = useNavigate();

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

  const handleLogin = (data: UserLogin) => {};
  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
