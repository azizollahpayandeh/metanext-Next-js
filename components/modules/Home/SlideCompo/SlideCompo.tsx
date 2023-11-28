// SlideCompo.js
import React from "react";
import { useRecoilValue } from "recoil";
import { slideArrState } from "@/recoilstate/RecoilState"; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید
import Image from "next/image";

export default function SlideCompo() {
  const slideArr = useRecoilValue(slideArrState);

  return (
    <>
      <div className="alllll rounded-3xl  w-[430px] h-[527px]  bg-[#F5F8FC]">
        <div className="head flex items-end justify-center gap-[150px]">
          <div className="headRight mt-[30px] ">
            <Image src={slideArr.srcImgArr} alt="" className="mb-[10px]" width={53} height={53} />
            <Image src={slideArr.srcImgPerc} alt="" width={85} height={56} />
          </div>
          <div
            className={`textLeft ${slideArr.styleBg}  p-[10px] rounded-[5px]`}
          >
            <span className={`${slideArr.textColor}`}>افزایش سود مشتری</span>
          </div>
        </div>

        <div className="text w-[380px] mr-[28px]">
          <h1 className="text-[30px] font-bold mt-[35px]">آقای علیرضا رودی</h1>
          <p className="text-[#0CA0A2] text-[20px] mt-[5px]">مدیر عامل ترناو</p>
          <p className="text-[#626E94] text-[18px] mt-[10px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ
          </p>
        </div>

        <div className="videoSec mr-[28px] mt-[35px]">
          <Image src={slideArr.srcImgVideo} alt="" width={380} height={122} />
        </div>
      </div>
    </>
  );
}
