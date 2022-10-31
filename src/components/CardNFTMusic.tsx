import React, { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import { nftsAbstracts } from "contains/fakeData";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import musicWave from "images/musicWave.png";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer";
import { nanoid } from "@reduxjs/toolkit";
import AudioForNft from "./AudioForNft";
import RemainingTimeNftCard from "./RemainingTimeNftCard";

export interface CardNFTMusicProps {
  className?: string;
  featuredImage?: string;
  isLiked?: boolean;
}

const CardNFTMusic: FC<CardNFTMusicProps> = ({
  className = "",
  isLiked,
  featuredImage = nftsAbstracts[18],
}) => {
  const [DEMO_NFT_ID] = React.useState(nanoid());

  const renderAvatars = () => {
    return (
      <div className="flex -space-x-1.5 ">
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
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-800"
          sizeClass="h-5 w-5 text-sm"
        />
      </div>
    );
  };

  const renderIcon = (state?: "playing" | "loading") => {
    if (!state) {
      return (
        <svg className="ml-0.5 w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
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

    return (
      <svg className=" w-9 h-9" fill="none" viewBox="0 0 24 24">
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
  };

  const renderListenButtonDefault = (state?: "playing" | "loading") => {
    return (
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer`}
      >
        {renderIcon(state)}
      </div>
    );
  };

  return (
    <div
      className={`nc-CardNFTMusic relative group ${className}`}
      data-nc-id="CardNFTMusic"
    >
      {/* AUDIO MEDiA */}
      <AudioForNft nftId={DEMO_NFT_ID} />

      <div className="">
        <NcImage
          containerClassName="block aspect-w-12 aspect-h-10 w-full h-0 rounded-3xl overflow-hidden z-0"
          src={featuredImage}
          className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* LIKE AND AVATARS */}
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center space-x-2">
        <LikeButton liked={isLiked} className=" !h-9" />
      </div>

      {/* ----TIME--- */}
      <RemainingTimeNftCard />

      {/* MAIN CONTENT */}
      <div className="w-11/12 max-w-[360px] transform -mt-32 relative z-10">
        <div className={`px-5 flex items-center space-x-4 relative `}>
          <div className={`flex-grow flex justify-center`}>
            <img src={musicWave} alt="musicWave" />
          </div>
          <ButtonPlayMusicRunningContainer
            className="relative z-10"
            nftId={DEMO_NFT_ID}
            renderDefaultBtn={() => renderListenButtonDefault()}
            renderPlayingBtn={() => renderListenButtonDefault("playing")}
            renderLoadingBtn={() => renderListenButtonDefault("loading")}
          />
        </div>

        <Link
          to={"/nft-detailt"}
          className="block p-5 mt-5 bg-white dark:bg-neutral-800 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none"
        >
          <div className="flex items-center justify-between">
            <h2 className={`text-lg font-semibold`}>NFT music #1132</h2>
            {renderAvatars()}
          </div>

          <div className="w-full mt-1.5 flex justify-between items-end ">
            <Prices
              labelText="Price"
              labelTextClassName="bg-white dark:bg-neutral-800 "
            />
            <span className="block text-neutral-500 dark:text-neutral-400 text-xs">
              {Math.floor(Math.random() * 90) + 10} in stock
            </span>
          </div>
        </Link>
      </div>

      <Link to={"/nft-detailt"} className="absolute inset-0 "></Link>
    </div>
  );
};

export default CardNFTMusic;
