import React from "react";

const CardLayout = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
  }
>(({ className = "", children }, ref) => {
  return (
    <div
      ref={ref}
      className={`border border-slate-200 rounded-lg bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
});

CardLayout.displayName = "CardLayout";

export default CardLayout;
