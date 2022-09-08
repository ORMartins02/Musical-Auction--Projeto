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
  toastFailBidUserID,
  toastSuccesFinishOff,
} from "../components/toasts/toasts";

export interface User {
  id: number;
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
  isAuction: boolean;
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
  userFinishOff: Instrument[];
  instruments: Instrument[];
  setInstruments: Dispatch<SetStateAction<Instrument[]>>;
  handleRegister: (data: Omit<User, "id">) => void;
  handleLogin: (data: UserLogin) => Promise<void>;
  handlePostInstrument: (data: Instrument) => void;
  handleGetInstrument: (data: number) => void;
  handleBidInstrument: (data: currentBid) => void;
  handleEditInstrument: (data: Instrument) => void;
  handleEditUser: (data: UserEdit) => void;
  handleFinishAuction: (data: number) => void;
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
  intrumentId: number | undefined;
  setInstrumentId: Dispatch<SetStateAction<number | undefined>>;
  closeAuction: (data: Instrument) => void;
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
  const [instrumentId, setInstrumentId] = useState<number>();
  const [isModalAddOpen, setModalAdd] = useState(false);
  const [login, setLogin] = useState<UserProviderData["login"]>(
    {} as UserProviderData["login"]
  );
  const [userData, setUserData] = useState<User>({} as User);
  const [userBids, setUserBids] = useState<Instrument[]>([]);
  const [userFinishOff, setUserFinishOff] = useState<Instrument[]>([]);
  const [userFilt, setUserFilt] = useState<string>("products");
  const [userInst, setUserInst] = useState<Instrument[]>([]);
  const token = localStorage.getItem("@token");
  const userId = localStorage.getItem("@userId");

  const loadInstruments = () => {
    api
      .get("/userInstrument")
      .then((response) => {
        const isAuctionInstruments = response.data.filter(
          (elem: Instrument) => elem.isAuction === true
        );

        setInstruments(isAuctionInstruments);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  const loadBids = async () => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .get(`/users/${userId}`)
      .then((response) => {
        setUserData(response.data);
        setUserBids(response.data.bids);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  const loadFinishOff = async () => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .get(`/finishOffBids`)
      .then((response) => {
        // eslint-disable-next-line array-callback-return
        const instrumentsFinishOff = response.data.filter(
          (elem: Instrument) => elem.bidUserId.toString() === userId
        );
        setUserFinishOff(instrumentsFinishOff);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  useEffect(() => {
    setLoading(true);
    loadInstruments();
    loadBids();
    loadFinishOff();
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
      .post("userInstrument", {
        ...data,
        currentBid: 0,
        bidUserId: 0,
        userId: userId,
        isAuction: true,
      })
      .then(() => {
        handleGetUserInstruments();
        loadInstruments();
        setModalAdd(false);
        toastSuccesInstrumentRegister();
      })
      .catch((err) => {
        console.warn(err);
        toastFail();
      });
  };

  const handleGetInstrument = (data: number) => {
    api.get(`userInstrument/${data}`).then((response) => {
      if (response.data.userId === userId) {
        toastFailBidUserID();
      } else {
        setInstrument(response.data);
        setModalBid(true);
      }
    });
  };

  const handleGetUserInstruments = () => {
    api.get(`userInstrument?userId=${userId}`).then((response) => {
      const isAuctionInstruments = response.data.filter(
        (elem: Instrument) => elem.isAuction === true
      );
      setUserInst(isAuctionInstruments);
    });
  };

  useEffect(() => {
    handleGetUserInstruments();
  }, []);

  const handleDeleteInstrument = (id: number) => {
    console.log(id);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.delete(`userInstrument/${id}`).then((response) => {
      console.log(response);
    });
    loadInstruments();
    handleGetUserInstruments();
  };

  const handleEditInstrument = (data: Instrument) => {
    api
      .patch(`userInstrument/${instrumentId}`, data)
      .then((response) => {
        console.log(response);
        setModalEdit(!isModalEditOpen);
        loadInstruments();
        handleGetUserInstruments();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      });
  };

  const handlePostInstrumentFinishOff = (data: number) => {
    const instrumentFinishedOff = instruments.find((elem) => elem.id === data);

    console.log("instrumentFinishedOff:", instrumentFinishedOff);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .post("/finishOffBids", instrumentFinishedOff)
      .then(() => {
        toastSuccesFinishOff();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      })
      .finally();
  };

  const handleFinishAuction = async (data: number) => {
    const newData = { isAuction: false };

    await api
      .patch(`userInstrument/${data}`, newData)
      .then((response) => {
        handlePostInstrumentFinishOff(data);
        loadInstruments();
        handleGetUserInstruments();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      });
  };

  const handleEditUser = (data: UserEdit) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.patch(`users/${userId}`, data).then(() => {});
  };

  const filteredData = (data: Instrument) => {
    const newData = userBids.filter((elem) => elem.id !== data.id);
    handleAddUserInstrumentBid(data, newData);
  };

  const handleAddUserInstrumentBid = (
    data: Instrument,
    array: Instrument[]
  ) => {
    const newData = { bids: [...array, data] };
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.patch(`users/${userId}`, newData).then(() => {
      loadBids();
    });
  };

  const handleBidInstrument = (data: currentBid) => {
    const userLogedId = Number(localStorage.getItem("@userId"));

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
      isAuction,
    } = instrument;

    const newData = {
      title: title,
      description: description,
      category: category,
      minPrice: minPrice,
      img: img,
      minBid: minBid,
      currentBid: data.currentBid,
      bidUserId: userLogedId,
      userId: userId,
      id: id,
      isAuction: isAuction,
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

  const closeAuction = (data: Instrument) => {
    console.log(data);
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
        isModalEditUser,
        setModalEditUser,
        handleFinishAuction,
        login,
        handleEditUser,
        userFinishOff,
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
        intrumentId: instrumentId,
        setInstrumentId,
        closeAuction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
