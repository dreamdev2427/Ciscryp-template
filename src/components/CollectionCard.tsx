import { nftsImgs } from "contains/fakeData";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import VerifyIcon from "./VerifyIcon";

export interface CollectionCardProps {
  className?: string;
  imgs?: string[];
}

const CollectionCard: FC<CollectionCardProps> = ({
  className,
  imgs = [nftsImgs[9], nftsImgs[10], nftsImgs[11], nftsImgs[8]],
}) => {
  return (
    <div
      className={`CollectionCard relative p-4 rounded-2xl overflow-hidden h-[410px] flex flex-col group ${className}`}
    >
      <NcImage containerClassName="absolute inset-0" src={imgs[0]} />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 group-hover:h-full to-transparent "></div>

      <div className="relative mt-auto">
        {/* AUTHOR */}
        <div className="flex items-center">
          <Avatar sizeClass="h-6 w-6" containerClassName="ring-2 ring-white" />
          <div className="ml-2 text-xs text-white">
            <span className="font-normal">by</span>
            {` `}
            <span className="font-medium">Jane Cooper</span>
          </div>
          <VerifyIcon iconClass="w-4 h-4" />
        </div>
        {/* TITLE */}
        <h2 className="font-semibold text-3xl mt-1.5 text-white">
          Awesome collection
        </h2>
        {/* LISTS */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          <NcImage
            containerClassName="w-full h-20 rounded-xl overflow-hidden"
            src={imgs[1]}
          />
          <NcImage
            containerClassName="w-full h-20 rounded-xl overflow-hidden"
            src={imgs[2]}
          />
          <NcImage
            containerClassName="w-full h-20 rounded-xl overflow-hidden"
            src={imgs[3]}
          />
        </div>
      </div>
      <Link to={"/page-collection"} className="absolute inset-0"></Link>
    </div>
  );
};

export default CollectionCard;
