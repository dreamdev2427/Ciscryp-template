import React, { FC } from "react";
import MainNav2 from "./MainNav2";

export interface Header2Props {}

const Header2: FC<Header2Props> = () => {
  return (
    <div className="nc-Header2 relative w-full z-40 ">
      <MainNav2 />
    </div>
  );
};

export default Header2;
