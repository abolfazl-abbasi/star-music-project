import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Player from "../Components/Player";
import Sidebar from "../Components/Sidebar";
import BottomSidebar from "../Components/BottomSidebar";

const MainLayout = ({ children }) => {
  const mainSection = useRef();
  useEffect(() => {
    mainSection.current.addEventListener("scroll", (e) => {
      e.target.scrollTop >= 20
        ? document.querySelector(".navbar").classList.add("musicNavbar")
        : document.querySelector(".navbar").classList.remove("musicNavbar");
    });
  }, []);
  return (
    <>
      <div className="items-star flex h-full min-h-screen w-full pb-[90px]">
        <Sidebar />
        <div
          className="mainSection mb-52 w-full overflow-auto [height:calc(100vh-145px)] md:[height:calc(100vh-95px)]"
          ref={mainSection}
        >
          <Navbar />
          <div className="childrenSection">{children}</div>
        </div>
        <Player />
        <BottomSidebar />
      </div>
    </>
  );
};

export default MainLayout;
