import { useAppSelector } from "app/hooks";
import { selectCurrentMediaRunning } from "app/mediaRunning/mediaRunning";
import React, { FC, useEffect, useState } from "react";
import { useTimeoutFn } from "react-use";
import isSafariBrowser from "utils/isSafariBrowser";

interface AudioForNftProps {
  src?: string;
  className?: string;
  nftId: string;
}

const AudioForNft: FC<AudioForNftProps> = ({
  nftId,
  className = "absolute opacity-0 ",
  src = "./music.mp3",
}) => {
  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);

  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 200);

  const IS_PLAY =
    currentMediaRunning.nftId === nftId &&
    currentMediaRunning.state === "playing";

  useEffect(() => {
    if (currentMediaRunning.state === "paused") {
      setIsShowing(false);
      resetIsShowing();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMediaRunning]);

  useEffect(() => {
    const audioEl = document.getElementById(nftId) as HTMLAudioElement;
    if (!audioEl) return;

    if (IS_PLAY) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }, [IS_PLAY, nftId]);

  if (!isSafariBrowser() && !IS_PLAY) {
    return null;
  }

  // FOR SAFARI BROWSER
  if (!isShowing) {
    return null;
  }

  return (
    <div
      className={className}
      title="Play"
      dangerouslySetInnerHTML={{
        __html: `<audio id=${nftId} loop  >
                <source src=${src} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>`,
      }}
    ></div>
  );
};

export default AudioForNft;
