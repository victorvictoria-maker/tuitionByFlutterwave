"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/home", icon: "/images/home-alt.svg" },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "/images/grid-22.svg",
  },
  {
    name: "Financial Aid",
    href: "/financial-aid",
    icon: "/images/coins22.svg",
  },
  { name: "Events", href: "/events", icon: "/images/calendar22.svg" },
  { name: "Counselling", href: "/counselling", icon: "/images/heart.svg" },
  { name: "Resources", href: "/resources", icon: "/images/bulb22.svg" },
  { name: "Blog", href: "/blog", icon: "/images/newspaper.svg" },
  {
    name: "Community",
    href: "/community",
    icon: "/images/user-group22.svg",
  },
  { name: "Support", href: "/support", icon: "/images/message.svg" },
];

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-6 w-3/4 mx-auto pb-[150px]'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("cursor-pointer text-black rounded-[10px]", {
              "bg-blueGradient text-white": pathname === link.href,
            })}
          >
            <button className='flex gap-3 my-3 ml-[15px] mr-[18px] '>
              <Image src={link.icon} alt='Home Icon' width={20} height={20} />{" "}
              {link.name}
            </button>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navlinks;
