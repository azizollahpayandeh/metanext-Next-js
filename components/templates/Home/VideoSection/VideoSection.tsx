import React from "react";
// import imageList from "../../data";
import Image from "next/image";
import { imageList } from "@/recoilstate/RecoilState";
import { useRecoilState } from "recoil";

export default function VideoSection() {
  const [imagesListt, setImagesListt] = useRecoilState(imageList)
  return (
    <div className="all relative mx-auto w-[685px] h-[480px] ">
      <img src="/Images/Group 34778.png" width={1000} height={1000} alt="" className="" />

      {imagesListt.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className=" absolute hover:scale-[1.2] cursor-pointer transition-all duration-700"
          style={{ top: image.top, right: image.right }}
          width={154}
          height={181}
        />
      ))}
    </div>
  );
}
