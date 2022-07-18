import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const MainSlider = ({ cardData }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-5 mt-3 h-48 overflow-hidden rounded-2xl pr-10 sm:h-64 md:mb-8 md:h-72 lg:h-[380px]"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {cardData.map((slide) => (
          <SwiperSlide className="h-full w-full">
            <Link
              to={"/"}
              className="block h-full w-full overflow-hidden rounded-2xl"
            >
              <img
                src={require("./../Assets/Images/art-of-sound-banner.jfif")}
                alt=""
                className="h-full w-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSlider;
