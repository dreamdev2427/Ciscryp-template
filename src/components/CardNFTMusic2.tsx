import { nanoid } from "@reduxjs/toolkit";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer";
import { nftsAbstracts } from "contains/fakeData";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import AudioForNft from "./AudioForNft";
import Prices from "./Prices";

export interface CardNFTMusic2Props {
  className?: string;
  featuredImage?: string;
}

const CardNFTMusic2: FC<CardNFTMusic2Props> = ({
  className = "",

  featuredImage = nftsAbstracts[18],
}) => {
  const [DEMO_NFT_ID] = React.useState(nanoid());

  const renderAvatars = () => {
    return (
      <div className="hidden sm:flex -space-x-1.5 ">
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-800"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-800"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-800"
          sizeClass="h-5 w-5 text-sm"
        />
      </div>
    );
  };

  const renderIcon = (state?: "loading" | "playing") => {
    switch (state) {
      case "loading":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
            ></path>
            <path
              fill="currentColor"
              d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
            ></path>
            <path
              fill="currentColor"
              d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
            ></path>
          </svg>
        );

      case "playing":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.25 6.75V17.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.75 6.75V17.25"
            ></path>
          </svg>
        );

      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
            ></path>
          </svg>
        );
    }
  };

  const renderDefaultBtnListen = (state?: "loading" | "playing") => {
    return (
      <span className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900/50 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer">
        {renderIcon(state)}
      </span>
    );
  };

  return (
    <div
      className={`nc-CardNFTMusic2 relative flex justify-between p-2 space-x-2 rounded-3xl bg-neutral-100 dark:bg-neutral-800 hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="CardNFTMusic2"
    >
      <Link to={"/nft-detailt"} className="flex-grow flex space-x-4">
        <div className="relative w-16 sm:w-24">
          <NcImage
            containerClassName="absolute inset-0 rounded-2xl overflow-hidden shadow-lg "
            src={featuredImage}
          />
        </div>

        <div className="flex flex-col justify-center flex-grow">
          <h2 className={`block font-medium sm:text-lg`}>NFT music #114</h2>
          <div className=" flex items-center pt-3 mt-1.5">
            {renderAvatars()}
            <Prices
              price="1.00 ETH"
              labelText="Price"
              className="sm:ml-3.5"
              contentClass="py-1.5 px-2 sm:px-3 text-xs sm:text-sm font-semibold"
              labelTextClassName="bg-neutral-100 dark:bg-neutral-800 "
            />
            <span className="block ml-3.5 text-neutral-500 dark:text-neutral-400 text-xs">
              1 of 100
            </span>
          </div>
        </div>
      </Link>

      <ButtonPlayMusicRunningContainer
        nftId={DEMO_NFT_ID}
        className="flex items-center"
        renderDefaultBtn={() => renderDefaultBtnListen()}
        renderLoadingBtn={() => renderDefaultBtnListen("loading")}
        renderPlayingBtn={() => renderDefaultBtnListen("playing")}
      ></ButtonPlayMusicRunningContainer>

      {/* AUDIO MEDiA */}
      <AudioForNft className="absolute opacity-0" nftId={DEMO_NFT_ID} />
    </div>
  );
};

export default CardNFTMusic2;
