import { nftsImgs, _getPersonNameRd } from "contains/fakeData";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import VerifyIcon from "./VerifyIcon";

export interface CollectionCard2Props {
  className?: string;
  imgs?: string[];
}

const CollectionCard2: FC<CollectionCard2Props> = ({
  className,
  imgs = [nftsImgs[9], nftsImgs[10], nftsImgs[11], nftsImgs[8]],
}) => {
  return (
    <div className={`CollectionCard2 group relative ${className}`}>
      <div className="relative flex flex-col rounded-2xl overflow-hidden">
        <NcImage containerClassName="aspect-w-8 aspect-h-5" src={imgs[0]} />
        <div className="grid grid-cols-3 gap-1.5 mt-1.5">
          <NcImage containerClassName="w-full h-28" src={imgs[1]} />
          <NcImage containerClassName="w-full h-28" src={imgs[2]} />
          <NcImage containerClassName="w-full h-28" src={imgs[3]} />
        </div>
      </div>
      <div className="relative mt-5 ">
        {/* TITLE */}
        <h2 className="font-semibold text-2xl group-hover:text-primary-500 transition-colors">
          Awesome collection
        </h2>
        {/* AUTHOR */}
        <div className="mt-2 flex justify-between">
          <div className="flex items-center  truncate">
            <Avatar sizeClass="h-6 w-6" />
            <div className="ml-2 text-sm truncate">
              <span className="font-normal hidden sm:inline-block">
                Creator
              </span>
              {` `}
              <span className="font-medium">{_getPersonNameRd()}</span>
            </div>
            <VerifyIcon iconClass="w-4 h-4" />
          </div>
          <span className="mb-0.5 ml-2 inline-flex justify-center items-center px-2 py-1.5 border-2 border-secondary-500 text-secondary-500 rounded-md text-xs !leading-none font-medium">
            1.255 Items
          </span>
        </div>
      </div>
      <Link to={"/page-collection"} className="absolute inset-0 "></Link>
    </div>
  );
};

export default CollectionCard2;
