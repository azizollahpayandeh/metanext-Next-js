"use client"
import React from "react"
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "@/recoilstate/RecoilState"

export default function Main() {
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <>
      <div className="all">
        <div className="allTex... flex flex-col  items-center text-center relative mt-[50px]">
          <Image src="/Images/Vector.png" alt="Video"  width={31} height={17}/>

          <div className="Main flex flex-col ">
            <div className="flex justify-center ">
              <p className="text-[26px] font-[400] text-[#7E8AAB]">سیستم</p>
              <p className="text-[26px]  font-[400] opacity-90">CRM</p>
              <h1 className="text-[26px] font-[400] text-[#7E8AAB]">متانکست</h1>
            </div>
            <div className="big mt-[18px]">
              <h1 className="text-[46px] font-[800]">
                یک پلتفرم برای تمامی نیاز ها کسب و کار
              </h1>
            </div>

            <p className="text-[#7E8AAB] w-[1212px] font-[300] h-[120px] text-[18px] leading-[35px] mt-[30px] ">
              سی ار ام یک سیستم نرم افزاری است که به صاحبان کسب و کار کمک میکند
              تا به راحتی تمام ارتباطات را ردیابی کند و روابط را با سرنخ ها وت
              مشتریان خود تقویت کند.سی ار ام جایگزین تعداد زیادی از صفحات گسترده
              ، پایگاه های داده و برنامه هایی است که بسیاری از کسب و کار ها برای
              ردیابی داده های مشتری با هم وصله میکنند.نتیجه: سازماندهی ، کارایی
              ، مدیریت زمان بهتر
            </p>
          </div>

          <div className="btn mt-[50px] flex items-center">
            <Image
              src="/Images/Vector 33.png"
              alt=""
              className=" ml-[20px]"
              width={150}
              height={12}
            />
            <Link href="/login">
              <button
                onClick={() => setLoggedIn(true)}
                className="w-[257px] h-[67px] bg-[#011627] transition-all duration-700 rounded-[10px] text-[18px] text-[#FFFFFF]  flex justify-center items-center font-[500] "
              >
                رایگان شروع کنید
                <Image
                width={24}
                height={25}
                  src="/Images/arrow-left.png"
                  alt=""
                  className="mt-[3px] mr-[5px]"
                />
              </button>
            </Link>
            <Image
            width={150}
            height={12}
              src="/Images/Vector 32 (1).png"
              alt=""
              className=" mr-[20px]"
            />
          </div>

          <div className="Meta mt-[50px]">
            <Image
            width={2100}
            height={1000} src="/Images/Meta.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
