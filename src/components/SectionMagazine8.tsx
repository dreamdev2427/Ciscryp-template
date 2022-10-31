import Heading from "components/Heading/Heading";
import { nftsAbstracts } from "contains/fakeData";
import React, { FC } from "react";
import CardNFTMusic from "./CardNFTMusic";
import CardNFTMusic2 from "./CardNFTMusic2";

export interface SectionMagazine8Props {
  className?: string;
}

const SectionMagazine8: FC<SectionMagazine8Props> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionMagazine8 relative ${className}`}>
      <Heading
        desc={"Click on music icon and enjoy NTF music or audio "}
        className="mb-14 text-neutral-900 dark:text-neutral-50"
      >
        Listen NFTs audio live
      </Heading>
      <div className={`grid grid-cols-1 sm:grid-cols-6 gap-6 2xl:gap-8`}>
        <CardNFTMusic
          featuredImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          className="sm:col-span-3 xl:col-span-2"
        />
        <CardNFTMusic
          featuredImage="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          className="sm:col-span-3 xl:col-span-2"
        />
        <div className="grid grid-rows-3 gap-6 xl:gap-8 sm:col-span-6 xl:col-span-2">
          {[nftsAbstracts[2], nftsAbstracts[4], nftsAbstracts[7]].map(
            (p, index) => (
              <CardNFTMusic2 featuredImage={p} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine8;
