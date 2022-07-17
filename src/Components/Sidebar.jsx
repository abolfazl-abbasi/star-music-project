import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home2,
  AudioSquare,
  Setting,
  Star1,
  MiniMusicSqaure,
  SearchNormal,
} from "iconsax-react";
import i18next from "i18next";
import { useAnimation } from "../Hooks/UseAnimation";
import { useOnClickOutside } from "../Hooks/UseOnClickOutside";

// console.log(require("./../Assets/Languages/En.json"));

i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: require("./../Assets/Languages/En.json"),
    },
    fa: {
      translation: require("./../Assets/Languages/Fa.json"),
    },
  },
});

console.log(i18next.t("HOME"));

const Sidebar = () => {
  const [SideBarLinks] = useState([
    { title: i18next.t("HOME"), path: "/", icon: Home2 },
    { title: i18next.t("SEARCH"), path: "/search", icon: SearchNormal },
    { title: i18next.t("LIBRARY"), path: "/library", icon: AudioSquare },
    { title: i18next.t("FAVORITES"), path: "/favorites", icon: Star1 },
    { title: i18next.t("SETTING"), path: "/setting", icon: Setting },
  ]);

  const [PlayLists] = useState([
    { playListId: 2238200, title: "Take me the church" },
    { playListId: 2238201, title: "Take me the church" },
    { playListId: 2238202, title: "Take me the church" },
    { playListId: 2238203, title: "Take me the church" },
    { playListId: 2238200, title: "Take me the church" },
    { playListId: 2238201, title: "Take me the church" },
    { playListId: 2238202, title: "Take me the church" },
    { playListId: 2238203, title: "Take me the church" },
    { playListId: 2238200, title: "Take me the church" },
    { playListId: 2238201, title: "Take me the church" },
    { playListId: 2238202, title: "Take me the church" },
    { playListId: 2238203, title: "Take me the church" },
  ]);

  const loc = useLocation();

  const sideBar = useRef();

  const sideBarAnimation = useAnimation("elastic", 1000, 0);

  useOnClickOutside(
    sideBar,
    () => (sideBar.current.style.left = -sideBarAnimation * 350 + "px")
  );

  return (
    <>
      <div
        className="fixed left-0 top-0 w-72 bg-[#212121] transition-all md:static md:block lg:w-80"
        ref={sideBar}
        style={{ left: "-350px" }}
      >
        <div className="sticky top-0">
          <div className="flex w-fit items-center pt-6 pl-3 lg:pl-4 xl:pl-6">
            <img
              src={require("./../Assets/Images/red-circle-fox-tail-transparent-images-5.png")}
              alt=""
              className="mr-3 w-11 xl:w-14"
            />
            <div className="text-end">
              <h1 className="xl:text-xl">Star Music</h1>
              <h4 className="text-[7px] font-semibold text-[#9a9a9a] xl:text-[9px]">
                Star Site Compony
              </h4>
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center xl:mt-8">
            <div className="w-full">
              {SideBarLinks.map((link) => (
                <Link
                  to={link.path}
                  className={`mb-1 flex h-10 w-full items-center border-green-600 pl-3 opacity-60 transition-all hover:bg-[rgba(255,255,255,0.02)] lg:pl-4 xl:pl-6 ${
                    loc.pathname === link.path ? "sideBarLink-active" : ""
                  }`}
                >
                  <link.icon className="h-5 w-5 lg:h-6 lg:w-6" variant="Bulk" />
                  <div className="ml-3 text-xs lg:text-sm">{link.title}</div>
                </Link>
              ))}
            </div>
            <div className="mt-4 w-full">
              <div className="mb-2 flex w-full items-center justify-between pr-3 pl-3 lg:pl-4 xl:pl-6">
                <h2 className="text-xs [letter-spacing:3px]">
                  {i18next.t("PLAYLISTS")}
                </h2>
                <div className="text-lg">+</div>
              </div>
              <div className="mx-3 max-h-44 overflow-y-auto">
                {PlayLists.map((playList) => (
                  <Link
                    to={`/playLists/${playList.playListId}`}
                    className={`mb-1 flex h-8 w-full items-center border-green-600 pl-2 opacity-60 transition-all hover:bg-[rgba(255,255,255,0.02)] lg:pl-2 xl:pl-4 ${
                      loc.pathname === `/playLists/${playList.playListId}`
                        ? "sideBarLink-active"
                        : ""
                    }`}
                  >
                    <MiniMusicSqaure className="h-5 w-5" variant="Bulk" />
                    <div className="ml-3 w-5/6 overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
                      {playList.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
