import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";

interface MenuDropdownProps {
  children: React.ReactNode;
  list: MenuItemProps[][];
  className?: string;
}

const MenuDropdown = ({ children, list, className }: MenuDropdownProps) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`z-10 absolute top-10 right-4 flex flex-col bg-white px-4 rounded-md border border-slate-200 shadow-xl shadow-slate-950/5 divide-y divide-slate-200 ${className}`}
        >
          {list.map((item, index) => (
            <div key={index} className={`flex flex-col py-2`}>
              {item.map((i, _i) => (
                <MenuItem
                  title={i.title}
                  disabled={i.disabled}
                  key={_i}
                  link={i.link}
                  type={i.type}
                  onClick={i.onClick}
                />
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;

interface MenuItemProps {
  title: string;
  link?: string;
  disabled?: boolean;
  type?: "link" | "button";
  onClick?: () => void;
}

export type MenuList = MenuItemProps[][];

const MenuItem = ({
  title,
  link = "#",
  disabled = false,
  type = "link",
  onClick = () => {},
}: MenuItemProps) => {
  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => {
        if (type === "button") {
          return (
            <button
              className={`py-1 px-4 -mx-4 text-sm text-slate-500 text-left ${
                active && "bg-slate-100"
              }`}
              onClick={onClick}
            >
              {title}
            </button>
          );
        } else {
          return (
            <Link
              className={`py-1 px-4 -mx-4 text-sm text-slate-500 ${
                active && "bg-slate-100"
              }`}
              href={link}
            >
              {title}
            </Link>
          );
        }
      }}
    </Menu.Item>
  );
};
