import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { Autoplay, Pagination } from "swiper/modules";
import BlogSlideCompo from "@/components/modules/Home/BlogSlidCompo/BlogSlideCompo";
import { isBlockState, blogImagesState } from '@/recoilstate/RecoilState';  
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Blog() {
  const swiperRef = useRef(null);
  const [isBlock, setIsBlock] = useRecoilState(isBlockState);
  const blogImages = useRecoilValue(blogImagesState);

  return (
    <>
      <div className="all relative">
        <Image 
        width={200}
        height={225}
          src="/Images/Group 70194.png"
          alt=""
          className="absolute top-[-10px] right-[600px]"
        />
        <Image 
        width={25}
        height={25}
          src="/Images/Ellipse 391.png"
          alt=""
          className="absolute top-[-20px]  right-[1000px]"
        />
        <div className="again all">
          <div className="header flex items-end  mt-[80px]  mr-[50px] justify-between ml-[50px]">
            <div className="text">
              <p className="text-[18px] font-[400] text-[#626E94] ">
                با شما در مسیر یادگیری هستیم
              </p>
              <h1 className="text-[40px] font-[700] text-[#000000]">
                جدیدترین <span className="text-[#0CA0A2]">مقالات</span>
              </h1>
            </div>
            <div className="buttons flex gap-6 items-center">
              <Image 
              width={63}
              height={63}
                src={
                  isBlock === "right"
                    ? "/Images/Frame 70153.png"
                    : "/Images/Frame 70154.png"
                }
                alt=""
                onClick={() => {
                  setIsBlock("right");
                }}
                className={`prevEl w-[50px] h-[50px] cursor-pointer ${
                  isBlock === "right" ? "rotate-180" : ""
                }`}
              />
              <Image 
              width={10}
              height={10} src="/Images/Ellipse 389.png" alt="" className="h-[10px]" />
              <Image 
              width={60}
              height={60}
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
                } nextEl  w-[50px] h-[50px]  cursor-pointer`}
              />
            </div>
          </div>

          <div className="slider mt-[60px] mr-[50px]">
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
          slidesPerView={3}
          loop={true}
        >
          {blogImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="boxSlide">
                <BlogSlideCompo srcImgBase={src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>
      </div>
    </>
  );
}
