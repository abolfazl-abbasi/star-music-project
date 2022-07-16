import React from "react";
import Navbar from "../Components/Navbar";
import Player from "../Components/Player";
import Sidebar from "../Components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="grid w-full grid-cols-4 lg:grid-cols-5">
        <Sidebar />
        <div className="salam col-span-4 md:col-span-3 lg:col-span-4">
          <Navbar />
          {"children"}
        </div>
        <Player />
      </div>
    </>
  );
};

export default MainLayout;
