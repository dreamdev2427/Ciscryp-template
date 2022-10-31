import ButtonDropDownShare from "components/ButtonDropDownShare";
import NftMoreDropdown from "components/NftMoreDropdown";
import React from "react";

const LikeSaveBtns = () => {
  return (
    <div className="flow-root">
      <div className="flex text-neutral-700 dark:text-neutral-300 text-sm -mx-3 -my-1.5">
        <ButtonDropDownShare panelMenusClass="!w-52" />
        <NftMoreDropdown />
      </div>
    </div>
  );
};

export default LikeSaveBtns;
