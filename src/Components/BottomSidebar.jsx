import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import i18next from "i18next";
import {
  Home2,
  AudioSquare,
  Setting,
  Star1,
  SearchNormal,
} from "iconsax-react";

const BottomSidebar = () => {
  const loc = useLocation();

  const [sideBarLinks] = useState([
    { title: i18next.t("SETTING"), path: "/setting", icon: Setting },
    { title: i18next.t("SEARCH"), path: "/search", icon: SearchNormal },
    { title: i18next.t("HOME"), path: "/", icon: Home2 },
    { title: i18next.t("LIBRARY"), path: "/library", icon: AudioSquare },
    { title: i18next.t("FAVORITES"), path: "/favorites", icon: Star1 },
  ]);

  return (
    <>
      <div className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t-4 border-[#212121] bg-[#0E0E0E] md:hidden">
        {sideBarLinks.map((link) => (
          <Link to={link.path} className={"text-center"}>
            <link.icon
              variant="Bulk"
              className={`relative h-7 w-7 ${
                loc.pathname === link.path ? "top-1 scale-125" : "opacity-50"
              }`}
            />
            {loc.pathname === link.path ? <div>•</div> : ""}
          </Link>
        ))}
      </div>
    </>
  );
};

export default BottomSidebar;
