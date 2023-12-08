import React from "react";

interface NavItemProps {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  active?: Boolean;
}

const NavItem = ({ Icon, active = false }: NavItemProps) => {
  const activeClasses =
    "relative before:content-[''] before:h-full before:absolute before:w-1 before:bg-blue-600 before:-left-4";

  return (
    <button
      className={`flex items-center justify-center aspect-square w-full rounded-full transition-all hover:bg-slate-100  ${
        active ? activeClasses : ""
      }`}
    >
      <Icon
        {...{
          height: 24,
          width: 24,
          className: `${active ? "text-blue-600" : "text-slate-400"}`,
        }}
      />
    </button>
  );
};

export default NavItem;
