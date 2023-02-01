import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SingleNonTradingFeesCard from "./SingleNonTradingFeesCard";

const AllNonTradingFeesCard = ({ isLoading, basicData }) => {
  return (
    <>
      {isLoading ? (
        <h1 className="text-center text-teal-500 font-bold">Loading...</h1>
      ) : (
        <Swiper
          className="text-center m-2"
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
        >
          <div className="grid lg:grid-cols-4 2xl:grid-cols-5 gap-2">
            {basicData?.map((info, index) => (
              <SwiperSlide key={info?.id}>
                <SingleNonTradingFeesCard
                  info={info}
                  index={index}
                ></SingleNonTradingFeesCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </>
  );
};

export default AllNonTradingFeesCard;
