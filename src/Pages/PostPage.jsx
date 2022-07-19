import {
  Microphone2,
  Heart,
  Headphone,
  Star1,
  ArchiveAdd,
  More,
  Clock,
  LanguageSquare,
} from "iconsax-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { digitsEnToAr, addCommas } from "@persian-tools/persian-tools";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostPage = () => {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setPostData({
        postImage:
          "https://i1.sndcdn.com/artworks-HkVyRECcu20dltx7-vs8kgQ-t500x500.jpg",
        postTitle: "Khanevadegi 2",
        artists: [
          { artistId: 22220, artistName: "Yas" },
          { artistId: 22221, artistName: "Tataloo" },
          { artistId: 22222, artistName: "Pishro" },
          { artistId: 22223, artistName: "Tohi" },
          { artistId: 22224, artistName: "Putak" },
          { artistId: 22225, artistName: "Khalse" },
        ],
        postTime: "3 : 24",
        postPlayed: 223738823,
        postLiked: 223738823,
        postDescription: `
              Aaa, Amen, Amen, Amen • Take me to church • I'll worship like a dog at
              the shrine of your lies • I'll tell you my sins and you can sharpen
              your knife • Offer me that deathless death • Good God, let me give you
              my life • Take me to church • I'll worship like a dog at the shrine of
              your lies • I'll tell you my sins and you can sharpen your knife •
              Offer me that deathless death • Aaa, Amen, Amen, Amen • Take me to
              church • I'll worship like a dog at the shrine of your lies • I'll
              tell you my sins and you can sharpen your knife • Aaa, Amen, Amen,
              Amen • Take me to church.
              `,
        postText: `
              Aaa, Amen, Amen, Amen • Take me to church • I'll worship like a dog at
              the shrine of your lies • I'll tell you my sins and you can sharpen
              your knife • Offer me that deathless death • Good God, let me give you
              my life • Take me to church • I'll worship like a dog at the shrine of
              your lies • I'll tell you my sins and you can sharpen your knife •
              Offer me that deathless death • Aaa, Amen, Amen, Amen • Take me to
              church • I'll worship like a dog at the shrine of your lies • I'll
              tell you my sins and you can sharpen your knife • Aaa, Amen, Amen,
              Amen • Aaa, Amen, Amen, Amen • Take me to church • I'll worship like a dog at
              the shrine of your lies • I'll tell you my sins and you can sharpen
              your knife • Offer me that deathless death • Good God, let me give you
              my life • Take me to church • I'll worship like a dog at the shrine of
              your lies • I'll tell you my sins and you can sharpen your knife •
              Offer me that deathless death • Aaa, Amen, Amen, Amen • Take me to
              church • I'll worship like a dog at the shrine of your lies • I'll
              tell you my sins and you can sharpen your knife • Aaa, Amen, Amen,
              Amen • Take me to church.
              `,
        musicLink: "https://",
      });
    }, 3000);
  }, []);

  return (
    <>
      <div className="hidden px-5 sm:block md:relative">
        <div className="absolute top-0 right-0 h-[350px] w-full overflow-hidden rounded-2xl px-5 md:relative md:h-[270px] lg:h-80">
          <img
            src={postData.postImage || ""}
            alt=""
            className="absolute left-0 -top-1/2 w-screen opacity-40 blur-xl"
          />
        </div>
        <div className="absolute top-[12%] left-5 flex w-1/2  flex-col sm:left-8 sm:top-[15%] md:top-[12%] lg:left-12">
          <div className="tet-white flex w-full items-center text-xs lg:text-sm ">
            <Microphone2 className={"h-5 w-5"} variant="Bulk" />
            {postData.artists ? (
              <div className="ml-2 whitespace-nowrap text-white/70">
                {postData.artists.map((artist) => (
                  <>
                    <Link
                      to={`/artists/${artist.artistId}`}
                      className="transition-all hover:text-white/50"
                    >
                      {artist.artistName}
                    </Link>
                    {postData.artists.indexOf(artist) ===
                    postData.artists.length - 1
                      ? ""
                      : " • "}
                  </>
                ))}
              </div>
            ) : (
              <Skeleton
                baseColor={"#171717"}
                className={"ml-2 mb-1 h-7 w-48"}
                highlightColor={"#ffffff25"}
              />
            )}
          </div>
          {postData.postTitle ? (
            <h3 className="my-2 text-3xl lg:my-4 lg:text-[50px]">
              <span>{postData.postTitle}</span>
            </h3>
          ) : (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#ffffff25"}
              className={"mt-1 w-2/3 lg:text-[50px]"}
            />
          )}
          <div className="mt-3 flex items-center text-xs lg:text-sm">
            <Heart className={"mr-2 h-5 w-5"} variant="Bold" />
            {postData.postLiked ? (
              <span>{addCommas(postData.postLiked)} Liked</span>
            ) : (
              <Skeleton
                baseColor={"#171717"}
                className={"w-24"}
                highlightColor={"#ffffff25"}
              />
            )}
          </div>
          <div className="mt-3 flex items-center text-xs lg:text-sm">
            <Headphone className={"mr-2 h-5 w-5"} variant="Bulk" />
            {postData.postPlayed ? (
              <span>{addCommas(postData.postPlayed)} Played</span>
            ) : (
              <Skeleton
                baseColor={"#171717"}
                className={"w-24"}
                highlightColor={"#ffffff25"}
              />
            )}
          </div>
          {postData && postData.musicLink ? (
            <div className="mt-8 flex items-center text-xs lg:text-sm">
              <button className="mr-5 rounded-3xl bg-[#1DB954] px-8 py-2 ">
                Play
              </button>
              <Heart className={"mr-4 h-5 w-5"} variant="Outline" />
              <Star1 className={"mr-4 h-5 w-5"} variant="Broken" />
              <ArchiveAdd className={"mr-4 h-5 w-5"} variant="Outline" />
              <More className={"mr-4 h-5 w-5 rotate-90"} variant="Outline" />
            </div>
          ) : (
            <Skeleton
              className="mt-8 h-10 w-1/2"
              baseColor={"#171717"}
              highlightColor={"#ffffff25"}
            />
          )}
        </div>
        {postData.postImage ? (
          <img
            src={postData.postImage || ""}
            alt=""
            className="absolute right-24 top-[50%] h-[200px] w-[200px] rounded-2xl shadow-[0px_4px_14px_10px_rgba(0,0,0,0.25)] sm:right-10 sm:top-[15%] md:top-[13%] lg:right-16 lg:top-[15%] lg:h-[230px] lg:w-[230px] xl:h-[350px] xl:w-[350px]"
          />
        ) : (
          <Skeleton
            baseColor={"#121212"}
            highlightColor={"#ffffff25"}
            className="absolute right-24 top-[50%] h-[200px] w-[200px] rounded-2xl shadow-[0px_4px_14px_10px_rgba(0,0,0,0.25)] sm:right-10 sm:top-[15%] md:top-[13%] lg:right-16 lg:top-[15%] lg:h-[230px] lg:w-[230px] xl:h-[350px] xl:w-[350px]"
          />
        )}
        <div
          className={`${
            postData && postData.postTitle ? "" : "bottom-5"
          } relative mt-3 hidden w-[calc(100%-420px)] items-center justify-between rounded-lg bg-red-300 p-2 pr-4 xl:flex`}
          style={{
            background:
              "linear-gradient(270deg, rgba(27, 27, 27, 0.5) 0%, rgba(64, 64, 64, 0.25) 51.08%, rgba(255, 255, 255, 0.11) 100%)",
          }}
        >
          <div className="flex items-center">
            {postData.postImage ? (
              <img
                src={postData.postImage || ""}
                alt=""
                className="h-10 w-10 rounded-xl md:h-16 md:w-16"
              />
            ) : (
              <Skeleton
                baseColor={"#121212"}
                highlightColor={"#ffffff25"}
                className="h-10 w-10 rounded-xl md:h-16 md:w-16"
              />
            )}
            <div className="ml-3 w-full">
              {postData.postTitle ? (
                <h4 className="text-lg">{postData.postTitle}</h4>
              ) : (
                <Skeleton
                  baseColor={"#171717"}
                  highlightColor={"#ffffff25"}
                  className={"h-6 w-2/3"}
                />
              )}
              {postData.artists ? (
                <h4 className="text-sm text-white/70">
                  {postData.artists.map((artist) => (
                    <>
                      <Link
                        to={`/artists/${artist.artistId}`}
                        className="transition-all hover:text-white/50"
                      >
                        {artist.artistName}
                      </Link>
                      {postData.artists.indexOf(artist) ===
                      postData.artists.length - 1
                        ? ""
                        : " • "}
                    </>
                  ))}
                </h4>
              ) : (
                <Skeleton
                  baseColor={"#171717"}
                  className={"w-48"}
                  highlightColor={"#ffffff25"}
                />
              )}
            </div>
          </div>
          <div className="flex items-center text-sm opacity-75">
            <Clock variant="Bulk" className="mr-2 h-7 w-7" />
            {postData.postTime ? (
              <span>{postData.postTime}</span>
            ) : (
              <Skeleton
                baseColor={"#121212"}
                className={"h-6 w-12"}
                highlightColor={"#ffffff25"}
              />
            )}
          </div>
        </div>
      </div>
      {/* alslsls */}
      <div className="relative bottom-16 h-[450px] w-full sm:hidden">
        <div className="absolute top-20 left-5 z-[99999] flex w-3/4 flex-col">
          <div className="tet-white flex w-full items-center text-xs">
            <Microphone2 className={"mt-1 mr-2 h-5 w-5"} variant="Bulk" />
            <span className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-white/70">
              {postData.artists ? (
                postData.artists.map((artist) => (
                  <>
                    <Link
                      to={`/artists/${artist.artistId}`}
                      className="transition-all hover:text-white/50"
                    >
                      {artist.artistName}
                    </Link>
                    {postData.artists.indexOf(artist) ===
                    postData.artists.length - 1
                      ? ""
                      : " • "}
                  </>
                ))
              ) : (
                <Skeleton
                  baseColor={"#171717"}
                  className={"h-5 w-2/3"}
                  highlightColor={"#ffffff25"}
                />
              )}
            </span>
          </div>
          <h3 className="my-2 text-3xl lg:my-4 lg:text-[50px]">
            {postData.postTitle ? (
              <span>{postData.postTitle}</span>
            ) : (
              <Skeleton
                baseColor={"#171717"}
                highlightColor={"#ffffff25"}
                className={""}
              />
            )}
          </h3>
          <div className="mt-3 flex items-center text-xs">
            <Heart className={"mr-2 h-5 w-5"} variant="Bold" />
            {postData.postLiked ? (
              <span>{addCommas(postData.postLiked)} Liked</span>
            ) : (
              <Skeleton
                baseColor={"#171717"}
                className={"w-32"}
                highlightColor={"#ffffff25"}
              />
            )}
          </div>
          <div className="mt-3 flex items-center text-xs">
            <Headphone className={"mr-2 h-5 w-5"} variant="Bulk" />
            {postData.postPlayed ? (
              <span>{addCommas(postData.postPlayed)} Played</span>
            ) : (
              <Skeleton
                baseColor={"#171717"}
                className={"w-32"}
                highlightColor={"#ffffff25"}
              />
            )}
          </div>
          {postData && postData.musicLink ? (
            <div className="mt-8 flex w-full items-center text-xs">
              <button className="mr-5 rounded-3xl bg-[#1DB954] px-8 py-2 ">
                Play
              </button>
              <Heart className={"mr-4 h-5 w-5"} variant="Outline" />
              <Star1 className={"mr-4 h-5 w-5"} variant="Broken" />
              <ArchiveAdd className={"mr-4 h-5 w-5"} variant="Outline" />
              <More className={"mr-4 h-5 w-5 rotate-90"} variant="Outline" />
            </div>
          ) : (
            <Skeleton
              className="mt-8 h-10 w-3/4"
              baseColor={"#171717"}
              highlightColor={"#ffffff25"}
            />
          )}
        </div>
        {postData.postImage ? (
          <>
            <img
              src={postData.postImage || ""}
              alt=""
              className="absolute left-0 top-0 h-[450px] w-screen rounded-b-[50px] opacity-40 blur-sm"
            />
            <img
              src={postData.postImage || ""}
              alt=""
              className="absolute bottom-10 left-1/2 z-[5000] h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-xl"
            />
          </>
        ) : (
          <>
            <Skeleton
              baseColor={"#121212"}
              highlightColor={"#ffffff25"}
              className="absolute bottom-10 left-1/2 z-[5000] h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-xl"
            />
          </>
        )}
      </div>
      <div className="relative bottom-32 mx-8 rounded-[32px] bg-[#212121] px-5 pt-[150px] pb-8 text-justify sm:-bottom-72 sm:mx-0 sm:rounded-none sm:pt-6 md:bottom-0 md:mx-5 md:mt-6 md:rounded-[24px]">
        <h1 className="mb-3 flex items-center justify-center text-center text-2xl sm:mb-5">
          <span>Description</span>
          <LanguageSquare className="ml-2 mt-1 h-7 w-7" variant="Bulk" />
        </h1>
        <p>
          {postData.postDescription || (
            <>
              <Skeleton
                count={4}
                baseColor={"#121212"}
                highlightColor={"#ffffff25"}
              />
              <Skeleton
                count={1}
                baseColor={"#121212"}
                width={"50%"}
                highlightColor={"#ffffff25"}
              />
            </>
          )}
        </p>
      </div>
      {postData.postText ? (
        <div className="relative bottom-32 mx-8 mt-4 rounded-[32px] bg-[#212121] px-5 pt-6 pb-8 text-justify sm:-bottom-72 sm:mx-0 sm:mt-0 sm:rounded-none md:bottom-0 md:mx-5 md:mt-6 md:rounded-[24px]">
          <h1 className="mb-3 flex items-center justify-center text-center text-2xl sm:mb-5">
            <span>Music Text</span>
            <LanguageSquare className="ml-2 mt-1 h-7 w-7" variant="Bulk" />
          </h1>
          <p>
            {postData.postText || (
              <>
                <Skeleton
                  count={4}
                  baseColor={"#121212"}
                  highlightColor={"#ffffff25"}
                />
                <Skeleton
                  count={1}
                  baseColor={"#121212"}
                  width={"50%"}
                  highlightColor={"#ffffff25"}
                />
              </>
            )}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PostPage;
