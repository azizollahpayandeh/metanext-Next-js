import React from "react";
import { useRecoilValue } from 'recoil';
import { customerImagesState } from "@/recoilstate/RecoilState";
import Image from "next/image";

export default function Customer() {
  const customerImages = useRecoilValue(customerImagesState);

  return (
    <div className="all text-center mt-[150px]">
      <p className="text-[#626E94] text-[18px] opacity-80">
        از این که به ما اعتماد کردین خوشحالیم
      </p>
      <h1 className="text-[40px] text-[#000000] mt-[30px] font-bold">
        گوشه ای از مشتریان متانکست
      </h1>
      <div className="flex justify-center items-center flex-wrap mt-4">
        {customerImages.map((imageUrl, index) => (
          <Image
            key={index}
            className="m-2 rounded-lg"
            src={imageUrl}
            alt={`customer-${index}`}
            width={1320}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}
