import { Link } from "react-router-dom";

const ArtistCard = ({ cardData }) => {
  return (
    <>
      <Link
        to={`/artists/${cardData.artistId}`}
        className="mr-2 flex items-start space-x-5 md:mr-3"
        key={cardData.artistId}
      >
        <div className="w-[85px] cursor-pointer transition-all md:w-32">
          <div className="ArtistCard ArtistImage relative h-[85px] w-[85px] overflow-hidden rounded-3xl transition-all duration-300 md:h-32 md:w-32 md:rounded-[32px]">
            <img
              src={cardData.artistImage}
              className={"h-full w-full"}
              alt=""
            />
          </div>
          <div className="pr-2 pt-2 text-center text-xs text-white/75 md:pt-3 md:text-sm">
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {cardData.artistName}
            </div>
            <div className="pt-1 text-[10px] text-white/50 md:text-xs">
              {cardData.artistSongsLength} Songs
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArtistCard;
