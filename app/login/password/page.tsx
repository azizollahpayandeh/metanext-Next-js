"use client"
import React, { useState } from "react";
import * as Yup from "yup";
import { useRecoilState } from "recoil";
import { useQueryClient } from "react-query"; // Import useQueryClient
import Swal from "sweetalert2";
import { PasswordNumberState } from "@/recoilstate/RecoilState";
import { useRouter } from "next/navigation";
import Image from "next/image";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(10, "رمز عبور باید حداقل 10 کاراکتر باشد")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      "رمز عبور باید شامل حروف بزرگ و کوچک و اعداد باشد"
    )
    .required("رمز عبور الزامی است"),
});

export default function Password() {
  const [password, setPassword] = useRecoilState(PasswordNumberState);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter()
  const queryClient = useQueryClient(); // Initialize the query client

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await schema.validate({ password });
      setModalOpen(true);
    } catch (error:any) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: error.message,
      });
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "با موفقیت‌ لاگین شدید.",
    }).then(() => {
      queryClient.invalidateQueries("myQueryKey"); // Replace "myQueryKey" with your actual query key
        router.push('/')
    });
  };

  return (
    <>
      <div className=" mt-[50px] mb-[50px]">
        <Image
        width={180}
        height={180}
          className="mx-auto w-[180px]"
          src="/Images/images (3).jfif"
          alt="login-otp"
        />
        <h1 className="text-center mt-[30px] font-[800]">ورود-ثبت&nbsp;نام</h1>
        <p className="text-center mt-[30px] font-[400]">
          لطفا رمز عبور خود را وارد کنید.
        </p>
        <input
          className=" text-right mx-auto block border-b-2 border-[#0CA0A2]
         outline-transparent mt-[30px] focus:border-b-2 focus-border-[#0CA0A2]"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          autoFocus={true}
        />
        <button
          onClick={handleSubmit}
          className="text-[white] bg-[#0CA0A2] text-center mx-auto block mt-[60px] px-[5rem] py-4 rounded-[20px]"
        >
          تایید
        </button>
        {isModalOpen && (
          closeModal()
        )}
      </div>
    </>
  );
}


