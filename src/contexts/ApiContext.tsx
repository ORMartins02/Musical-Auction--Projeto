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

export interface Instrument {
  title: string;
  description: string;
  category: string;
  minPrice: number;
  img: string;
  currentBid?: number;
  bidUserId?: null;
  userId?: number;
  id: number;
}

export interface UserProviderData {
  login: {
    userImg: string | undefined;
    name: string;
    age: number;
    bids: Instrument[];
  };

  instrument: Instrument;
  isModalEditOpen: boolean;
  isModalAddOpen: boolean;
  loading: boolean;
  instruments: Instrument[];
  setInstruments: Dispatch<SetStateAction<Instrument[]>>;
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => Promise<void>;
  handlePostInstrument: (data: Instrument) => void;
  handleGetInstruments: () => void;
  handleEditInstrument: (data: Instrument) => void;
  userFilt: string;
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

// interface bids {
//   id: string;
//   title: string;
//   status: string;
//   created_at: Date;
//   updated_at: Date;
// }

// interface IUser {
//   email: string;
//   name: string;
//   ageOfBirth: string;
//   contact: string;
//   address: string;
//   userImg: string;
//   bids: bids[];
//   id: number;
// }

export const UserProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [instrument, setInstrument] = useState<Instrument>({} as Instrument);
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [isModalEditOpen, setModalEdit] = useState(false);
  const [isModalAddOpen, setModalAdd] = useState(false);
  const [login, setLogin] = useState<UserProviderData["login"]>(
    {} as UserProviderData["login"]
  );
  const [userFilt, setUserFilt] = useState<string>("products");
  const [userInst, setUserInst] = useState<Instrument[]>();
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

  useEffect(() => {
    setLoading(true);

    setLoading(false);
    loadInstruments();
  }, []);

  useEffect(() => {
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
      })
      .catch((err) => console.log(err));
  };

  const handleLogin: SubmitHandler<UserLogin> = async (data) => {
    await api
      .post("login", data)
      .then((response) => {
        window.localStorage.setItem("@token", response.data.accessToken);
        window.localStorage.setItem("@userId", response.data.user.id);
        setLogin(response.data.user);
        navigate(`/dashboard/:${response.data.user.id}`, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handlePostInstrument = (data: Instrument) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .post("userInstrument", data)
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
  const logoutBtn = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
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
        login,
        loading,
        handleRegister,
        handleLogin,
        handlePostInstrument,
        handleGetInstruments,
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
