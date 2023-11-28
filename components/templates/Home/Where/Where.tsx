import React from "react";
import { useRecoilState } from 'recoil';
import { whereContentState } from '@/recoilstate/RecoilState'; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید
import Image from "next/image";
import Link from "next/link";

export default function Where() {
  const [whereContent, setWhereContent] = useRecoilState(whereContentState);

  return (
    <div className="all relative flex justify-around mt-[50px]">
      {/* تصاویر آبسترکت */}
      <Image width={20} height={20} src="/Images/Ellipse 372.png" alt="" className="absolute top-[400px] right-[750px]" />
      <Image width={20} height={20} src="/Images/Ellipse 387.png" alt="" className="absolute top-[30px] right-[100px]" />
      <Image width={20} height={20} src="/Images/Polygon 4.png" alt="" className="absolute top-[30px] right-[600px]" />

      <div className="right w-[700px] h-[372px] mt-[70px]">
        <h1 className="text-[34px] font-[900] text-[#011627] ">
          {whereContent.title}
        </h1>
        <p className="text-[18px] text-[#7E8AAB] leading-[40px] mt-[30px] font-[400]">
          {whereContent.description}
        </p>
        <Link href={""}>
        <button className="w-[220px] h-[63px] mt-[30px] bg-[#8239F8] font-[500] text-[18px] rounded-[10px] text-white flex justify-center items-center  ">
          {whereContent.buttonText}
        </button>
        </Link>
      </div>

      <div className="left">
        <Image src="/Images/Group 70200.png" alt="" width={480} height={480} />
      </div>
    </div>
  );
}
