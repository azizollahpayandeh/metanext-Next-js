"use client";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { phoneNumberStatee } from "@/recoilstate/RecoilState";
import { useRecoilState } from "recoil";
import { useMutation, useQueryClient } from "react-query";
import Image from "next/image";

interface sendCodeProps {
  mobile_prefix: string;
  mobile: string;
}

const sendCode = async ({ mobile_prefix, mobile }: sendCodeProps) => {
  const { data } = await axios.post(
    "https://demo1.metanext.biz/api/v1/auth/request",
    {
      type: "mobile",
      mobile_prefix,
      mobile,
    }
  );

  return data.data.secret;
};

export default function Number() {
  const [phoneNumberValue, setPhoneNumberValue] =
    useRecoilState(phoneNumberStatee);
  const router = useRouter();
  // const queryClient = useQueryClient();

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, "شماره تلفن باید 11 رقمی باشد")
      .required("شماره تلفن الزامی است"),
  });


  const mutation = useMutation(sendCode, {
    onSuccess: (secret) => {
      window.localStorage.setItem("otpSecret", secret)
      router.push('/login/otp')
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutation.mutate({
        mobile_prefix: "+98",
        mobile: values.phoneNumber,
      });
    },
  });

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhoneNumberValue(e.target.value);
    formik.handleChange(e);
  };

  return (
    <>
      <div className="mt-[50px] mb-[50px]">
        <Image
          width={400}
          height={400}
          className="mx-auto w-[180px]"
          src="/images/images (3).jfif"
          alt="login-otp"
        />
        <h1 className="text-center mt-[30px] font-[800]">ورود-ثبت&nbsp;نام</h1>
        <p className="text-center mt-[30px] font-[400]">
          لطفا شماره تلفن همراه خود را وارد کنید.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="text-right mx-auto block border-b-2 
            outline-transparent mt-[30px] focus-border-b-4 "
            type="number "
            placeholder="شماره را وارد کنید..."
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumberValue}
            onChange={handlePhoneNumberChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-600 flex justify-center items-center mt-[20px]">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
          <button
            type="submit"
            className="text-[white] bg-[#0CA0A2] text-center mx-auto block mt-[40px] px-[5rem] py-4 rounded-[20px]"
            disabled={!formik.isValid || mutation.isLoading}
          >
            {mutation.isLoading
              ? "در حال ارسال..."
              : formik.isValid
              ? "تایید شماره تلفن"
              : "شماره نادرست"}
          </button>
        </form>
      </div>
    </>
  );
}
