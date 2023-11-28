import React from "react";
import { useRecoilValue } from 'recoil';
import { phoneNumberState } from '@/recoilstate/RecoilState'; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید
import Image from "next/image";
export default function CallUS() {
  const phoneNumber = useRecoilValue(phoneNumberState);

  return (
    <>
      <div className="relative">
        <div className="vector2-opacityy">
          <div className="bg-[#1f1e1e] text-white flex justify-between items-center w-[100%] h-[140px]">
            <div className="flex items-center mr-[30px] ">
              <Image
                src="/Images/Group 34738.png"
                alt=""
                className=" mr-[20px]"
                width={50}
                height={50}
              />
              <div className="titleTextConcat mr-[20px]">
                <h1 className="text-[34px] font-[800] ">
                  دریافت{" "}
                  <span className="text-[#0CA0A2]">مشاوره رایگان</span>
                </h1>
                <p className="text-[15px] text-[#626E94] font-[400] mt-[10px]">
                  در تمامی روز های هفته 24 ساعته در خدمتیم
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-[700] text-[40px]  ml-[40px]">
                {phoneNumber}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
