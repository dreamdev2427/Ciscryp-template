import React, { FC } from "react";
import MainNav2Logged from "./MainNav2Logged";

export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  return (
    <div className="nc-HeaderLogged relative w-full z-40 ">
      {/* NAV */}
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
