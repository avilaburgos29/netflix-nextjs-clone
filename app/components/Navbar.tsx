"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, SearchIcon } from "lucide-react";
import UserNav from "./UserNav";

interface NavbarProps {
    name: string;
    href: string;
}

const NavbarItem: NavbarProps[] = [
    { name: "Home", href: "/home" },
    { name: "TV Shows", href: "/home/shows" },
    { name: "Movies", href: "/home/movies" },
    { name: "Recently", href: "/home/recently" },
    { name: "My List", href: "/home/user/list" },
];


export default function Navbar() {

    const pathName = usePathname();

    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src={Logo} alt="Netflix Logo" priority />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {NavbarItem.map((item, idx) => (
                        <div key={idx}>
                            {pathName === item.href ? (
                                <li>
                                    <Link href={item.href} className="text-white font-semibold underline text-sm" >{item.name}</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href={item.href} className="text-gray-300 font-normal text-sm">{item.name}</Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-x-8">
                <SearchIcon className="w-5 h-5 text-gray-300 cursor-pointer" />
                <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
                <UserNav />
            </div>
        </div>
    );
}