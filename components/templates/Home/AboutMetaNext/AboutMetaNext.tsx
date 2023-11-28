import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideCompo from "@/components/modules/Home/SlideCompo/SlideCompo";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isBlockState, slideArrState } from "@/recoilstate/RecoilState";
import Image from "next/image";

export default function AboutMetaNext() {
  const setSlideArr = useSetRecoilState(slideArrState);
  const [isBlock, setIsBlock] = useRecoilState(isBlockState);
  const swiperRef = useRef(null);
  setSlideArr({
    srcImgArr: "/Images/arrow-up-right.png",
    srcImgPerc: "/Images/333.jpg",
    srcImgVideo: "/Images/Rectangle 9188.png",
    styleBg: "bg-[#FF9F1C1A]",
    textColor: "text-orange-400",
  });

  return (
    <div className="alllll relative">
      <Image
      width={140}
      height={61}
        src="/Images/Vector 51.png"
        alt=""
        className="absolute top-[-100px] right-[350px]"
      />
      <Image
      width={20}
      height={20}
        src="/Images/Ellipse 388.png"
        alt=""
        className="absolute top-[50px] right-[40px]"
      />
      <Image
      width={30}
      height={30}
        src="/Images/Star 3.png"
        alt=""
        className="absolute top-[500px]  right-[300px]"
      />
      <Image
      width={100}
      height={130}
        src="/Images/Group 4.png"
        alt=""
        className="absolute top-[550px]  right-[80px]"
      />

      <div className="alllll overflow-x-hidden flex justify-around mt-[100px] mb-[50px] relative">
        <div className="right flex flex-col justify-center">
          <p className="text-[#626E94] text-[18px]">
            تجربه مدیران کسب و کارهایی که به ما اعتماد کردن
          </p>
          <h1 className="text-[40px] font-bold w-[316px] h-[145px] mt-[20px]">
            در مورد <span className="text-[#0CA0A2]">متانکست</span> چه می‌شنویم؟
          </h1>
          <div className="buttons flex gap-6 items-center">
            <Image
            width={55}
            height={55}
              src={
                isBlock === "right"
                  ? "/Images/Frame 70153.png"
                  : "/Images/Frame 70154.png"
              }
              alt=""
              onClick={() => {
                setIsBlock("right");
              }}
              className={`prevEl  cursor-pointer ${
                isBlock === "right" ? "rotate-180" : ""
              }`}
            />
            <Image
            width={10}
            height={10}
             src="/Images/Ellipse 389.png" alt="" className="h-[10px]" />
            <Image
            width={55}
            height={55}
              src={
                isBlock === "left"
                  ? "/Images/Frame 70153.png"
                  : "/Images/Frame 70154.png"
              }
              alt=""
              onClick={() => {
                setIsBlock("left");
              }}
              className={` ${
                isBlock === "left" ? "" : "rotate-180"
              } nextEl cursor-pointer`}
            />
          </div>
        </div>
        <div className="leftAll w-[900px] float-left">
          <div className="middle">
            <Swiper
              ref={swiperRef}
              navigation={{
                prevEl: ".prevEl",
                nextEl: ".nextEl",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
            >
              <SwiperSlide>
                <div className="slideBox">
                  <SlideCompo />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slideBox">
                  <SlideCompo />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slideBox">
                  <SlideCompo />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slideBox">
                  <SlideCompo />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
