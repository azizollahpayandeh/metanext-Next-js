"use client"
import React from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import Swal from 'sweetalert2';
import { otpNumberState } from "@/recoilstate/RecoilState";
import { useRecoilState } from "recoil";
import { useMutation } from 'react-query';
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface FetchProps {
  secret: string;
  otp: string; // Change the type to string
}

const fetchOtp = async ({ secret, otp }: FetchProps) => {
  try {
    const { data } = await axios.post(
      "https://demo1.metanext.biz/api/v1/auth/otp",
      {
        secret: secret,
        otp: otp,
      }
    );

    return data;
  } catch (error) {
    throw new Error("Failed to fetch OTP");
  }
};

export default function Otp() {
  const [otp, setOtp] = useRecoilState(otpNumberState);
  const isOtpValid = otp.length === 5; // Corrected condition
  const router = useRouter()
  const secret = window.localStorage.getItem("otpSecret")

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };

  const { mutate, isLoading } = useMutation(
    //@ts-ignore
    () => fetchOtp({ secret, otp }),
    {
      onSuccess: (data) => {
        if (data) {
            router.push('/login/password')
        } else {
          console.log("No data received");
        }
      },
      onError: (error:any) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "لطفا کد را درست وارد کنید.",
          text: error.message,
        });
      },
    }
  );
  return (
    <>
      <div className=" mt-[50px] mb-[50px]">
        <Image
        width={180}
        height={200}
          className="mx-auto "
          src="/Images/images (3).jfif"
          alt="login-otp"
        />
        <h1 className="text-center mt-[30px] font-[800]">ورود-ثبت&nbsp;نام</h1>
        <p className="text-center mt-[30px] font-[400]">
          لطفا کد ارسال شده را وارد کنید.
        </p>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={5}
          inputType="tel"
          shouldAutoFocus={true}
          containerStyle="block mx-auto justify-between w-[20vw] flex-row-reverse mt-[20px]"
          inputStyle="border-b-4 border-[#0CA0A2] outline-transparent mt-[30px] focus-border-b-4 focus-border-[#0CA0A2] mb-[20px]"
          renderInput={(props) => <input {...props} dir="ltr" />}
        />
        <p className="text-center mt-[20px]">
          کد را دریافت نکردید؟
          <Link href="/login">
            <span className="text-blue-600 cursor-pointer">دریافت مجدد کد.</span>
          </Link>
        </p>
        <button
  className={`text-[white] bg-[#0CA0A2] text-center mx-auto block mt-[60px] px-[5rem] py-4 rounded-[20px] ${
    isOtpValid ? "" : "cursor-not-allowed"
  }`}
  onClick={() => mutate()}
  disabled={!isOtpValid}
>
  {isLoading ? "در حال ارسال..." : "تایید کد"}
</button>
      </div>
    </>
  );
}


