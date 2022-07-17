import React from "react";
import { SearchNormal1, Crown, UserOctagon, User, Crown1 } from "iconsax-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="musicNavbar sticky top-0 z-50 grid h-16 w-full grid-cols-2 pr-5 pl-5 sm:h-24 sm:grid-cols-5 lg:grid-cols-3">
        <div className="col-span-1 flex items-center">
          <Link className="mr-4 hidden h-10 w-10 items-center justify-center rounded-[10px] bg-[#212121] pb-[2px] text-[30px] md:flex">
            {"<"}
          </Link>
          <Link className="mr-4 flex h-8 w-8 flex-col items-center justify-center rounded-[10px] bg-[#212121] pb-[2px] text-[30px] sm:h-10 sm:w-10 md:hidden">
            <div className="h-[2px] w-4 rounded bg-white/60"></div>
            <div className="my-1 h-[2px] w-5 rounded bg-white/60"></div>
            <div className="h-[2px] w-4 rounded bg-white/60"></div>
          </Link>
          <Link className="mr-4 flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#212121] pb-[2px] text-[30px] sm:hidden">
            <SearchNormal1 variant="Bulk" className="h-4 w-4 " />
          </Link>
          <div className="hidden items-center whitespace-nowrap text-xs text-white lg:flex">
            <Link className="px-0 text-white/50">Home</Link>
            <span className="px-2 text-base">{" > "}</span>
            <Link className="px-0">Favorites</Link>
          </div>
        </div>
        <div className="relative col-span-3 hidden items-center justify-center sm:flex lg:col-span-1">
          <SearchNormal1
            className="absolute left-[10px] mb-[2px] h-5 w-5"
            variant="Outline"
          />
          <input
            type="text"
            className="h-11 w-full rounded-lg bg-[#212121] pl-10 outline-none placeholder:text-[13px] placeholder:text-white/50 empty:pb-1 focus:shadow-[0_5px_14px_-3px_black]"
            placeholder="Search music, artist, albums..."
          />
        </div>
        <div className="col-span-1 hidden items-center justify-end lg:flex">
          <Link className="flex cursor-pointer items-center rounded-md px-3 py-2 transition-all hover:bg-[#212121]">
            <div className="h-8 w-8 lg:h-10 lg:w-10">
              <img
                src={require("./../Assets/Images/ab67616d0000b2738bc7f6c85b6ebd9624cc7f83 (1).jfif")}
                alt=""
                className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
              />
            </div>
            <div className="mr-3 ml-2 text-[8px] lg:text-[10px]">
              <h3 className="text-[10px]">Abolfazl Abbasi</h3>
              <h5 className="flex items-center">
                Premium {" • "}
                <Crown
                  color="#ffb932"
                  className={"crown mb-[2px] h-[10px] w-[10px]"}
                  variant="Bold"
                />
              </h5>
            </div>
            <div className="ml-1 text-[10px]">
              <UserOctagon className="h-4 w-4" variant="Bulk" />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end lg:hidden">
          <Link className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#212121] pb-[2px] text-[30px] sm:h-10 sm:w-10">
            <User className="h-4 w-4 opacity-70 sm:h-5 sm:w-5" variant="Bulk" />
            <Crown1
              color="#ffb932"
              className={
                "crown absolute top-[2px] h-[10px] w-[10px] sm:top-[6px]"
              }
              variant="Bulk"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
