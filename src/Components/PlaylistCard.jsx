import { Link } from "react-router-dom";
import { Hashtag } from "iconsax-react";

const PlaylistCard = ({ cardData }) => {
  return (
    <>
      <div className="mr-5 flex items-start space-x-5">
        <div className="w-24 cursor-pointer transition-all md:w-40">
          <div className="PlaylistCard relative h-24 w-24 overflow-hidden rounded-xl bg-[#D9983D] md:h-40 md:w-40">
            <Link
              to={`/playlists/${cardData.playlistId}`}
              className="h-full w-full"
            >
              <img src={require("./../Assets/Images/1229062-200.png")} alt="" />
            </Link>
            <div className="cardContentPlay absolute -top-10 right-[6px] hidden  h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all duration-[250ms] hover:scale-110 md:flex">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-[2px] h-[18px] w-[18px] cursor-pointer fill-[#292D32]"
              >
                <path d="M0.5 2.29628V10.2713C0.5 11.9046 2.275 12.9296 3.69167 12.1129L7.15 10.1213L10.6083 8.12128C12.025 7.30461 12.025 5.26294 10.6083 4.44628L7.15 2.44628L3.69167 0.45461C2.275 -0.362057 0.5 0.65461 0.5 2.29628Z"></path>
              </svg>
            </div>
          </div>
          <Link
            to={`/playlists/${cardData.playlistId}`}
            className="block pr-2 pt-3 text-white/75"
          >
            <div className="flex w-full items-center overflow-hidden text-ellipsis whitespace-nowrap">
              <Hashtag className="h-3 w-3 md:h-5 md:w-5" variant="Outline" />{" "}
              <span className="text-sm md:text-base">
                {cardData.playlistName}
              </span>
            </div>
            <div className="pt-1 text-xs text-white/50 md:text-sm">
              {cardData.numOfSongs} Songs
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
