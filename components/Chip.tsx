import React from "react";

const Chip = ({ label }: { label: string }) => {
  return (
    <div className="py-1 px-2 bg-slate-100 rounded-full text-slate-500 text-[10px] 2xl:text-xs uppercase hover:bg-slate-200">
      {label}
    </div>
  );
};

export default Chip;
