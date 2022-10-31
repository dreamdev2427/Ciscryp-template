import React, { FC } from "react";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Navigation from "shared/Navigation/Navigation";

export interface MainNav2Props {}

const MainNav2: FC<MainNav2Props> = () => {
  return (
    <div className={`nc-MainNav2 relative z-10 ${"onTop "}`}>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo />
          <div className="hidden sm:block flex-grow max-w-xs">
            <form action="" method="POST" className="relative">
              <Input
                type="search"
                placeholder="Search items"
                className="pr-10 w-full"
                sizeClass="h-[42px] pl-4 py-3"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input type="submit" hidden value="" />
            </form>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            <Navigation />
            <div className="hidden sm:block h-10 border-l border-neutral-300 dark:border-neutral-6000"></div>
            <SwitchDarkMode />
            <ButtonPrimary
              href={"/page-upload-item"}
              sizeClass="px-4 py-2 sm:px-5"
            >
              Create
            </ButtonPrimary>
            <ButtonSecondary
              href={"/connect-wallet"}
              sizeClass="px-4 py-2 sm:px-5"
            >
              Connect Wallet
            </ButtonSecondary>
          </div>
          <div className="flex items-center space-x-1.5 xl:hidden">
            <ButtonPrimary
              href={"/page-upload-item"}
              sizeClass="px-4 py-2 sm:px-5"
            >
              Create
            </ButtonPrimary>
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
