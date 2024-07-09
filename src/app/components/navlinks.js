"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/home", icon: "/images/home-alt.svg" },
  {
    name: "Dashboard",
    href: "/home/dashboard",
    icon: "/images/grid-22.svg",
  },
  {
    name: "Financial Aid",
    href: "/home/financial-aid",
    icon: "/images/coins22.svg",
  },
  { name: "Events", href: "/home/events", icon: "/images/calendar22.svg" },
  { name: "Counselling", href: "/home/counselling", icon: "/images/heart.svg" },
  { name: "Resources", href: "/home/resources", icon: "/images/bulb22.svg" },
  { name: "Blog", href: "/home/blog", icon: "/images/newspaper.svg" },
  {
    name: "Community",
    href: "/home/community",
    icon: "/images/user-group22.svg",
  },
  { name: "Support", href: "/home/support", icon: "/images/message.svg" },
];

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-6  w-3/4 mx-auto pb-[150px]'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("cursor-pointer text-black rounded-[10px]", {
              "bg-blueGradient text-white": pathname === link.href,
            })}
          >
            <button className='flex gap-3 my-3 mx-[18px] '>
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
