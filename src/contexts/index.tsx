import React, { ReactNode } from "react";
import { UserProvider } from "./ApiContext";

interface IPropsProviders {
  children: ReactNode;
}

const Providers = ({ children }: IPropsProviders) => {
  return <UserProvider>{children}</UserProvider>;
};
export default Providers;
