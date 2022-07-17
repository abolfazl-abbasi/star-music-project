import React from "react";
import Navbar from "../Components/Navbar";
import Player from "../Components/Player";
import Sidebar from "../Components/Sidebar";
import BottomSidebar from "../Components/BottomSidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="items-star flex h-full min-h-screen w-full pb-[90px]">
        <Sidebar />
        <div className="mb-40 w-full overflow-auto [height:calc(100vh-95px)] ">
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
