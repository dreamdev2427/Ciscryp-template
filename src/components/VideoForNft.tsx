import { useAppSelector } from "app/hooks";
import { selectCurrentMediaRunning } from "app/mediaRunning/mediaRunning";
import React, { FC } from "react";

interface VideoForNftProps {
  src?: string;
  className?: string;
  nftId: string;
}

const VideoForNft: FC<VideoForNftProps> = ({
  nftId,
  className = "absolute inset-0 z-10 flex items-center justify-center bg-neutral-700 rounded-3xl overflow-hidden",
  src = "./nft.mp4",
}) => {
  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);

  const IS_PLAY =
    currentMediaRunning.nftId === nftId &&
    currentMediaRunning.state === "playing";

  if (!IS_PLAY) {
    return null;
  }

  return (
    <div
      className={`${className} ${IS_PLAY ? "" : "opacity-0 z-[-1]"}`}
      title="Play"
      dangerouslySetInnerHTML={{
        __html: `<video class="w-full h-full" playsinline autoplay muted loop  >
                    <source src=${src} type="video/mp4" />
                    our browser does not support the video tag.
                  </video>`,
      }}
    />
  );
};

export default VideoForNft;
