import React, { PropsWithChildren } from "react";

import { MenuProvider } from "./menu";

const GlobalContext = ({ children }: PropsWithChildren<{}>) => {
  return <MenuProvider>{children}</MenuProvider>
}

export default GlobalContext;
