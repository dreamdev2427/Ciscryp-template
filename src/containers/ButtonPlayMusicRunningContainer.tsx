import React, { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  changeCurrentMediaRunning,
  changeStateMediaRunning,
  MediaRunningState,
  addNewIdListAudio,
  selectCurrentMediaRunning,
} from "app/mediaRunning/mediaRunning";
import iconPlaying from "images/icon-playing.gif";
import isSafariBrowser from "utils/isSafariBrowser";

export interface ButtonPlayMusicRunningContainerProps {
  className?: string;
  nftId: string;
  renderChildren?: (
    isCurrentRunning: boolean,
    state: MediaRunningState["state"]
  ) => ReactNode;
  renderDefaultBtn?: () => ReactNode;
  renderLoadingBtn?: () => ReactNode;
  renderPlayingBtn?: () => ReactNode;
}

const ButtonPlayMusicRunningContainer: FC<
  ButtonPlayMusicRunningContainerProps
> = ({
  className = "",
  nftId,
  renderChildren,
  renderDefaultBtn,
  renderLoadingBtn,
  renderPlayingBtn,
}) => {
  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);
  const dispatch = useAppDispatch();

  // STATE
  const mediaState = currentMediaRunning.state;

  //
  useEffect(() => {
    // check safari
    if (!nftId || !isSafariBrowser()) {
      return;
    }
    dispatch(addNewIdListAudio(nftId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nftId]);
  //

  const handleClickNewAudio = () => {
    return dispatch(
      changeCurrentMediaRunning({
        nftId: nftId,
        state: "playing",
      })
    );
  };

  const handleClickNewAudioWhenMediaRunning = () => {
    if (nftId === currentMediaRunning.nftId) {
      return dispatch(
        changeCurrentMediaRunning({
          nftId,
          state: "playing",
        })
      );
    }
    return dispatch(
      changeCurrentMediaRunning({
        nftId,
        state: "playing",
      })
    );
  };

  const handleClickButton = () => {
    // PLAYING MEDIA RUNNING FOR SAFARI
    const mediaEl = document.getElementById(nftId) as HTMLVideoElement;
    if (mediaEl) {
      mediaEl.play();
    }

    // IF NOT EXIST MEDIA
    if (!currentMediaRunning.nftId || !currentMediaRunning.state) {
      return handleClickNewAudio();
    }

    // IF MEDIA RUNNING AND CLICK OTHER POST
    if (currentMediaRunning.nftId !== nftId) {
      return handleClickNewAudioWhenMediaRunning();
    }

    if (currentMediaRunning.state === "playing") {
      return dispatch(changeStateMediaRunning("paused"));
    }

    return dispatch(changeStateMediaRunning("playing"));
  };

  const _renderDefaultBtn = () => {
    if (renderDefaultBtn) {
      return renderDefaultBtn();
    }
    return "Media Icon...";
  };

  const _renderPlayingBtn = () => {
    // RENDER DEFAULT IF IT NOT CURRENT
    if (currentMediaRunning.nftId !== nftId) {
      return _renderDefaultBtn();
    }

    // RENDER WHEN IS CURRENT
    if (renderPlayingBtn) {
      return renderPlayingBtn();
    }

    return (
      <span className="z-10 bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer">
        <img className="w-5" src={iconPlaying} alt="paused" />
      </span>
    );
  };

  return (
    <div
      className={`nc-ButtonPlayMusicRunningContainer select-none ${className}`}
      data-nc-id="ButtonPlayMusicRunningContainer"
      onClick={handleClickButton}
    >
      {renderChildren ? (
        renderChildren(currentMediaRunning.nftId === nftId, mediaState)
      ) : (
        <>
          {(!mediaState || mediaState === "paused" || mediaState === "ended") &&
            _renderDefaultBtn()}

          {/* PLAYING ICON */}
          {mediaState === "playing" && _renderPlayingBtn()}
        </>
      )}
    </div>
  );
};

export default ButtonPlayMusicRunningContainer;
