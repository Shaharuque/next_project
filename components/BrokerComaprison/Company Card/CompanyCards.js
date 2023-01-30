import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import TestSwiper from "./TestSwiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const CompanyCards = () => {
  const [cards, setCards] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://backend.flagedu.com/api/company/list")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCards(data?.success);
      });
  }, []);
  console.log("cards", cards);
  return (
    <>
      {loading ? (
        <h1 className="text-center text-teal-500 font-bold">Loading...</h1>
      ) : (
        <Swiper
          className="text-center m-2"
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <div>
            {cards?.map((cardInfo) => (
              <SwiperSlide key={cardInfo?.id}>
                <CompanyCard
                  key={cardInfo?.id}
                  cardInfo={cardInfo}
                ></CompanyCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </>
    // <div>
    //   <TestSwiper></TestSwiper>
    // </div>
  );
};

export default CompanyCards;
