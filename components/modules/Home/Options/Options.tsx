import React from "react";
import Image from "next/image";

interface OptionProps {
  title: string;
  srcimg: string;
  top: string;
  right: string;
  width: string;
}

const Options: React.FC<OptionProps> = ({
  title,
  srcimg,
  width,
  top,
  right,
}) => {
  return (
    <>
      <div className="all ">
        <div
          className={`cart  h-[100px] bg-white absolute shadow-md bg-opacity-90 rounded-3xl  flex gap-6 items-center `}
          style={{ width, top, right }}
        >
          <Image src={srcimg} alt="" className= "mr-[15px]" width={70} height="70" />
          <h1 className="text-[20px] font-[700] ml-[15px] ">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Options;
