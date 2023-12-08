import Image from "next/image";
import React from "react";
import CardLayout from "./CardLayout";

interface statsProps {
  title: string;
  count: number;
  image: string;
}

const Stats = ({ title, count, image }: statsProps) => {
  return (
    <CardLayout className="w-full max-w-[230px] flex flex-col items-end gap-10">
      <div className="flex flex-col gap-2 w-full mb-4">
        <h6 className="text-sm 2xl:text-base text-slate-500">{title}</h6>
        <h3 className="text-3xl 2xl:text-4xl font-semibold text-slate-950">
          {count}
        </h3>
      </div>
      <Image
        src={image}
        height={140}
        width={140}
        alt={title}
        className="aspect-square"
      />
    </CardLayout>
  );
};

export default Stats;
