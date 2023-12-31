import React from "react";
import CardLayout from "./CardLayout";
import Image from "next/image";
import Chip from "./form/Chip";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import MenuDropdown, { MenuList } from "./MenuDropdown";

const TestCard = () => {
  const menuItems: MenuList = [
    [
      { title: "Edit", type: "button" },
      { title: "Remove", type: "button" },
      { title: "Share", type: "button" },
    ],
  ];

  return (
    <CardLayout>
      <div className="flex gap-3 items-center relative">
        <div className="bg-slate-50 rounded-2xl aspect-square w-14 h-14 flex items-center justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            height={24}
            width={24}
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-1 overflow-hidden">
          <h5 className="text-sm 2xl:text-base font-semibold text-slate-950 truncate me-10">
            This is a very long title asdf
          </h5>
          <div className="flex gap-1">
            <Chip label="beginer" />
          </div>
        </div>
        <MenuDropdown list={menuItems} className="!top-3 !-right-2">
          <div className="aspect-square w-8 bg-slate-50 flex items-center justify-center rounded-full hover:bg-slate-100 absolute -top-full -right-2">
            <EllipsisVerticalIcon
              height={24}
              width={24}
              className={"text-slate-400"}
            />
          </div>
        </MenuDropdown>
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
