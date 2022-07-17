import React, { useEffect, useRef, useState } from "react";
import {
  Heart,
  Star1,
  Shuffle,
  Backward,
  Forward,
  RepeateMusic,
  RepeateOne,
  VolumeHigh,
  VolumeCross,
  Pause,
  CloseSquare,
} from "iconsax-react";
import { Link } from "react-router-dom";

const Player = () => {
  const [MusicData] = useState({
    title: "Khanevadegi 2",
    artists: [
      { artistName: "Yas", artistId: 22220 },
      { artistName: "Tataloo", artistId: 22221 },
      { artistName: "Putak", artistId: 22222 },
      { artistName: "Khalse", artistId: 22223 },
      { artistName: "Laito", artistId: 22224 },
      { artistName: "Pishro", artistId: 22225 },
    ],
    musicImage:
      "./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif",
    musicPath:
      "https://ts1.tarafdari.com/contents/user202821/content-sound/hozier-take-me-to-church.mp3",
  });

  const musicPLayer = useRef();
  const musicAudio = useRef();
  const musicInput = useRef();
  const musicVolume = useRef();

  const [playing, setPlaying] = useState(false);
  const [replay, setReplay] = useState("");
  const [durationMusicTime, setDurationMusicTime] = useState();
  const [currentMusicTime, setCurrentMusicTime] = useState();
  const [musicVolumeState, setMusicVolumeState] = useState(80);
  const [isMuted, setIsMuted] = useState("unmuted");

  const handleRangeVolumeRange = (e) => {
    const input = e.target;
    input.style.background = `linear-gradient(90deg, #ffffff ${input.value}%, #484848 ${input.value}%)`;
    musicAudio.current.volume = input.value / 100;
    setMusicVolumeState(input.value);
    setIsMuted("unmuted");
  };

  const handleRangeMusicInput = () => {
    setCurrentMusicTime(musicInput.current.value);
    musicInput.current.style.background = `linear-gradient(90deg, #ffffff ${
      (musicInput.current.value / durationMusicTime) * 100
    }%, #484848 ${(musicInput.current.value / durationMusicTime) * 100}%)`;
    musicAudio.current.currentTime = musicInput.current.value;
  };

  const closePlayerHandler = () => {
    setPlaying(false);
    setCurrentMusicTime(0);
    setDurationMusicTime(0);
    setIsMuted("unmuted");
    setReplay("");
    musicPLayer.current.style.display = "none";
  };

  const volumeHandler = (order) => {
    setIsMuted(order);
    if (order === "unmuted") {
      musicAudio.current.volume = musicVolumeState / 100;
      musicVolume.current.value = musicVolumeState;
    }
    if (order === "muted") {
      musicAudio.current.volume = 0;
    }
  };

  const PlayMusicHandler = () => {
    if (!playing) {
      setPlaying(true);
    }
  };

  const PauseMusicHandler = () => {
    setPlaying(false);
  };

  const replayHandler = (text) => {
    setReplay(text);
  };

  const handleMusicTime = (time) => {
    if (time) {
      return `${time / 60 < 10 ? "0" : ""}${Math.floor(time / 60)}:${
        time % 60 < 10 ? "0" : ""
      }${Math.floor(time % 60)}`;
    }
    return "00:00";
  };

  useEffect(() => {
    playing ? musicAudio.current.play() : musicAudio.current.pause();
  }, [playing]);

  useEffect(() => {
    musicAudio.current.volume = musicVolumeState / 100;
  }, [musicVolumeState]);

  useEffect(() => {
    musicAudio.current.addEventListener(
      "loadedmetadata",
      () => {
        setDurationMusicTime(Math.floor(musicAudio.current.duration));
      },
      { once: true }
    );

    musicAudio.current.addEventListener("timeupdate", () => {
      setCurrentMusicTime(Math.floor(musicAudio.current.currentTime));
    });

    musicAudio.current.addEventListener("ended", () => {
      setCurrentMusicTime(0);
      setPlaying(false);
      if (replay === "oneTime") {
        setReplay("");
        setPlaying(true);
        musicAudio.current.play();
      }
      if (replay === "allTime") {
        setReplay("allTime");
        setPlaying(true);
        musicAudio.current.play();
      }
    });
  }, [musicAudio, replay]);

  useEffect(() => {
    playing ? musicAudio.current.play() : musicAudio.current.pause();
  }, [playing]);

  useEffect(() => {
    musicInput.current.addEventListener("mousedown", () => {
      musicAudio.current.pause();
    });
    musicInput.current.addEventListener("mouseup", () => {
      playing ? musicAudio.current.play() : musicAudio.current.pause();
    });
  }, [musicInput, playing]);

  return (
    <>
      <div
        className="music-player fixed bottom-16 flex h-20 w-screen select-none flex-col md:bottom-0 md:h-24"
        ref={musicPLayer}
      >
        <div className="relative top-0 w-full">
          <input
            type="range"
            className="rangeInput absolute top-0 w-full"
            onChange={(e) => handleRangeMusicInput(e)}
            min={0}
            max={durationMusicTime}
            value={currentMusicTime | 0}
            ref={musicInput}
            style={{
              background: `linear-gradient(90deg, #ffffff ${
                (currentMusicTime / durationMusicTime) * 100
              }%, #484848 ${(currentMusicTime / durationMusicTime) * 100}%)`,
            }}
          />
        </div>
        <div className="grid h-full grid-cols-3 px-4">
          <div className="col-span-2 flex h-full items-center lg:col-span-1">
            <img
              src={require("./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif")}
              alt=""
              className="h-12 w-12 rounded-xl md:h-16 md:w-16"
            />
            <div className="ml-3 w-full">
              <div className="flex items-center pb-1">
                <Link className="max-w-1/2 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm md:text-lg">
                  {MusicData.title}
                </Link>
                <div className="ml-4 flex items-center pt-[2px]">
                  <Heart
                    className="mr-2 h-4 w-4 cursor-pointer transition-all hover:scale-110 hover:text-red-400"
                    variant="Outline"
                  />
                  <Star1
                    className="h-4 w-4 cursor-pointer transition-all hover:scale-110 hover:text-yellow-400"
                    variant="Outline"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <h4 className="w-2/5 overflow-hidden overflow-ellipsis whitespace-nowrap text-xs opacity-50 lg:w-3/5">
                  {MusicData.artists.map((artist) => (
                    <>
                      <Link
                        to={`/artists/${artist.artistId}`}
                        className="transition-all hover:text-white/50"
                      >
                        {artist.artistName}
                      </Link>
                      {MusicData.artists.indexOf(artist) ===
                      MusicData.artists.length - 1
                        ? ""
                        : " , "}
                    </>
                  ))}
                </h4>
                <div className="ml-2 whitespace-nowrap text-xs opacity-75 sm:hidden">
                  {handleMusicTime(currentMusicTime)} /{" "}
                  {handleMusicTime(durationMusicTime)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-end lg:justify-center">
            <audio src={MusicData.musicPath} ref={musicAudio} />
            <div className="mr-5 hidden whitespace-nowrap text-sm opacity-75 sm:block lg:hidden">
              {handleMusicTime(currentMusicTime)} /{" "}
              {handleMusicTime(durationMusicTime)}
            </div>
            <Shuffle
              className="mr-2 mt-[2px] h-5 w-5 transition-all hover:scale-110"
              variant="Bulk"
            />
            <Backward
              className="mx-4 hidden h-6 w-6 transition-all hover:-translate-x-1 lg:block"
              variant="Bulk"
              onClick={() => (musicAudio.current.currentTime -= 15)}
            />
            <div
              className="playPauseButton ml-2 flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-110 lg:ml-0"
              onClick={() =>
                !playing ? PlayMusicHandler() : PauseMusicHandler()
              }
            >
              {!playing ? (
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"ml-[2px] h-5 w-5 cursor-pointer"}
                >
                  <path
                    d="M0.5 2.29628V10.2713C0.5 11.9046 2.275 12.9296 3.69167 12.1129L7.15 10.1213L10.6083 8.12128C12.025 7.30461 12.025 5.26294 10.6083 4.44628L7.15 2.44628L3.69167 0.45461C2.275 -0.362057 0.5 0.65461 0.5 2.29628Z"
                    fill="#292D32"
                  />
                </svg>
              ) : (
                <Pause
                  variant="Bold"
                  className={"h-6 w-6 cursor-pointer text-[#212121]"}
                />
              )}
            </div>
            <Forward
              className="mx-4 hidden h-6 w-6 cursor-pointer transition-all hover:translate-x-1 lg:block"
              variant="Bulk"
              onClick={() => (musicAudio.current.currentTime += 15)}
            />
            {replay === "" ? (
              <RepeateMusic
                className={`repeatMusicBtn ml-2 mt-[3px] hidden h-5 w-5 cursor-pointer opacity-60 transition-all hover:scale-110 lg:block`}
                variant="Outline"
                onClick={() => replayHandler("allTime")}
              />
            ) : (
              ""
            )}
            {replay === "allTime" ? (
              <RepeateMusic
                className={`repeatMusicBtn ml-2 mt-[3px] hidden h-5 w-5 cursor-pointer text-blue-500 opacity-60 transition-all hover:scale-110 lg:block`}
                variant="Outline"
                onClick={() => replayHandler("oneTime")}
              />
            ) : (
              ""
            )}
            {replay === "oneTime" ? (
              <RepeateOne
                className={`ml-2 mt-[3px] hidden h-5 w-5 cursor-pointer text-green-400 transition-all hover:scale-110 lg:block`}
                variant="Bulk"
                onClick={() => replayHandler("")}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-span-1 hidden items-center justify-end gap-x-8 lg:flex">
            <div className="whitespace-nowrap text-xs opacity-75">
              {handleMusicTime(currentMusicTime)} /{" "}
              {handleMusicTime(durationMusicTime)}
            </div>
            <div className="flex items-center ">
              {isMuted === "unmuted" ? (
                <VolumeHigh
                  className="h-5 w-5 cursor-pointer transition-all hover:scale-125"
                  variant="Bulk"
                  onClick={() => volumeHandler("muted")}
                />
              ) : (
                <VolumeCross
                  className="h-5 w-5 cursor-pointer text-red-400 transition-all hover:scale-125"
                  variant="Bulk"
                  onClick={() => volumeHandler("unmuted")}
                />
              )}
              <input
                type="range"
                className="rangeInput ml-2 appearance-none"
                min={0}
                max={100}
                value={musicVolumeState}
                onChange={(e) => handleRangeVolumeRange(e)}
                ref={musicVolume}
                style={{
                  background: `linear-gradient(90deg, #ffffff ${musicVolumeState}%, #484848 ${musicVolumeState}%)`,
                }}
              />
              <CloseSquare
                variant="Bulk"
                className="ml-3 h-7 w-7 cursor-pointer text-red-400 transition-all hover:scale-125 hover:text-red-600"
                onClick={() => closePlayerHandler()}
              />
            </div>
            {/* <div className="flex items-center"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
