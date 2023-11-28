import React from "react";
import Options from "@/components/modules/Home/Options/Options";
import { useRecoilState } from "recoil";
import Image from "next/image";
import {
  goalTextState,
  AllImgGoal,
  optionsState,
} from "@/recoilstate/RecoilState";

interface GoalProps {}

const Goal: React.FC<GoalProps> = () => {
  const [optionss, setOptionss] = useRecoilState(optionsState);
  const [goalText, setGoalText] = useRecoilState(goalTextState);
  const [ImgGoal, setAllImgGoal] = useRecoilState(AllImgGoal);

  return (
    <>
      <div className="all relative">
        {ImgGoal.map((path, index) => (
          <Image key={index} src={path.src} alt="" className={path.class} width={path.width} height={path.height} />
        ))}

        <div className="vector2-opacity mb-[150px] relative mx-auto  w-[555px] h-[718px] rounded-[120px] bg-[#0CA0A2]   mt-[100px] flex flex-col gap-10 items-center justify-center ">
          <div className="mt-[180px]">
            <h1 className="text-white text-[46px] text-center font-[800] mb-[25px]">
              هدف ما در متانکست
            </h1>
            <Image
              src="/Images/Group.png"
              alt=""
              className="mx-auto mb-[35px] reduced-opacity"
              width={300}
              height={100}
            />
            <p className="w-[460px] h-[410px] text-center text-white leading-[45px] text-[18px] font-[400] opacity-90  ">
              {goalText}
            </p>
          </div>

          {optionss.map((option, index) => (
  <div
    key={index}
  >
    <Options
      title={option.title}
      srcimg={option.srcimg}
      width={option.width}
      top={option.top}
      right={option.right}
    />
  </div>
))}
        </div>
      </div>
    </>
  );
};

export default Goal
