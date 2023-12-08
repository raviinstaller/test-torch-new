import React from "react";
import CardLayout from "./CardLayout";
import Image from "next/image";
import Chip from "./Chip";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const TestCard = () => {
  return (
    <CardLayout>
      <div className="flex gap-3 items-center relative">
        <div className="bg-slate-50 rounded-2xl aspect-square w-14 flex items-center justify-center">
          <Image src={"/logoIcon.svg"} height={40} width={40} alt="logo" />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-sm 2xl:text-base font-semibold text-slate-950">
            HTML Basics
          </h5>
          <div className="flex gap-1">
            <Chip label="beginer" />
          </div>
        </div>
        <button className="aspect-square w-8 bg-slate-50 flex items-center justify-center rounded-full hover:bg-slate-100 absolute top-0 right-0">
          <EllipsisVerticalIcon
            height={24}
            width={24}
            className={"text-slate-400"}
          />
        </button>
      </div>

      <div className="flex gap-2 my-3">
        <CardLayout className="!rounded-md !px-3 !py-2 grow hover:bg-slate-50">
          <p className="text-[10px] 2xl:text-xs text-slate-500 uppercase">
            Questions
          </p>
          <h6 className="text-base 2xl:text-lg font-medium text-slate-950">
            10
          </h6>
        </CardLayout>
        <CardLayout className="!rounded-md !px-3 !py-2 grow hover:bg-slate-50">
          <p className="text-[10px] 2xl:text-xs text-slate-500 uppercase">
            Submissions
          </p>
          <h6 className="text-base 2xl:text-lg font-medium text-slate-950">
            10
          </h6>
        </CardLayout>
      </div>
      <p className="text-[10px] 2xl:text-xs text-slate-400 uppercase italic">
        updated on: 07 Dec
      </p>
    </CardLayout>
  );
};

export default TestCard;
