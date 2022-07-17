import { Link } from "react-router-dom";

const MusicCard = ({ cardData }) => {
  return (
    <>
      <div className="mr-5 flex items-start space-x-5" key={cardData.id}>
        <div className="w-[85px] cursor-pointer transition-all md:w-32">
          <div className="MusicCard relative h-[85px] w-[85px] overflow-hidden rounded-xl md:h-32 md:w-32">
            <Link
              to={`/posts/${cardData.title.toLowerCase().replaceAll(" ", "-")}`}
              className="h-full w-full"
            >
              <img src={cardData.musicImage} alt="" />
            </Link>
            <button className="cardContentPlay absolute -top-8 right-[6px] hidden h-8  w-8 items-center justify-center rounded-full bg-white/20 transition-all duration-[250ms] hover:scale-110 md:flex">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-[2px] h-[14px] w-[14px] cursor-pointer fill-[#292D32]"
              >
                <path d="M0.5 2.29628V10.2713C0.5 11.9046 2.275 12.9296 3.69167 12.1129L7.15 10.1213L10.6083 8.12128C12.025 7.30461 12.025 5.26294 10.6083 4.44628L7.15 2.44628L3.69167 0.45461C2.275 -0.362057 0.5 0.65461 0.5 2.29628Z"></path>
              </svg>
            </button>
            <Link
              to={`/posts/${cardData.title.toLowerCase().replaceAll(" ", "-")}`}
              className="cardContent absolute -bottom-12 hidden h-10 w-full flex-col items-center justify-center bg-white/20 text-sm transition-all duration-[250ms] md:flex"
            >
              <div>{cardData.singer}</div>
              <div className="text-xs">{cardData.genre}</div>
            </Link>
          </div>
          <Link
            to={`/posts/${cardData.title.toLowerCase().replaceAll(" ", "-")}`}
            className="block pr-1 pt-2 text-xs text-white/75 md:pr-2 md:pt-3 md:text-sm"
          >
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {cardData.title}
            </div>
            <div className="pt-1 text-[10px] text-white/50 md:text-xs">
              {cardData.year} • {cardData.album}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MusicCard;
