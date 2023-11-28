import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ServicesData } from "@/recoilstate/RecoilState";
import Hesebdari from "@/components/modules/Home/Hesebdari/Hesebdari";
import Power from "@/components/modules/Home/Power/Power";
import Conversation from "@/components/modules/Home/Conversation/Conversation";
import Application from "@/components/modules/Home/Application/Application";
import Site from "@/components/modules/Home/Site/Site";
import ProgressBar from "@/components/modules/Home/ProgressBar/ProgressBar";
import { useRecoilValue } from "recoil";
import Image from "next/image";

interface ProgressBarProps {
  duration: number;
  selectedIdx: number;
  idx: number;
}

interface Service {
  image1: string;
  image2: string;
  text: string;
  // Add any other properties based on the actual data structure
}

interface ServicesContainerProps {}

const ServicesContainer: React.FC<ServicesContainerProps> = () => {
  const [selected, setSelected] = useState<number>(0);
  const data = useRecoilValue(ServicesData)
  const [previousSelected, setPreviousSelected] = useState<number>(0);
  const swiperElRef = useRef<HTMLDivElement | null>(null);
  const [autoChange, setAutoChange] = useState<boolean>(true);
  const duration: number = 3000;
  const speed: number = 500;

  useEffect(() => {
    let interval:any;

    if (autoChange) {
      interval = setInterval(() => {
        setPreviousSelected(selected);
        setSelected((prevSelected) => (prevSelected + 1) % data?.length);
      }, duration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoChange, data, selected]);

  useEffect(() => {
    let swiper: Swiper | null = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: speed,
        spaceBetween: 0,
        slidesPerView: 1,
      });
    }
    if (swiper) {
      const difference = selected - previousSelected;
      if (difference > 0) {
        swiper.changeLanguageDirection("rtl");
      } else {
        swiper.changeLanguageDirection("ltr");
      }
      swiper.slideTo(selected + 1, speed);
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, [selected, previousSelected]);

  function manualClick(idx: number): void {
    setPreviousSelected(selected);
    setSelected(idx);
  }

  return (
    <div>
      <div className="mt-[100px] p-[3vw] mx-auto bg-[#F5F8FC]">
        <p className="text-[18px] font-[300] text-grayed mb-[40px]">
          یک پلتفرم برای تمامی نیاز ها
        </p>
        <h2 className="text-[40px] font-[800]">خدمات ما در متانکست</h2>
        <div className="flex">
          {data.map((ele, idx) => (
            <div
              key={idx}
              onClick={() => manualClick(idx)}
              className="cursor-pointer w-[100vw] mr-[20px]"
            >
              <Image
                className="cursor-pointer mt-[50px]"
                width={60}
                height={60}
                src={selected === idx ? ele.image2 : ele.image1}
                alt=""
              />
              <p
                className={` ${
                  selected === idx ? "font-[700] " : "text-[#7E8AAB]"
                } my-[15px] text-[20px] `}
              >
                {ele.text}
              </p>
              <ProgressBar
                duration={duration}
                selectedIdx={selected}
                idx={idx}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 flex items-center justify-between bg-[#F5F8C] mb-[30px] flex-row-reverse">
        <div className="swiper-container overflow-hidden" ref={swiperElRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Hesebdari />
            </div>
            <div className="swiper-slide">
              <Hesebdari />
            </div>
            <div className="swiper-slide">
              <Power />
            </div>
            <div className="swiper-slide">
              <Conversation />
            </div>
            <div className="swiper-slide">
              <Application />
            </div>
            <div className="swiper-slide">
              <Site />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
