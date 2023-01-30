import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AllData = () => {
  const [data, setData] = useState([1, 1, 1, 1]);
  const [basicData, setBasicData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://backend.flagedu.com/api/company/basic/broker/list")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setBasicData(result?.success);
      });
  }, []);
  console.log(basicData);

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
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <div className="grid lg:grid-cols-4 2xl:grid-cols-5 gap-2">
            {basicData?.map((info, index) => (
              <SwiperSlide key={index}>
                <SingleData info={info} key={index}></SingleData>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </>
    // <div className="grid lg:grid-cols-4 gap-3 lg:divide-x mt-6">
    //   {basicData?.map((info, index) => (
    //     <SingleData info={info} key={index}></SingleData>
    //   ))}
    // </div>
  );
};

export default AllData;
