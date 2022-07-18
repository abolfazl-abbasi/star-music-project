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
import { Link } from "react-router-dom";

const PostPage = () => {
  return (
    <>
      <div className="hidden px-5 sm:block md:relative">
        <div className="absolute top-0 right-0 h-[350px] w-full overflow-hidden rounded-2xl px-5 md:relative md:h-[270px] lg:h-80">
          <img
            src={require("./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif")}
            alt=""
            className="absolute left-0 -top-1/2 w-screen opacity-40 blur-xl"
          />
          <div></div>
        </div>
        <div className="absolute top-[12%] left-5 flex w-1/2  flex-col sm:left-8 sm:top-[15%] md:top-[12%] lg:left-12">
          <div className="tet-white flex w-1/2 items-center text-xs lg:text-sm">
            <Microphone2 className={"mt-1 mr-2 h-5 w-5"} variant="Bulk" />
            <span className="text-white/70">abolfazl • folani • ye Khar</span>
          </div>
          <h3 className="my-2 text-3xl lg:my-4 lg:text-[50px]">
            <span>Khanevadegi 2</span>
          </h3>
          <div className="mt-3 flex items-center text-xs lg:text-sm">
            <Heart className={"mr-2 h-5 w-5"} variant="Bold" />
            <span>328,275,362 Played</span>
          </div>
          <div className="mt-3 flex items-center text-xs lg:text-sm">
            <Headphone className={"mr-2 h-5 w-5"} variant="Bulk" />
            <span>328,275,362 Played</span>
          </div>
          <div className="mt-8 flex items-center text-xs lg:text-sm">
            <button className="mr-5 rounded-3xl bg-[#1DB954] px-8 py-2 ">
              Play
            </button>
            <Heart className={"mr-4 h-5 w-5"} variant="Outline" />
            <Star1 className={"mr-4 h-5 w-5"} variant="Broken" />
            <ArchiveAdd className={"mr-4 h-5 w-5"} variant="Outline" />
            <More className={"mr-4 h-5 w-5 rotate-90"} variant="Outline" />
          </div>
        </div>
        <img
          src={require("./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif")}
          alt=""
          className="absolute right-24 top-[50%] h-[200px] w-[200px] rounded-2xl shadow-[0px_4px_14px_10px_rgba(0,0,0,0.25)] sm:right-10 sm:top-[15%] md:top-[13%] lg:right-16 lg:top-[15%] lg:h-[230px] lg:w-[230px] xl:h-[350px] xl:w-[350px]"
        />
        <div
          className="mt-3 hidden w-[calc(100%-420px)] items-center justify-between rounded-lg bg-red-300 p-2 pr-4 xl:flex"
          style={{
            background:
              "linear-gradient(270deg, rgba(27, 27, 27, 0.5) 0%, rgba(64, 64, 64, 0.25) 51.08%, rgba(255, 255, 255, 0.11) 100%)",
          }}
        >
          <div className="flex items-center">
            <img
              src={require("./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif")}
              alt=""
              className="h-10 w-10 rounded-xl md:h-16 md:w-16"
            />
            <div className="ml-3 w-full pb-2">
              <h4 className="text-lg">Khanevadegi 2</h4>
              <h4 className="text-sm text-white/70">
                abolfazl • folani • ye Khar
              </h4>
            </div>
          </div>
          <div className="flex items-center text-sm opacity-75">
            <Clock variant="Bulk" className="mr-2 h-7 w-7" />
            <span>4 : 13</span>
          </div>
        </div>
      </div>
      {/* alslsls */}
      <div className="relative bottom-16 h-[450px] w-full sm:hidden">
        <div className="absolute top-20 left-5 z-[99999]  flex flex-col">
          <div className="tet-white flex w-1/2 items-center text-xs">
            <Microphone2 className={"mt-1 mr-2 h-5 w-5"} variant="Bulk" />
            <span className="text-white/70">abolfazl • folani • ye Khar</span>
          </div>
          <h3 className="my-2 text-3xl lg:my-4 lg:text-[50px]">
            <span>Khanevadegi 2</span>
          </h3>
          <div className="mt-3 flex items-center text-xs">
            <Heart className={"mr-2 h-5 w-5"} variant="Bold" />
            <span>328,275,362 Played</span>
          </div>
          <div className="mt-3 flex items-center text-xs">
            <Headphone className={"mr-2 h-5 w-5"} variant="Bulk" />
            <span>328,275,362 Played</span>
          </div>
          <div className="mt-8 flex w-full items-center text-xs">
            <button className="mr-5 rounded-3xl bg-[#1DB954] px-8 py-2 ">
              Play
            </button>
            <Heart className={"mr-4 h-5 w-5"} variant="Outline" />
            <Star1 className={"mr-4 h-5 w-5"} variant="Broken" />
            <ArchiveAdd className={"mr-4 h-5 w-5"} variant="Outline" />
            <More className={"mr-4 h-5 w-5 rotate-90"} variant="Outline" />
          </div>
        </div>
        <img
          src={require("./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif")}
          alt=""
          className="absolute left-0 top-0 h-[450px] w-screen rounded-b-[50px] opacity-40 blur-sm"
        />
        <img
          src={require("./../Assets/Images/ab67616d00001e0270a133f7c88182c80574b6ab.jfif")}
          alt=""
          className="absolute bottom-10 left-1/2 z-[5000] h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-xl"
        />
      </div>
      <div className="relative bottom-32 mx-8 rounded-[32px] bg-[#212121] px-5 pt-[150px] pb-8 text-justify sm:-bottom-72 sm:mx-0 sm:rounded-none sm:pt-6 md:bottom-0 md:mx-5 md:mt-6 md:rounded-[24px]">
        <h1 className="mb-3 flex items-center justify-center text-center text-2xl sm:mb-5">
          <span>Description</span>
          <LanguageSquare className="ml-2 mt-1 h-7 w-7" variant="Bulk" />
        </h1>
        <p>
          Aaa, Amen, Amen, Amen • Take me to church • I'll worship like a dog at
          the shrine of your lies • I'll tell you my sins and you can sharpen
          your knife • Offer me that deathless death • Good God, let me give you
          my life • Take me to church • I'll worship like a dog at the shrine of
          your lies • I'll tell you my sins and you can sharpen your knife •
          Offer me that deathless death • Aaa, Amen, Amen, Amen • Take me to
          church • I'll worship like a dog at the shrine of your lies • I'll
          tell you my sins and you can sharpen your knife • Aaa, Amen, Amen,
          Amen • Take me to church.
        </p>
      </div>
      <div className="relative bottom-32 mx-8 mt-4 rounded-[32px] bg-[#212121] px-5 pt-6 pb-8 text-justify sm:-bottom-72 sm:mx-0 sm:mt-0 sm:rounded-none md:bottom-0 md:mx-5 md:mt-6 md:rounded-[24px]">
        <h1 className="mb-3 flex items-center justify-center text-center text-2xl sm:mb-5">
          <span>Music Text</span>
          <LanguageSquare className="ml-2 mt-1 h-7 w-7" variant="Bulk" />
        </h1>
        <p>
          Aaa, Amen, Amen, Amen • Take me to church • I'll worship like a dog at
          the shrine of your lies • I'll tell you my sins and you can sharpen
          your knife • Offer me that deathless death • Good God, let me give you
          my life • Take me to church • I'll worship like a dog at the shrine of
          your lies • I'll tell you my sins and you can sharpen your knife •
          Offer me that deathless death • Aaa, Amen, Amen, Amen • Take me to
          church • I'll worship like a dog at the shrine of your lies • I'll
          tell you my sins and you can sharpen your knife • Aaa, Amen, Amen,
          Amen • Aaa, Amen, Amen, Amen • Take me to church • I'll worship like a
          dog at the shrine of your lies • I'll tell you my sins and you can
          sharpen your knife • Offer me that deathless death • Good God, let me
          give you my life • Take me to church • I'll worship like a dog at the
          shrine of your lies • I'll tell you my sins and you can sharpen your
          knife • Offer me that deathless death • Aaa, Amen, Amen, Amen • Take
          me to church • I'll worship like a dog at the shrine of your lies •
          I'll tell you my sins and you can sharpen your knife • Aaa, Amen,
          Amen, Amen • Take me to church.
        </p>
      </div>
    </>
  );
};

export default PostPage;
