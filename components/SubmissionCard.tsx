import React from "react";
import CardLayout from "./CardLayout";
import Image from "next/image";

const SubmissionCard = () => {
  return (
    <CardLayout className="flex gap-3 items-center relative">
      <div className="bg-slate-50 rounded-2xl aspect-square w-14 overflow-hidden">
        <Image src={"/profile.png"} height={56} width={56} alt="profile" />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-sm 2xl:text-base font-semibold text-slate-950">
          Ravi Sirswa
        </h5>
        <p className="text-[10px] 2xl:text-xs text-slate-500 font-medium">
          HTML Basics
        </p>
      </div>
      <p className="text-[10px] 2xl:text-xs text-slate-400 absolute top-2 right-2">
        25 min ago
      </p>
    </CardLayout>
  );
};

export default SubmissionCard;
