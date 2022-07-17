import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import _ from "lodash";
import MusicCard from "./MusicCard";
import { Link } from "react-router-dom";

const CardsManager = ({ Component, num, dataArray, title, comName }) => {
  console
    .log
    // document.querySelector(`.${comName}`).clientWidth * dataArray.length
    ();
  return (
    <>
      <div className={`container${comName} mb-7 overflow-hidden pl-5`}>
        <div className="flex w-full items-center justify-between pb-2 pr-5 md:pb-3">
          <div className="md:text-2xl">{title}</div>
          <Link
            to={"/"}
            className="cursor-pointer text-xs transition-all hover:translate-x-1 hover:text-blue-500 "
          >
            Show More {">"}
          </Link>
        </div>
        <Swiper
          modules={[FreeMode, Pagination]}
          freeMode={true}
          onSetTranslate={(e) =>
            -e.translate >=
            document.querySelector(`.container${comName} .swiper-slide`)
              .clientWidth *
              dataArray.length -
              document.querySelector(`.container${comName}`).clientWidth +
              100
              ? document.querySelector(".childrenSection").clientWidth <
                document.querySelector(`.container${comName} .swiper-slide`)
                  .clientWidth *
                  dataArray.length
                ? e.translateTo(
                    -document.querySelector(
                      `.container${comName} .swiper-slide`
                    ).clientWidth *
                      dataArray.length +
                      document.querySelector(`.container${comName}`)
                        .clientWidth -
                      20
                  )
                : -e.translate > 100
                ? e.translateTo(0)
                : null
              : null
          }
          speed={800}
        >
          {dataArray.map((cardData) => (
            <SwiperSlide
              className="musicCard flex !w-fit cursor-pointer justify-start"
              key={cardData}
            >
              <Component cardData={cardData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CardsManager;
