"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [nav, setNav] = useState(false);

    const handleNavbar = () => {
        setNav(!nav);
    };

    return (
        <div
            className="top-0 z-50 border-b  sticky w-full ease-in duration-300 items-center bg-white/90"
        >
            <div className="flex  justify-between max-w-screen-xl items-center z-50 m-auto md:py-2 md:pr-0  pr-3 py-5  text-black">
                <Link href={"/"}>
                    <Image
                        src={"/assets/logo-sportta.svg"}
                        alt={"logo"}
                        width={300}
                        height={300}
                        className="w-[150px] md:w-[200px] object-contain"

                    />
                </Link>
                <ul
                    className="hidden lg:flex ease-in duration-300 "
                >
                    <li className="p-5">
                        <Link
                            href={"/"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Find a Trainer
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/syllabus"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Our Packages
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/about"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Diet Plans
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/about"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/about"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            How its Works
                        </Link>
                    </li>
                </ul>
                <div className="hidden lg:flex items-center justify-center list-none">
                    <li className="p-5">
                        <Link
                            href={"/"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <div className="border-l-2 border-primary-grey/50 h-8">

                    </div>
                    <li className="p-5">
                        <button
                            className="font-medium flex items-center gap-2 hover:text-primary-blue duration-300"
                        >
                            <div className="bg-primary-blue rounded-full flex items-center justify-center h-8 p-2 w-8">
                                <Image src={'/assets/user.svg'} className="" width={100} height={100} alt="" />

                            </div>
                            Login
                        </button>
                    </li>

                </div>
                {/* menu button  */}
                <div onClick={handleNavbar} className="block lg:hidden z-20 ">
                    {nav ? (
                        <AiOutlineClose size={25} className="text-white cursor-pointer" />
                    ) : (
                        <div className="flex cursor-pointer flex-col gap-2 justify-center items-center">
                            <div className="border-t-2 rounded-full border-primary-grey w-6">

                            </div>
                            <div className="border-t-2 rounded-full border-primary-grey w-6">

                            </div>
                        </div>
                    )}
                </div>
                {/* mobile menu */}
                <div
                    className={
                        nav
                            ? "lg:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-white text-center ease-linear duration-200"
                            : "lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black/75 text-white text-center ease-linear duration-200"
                    }
                >
                   <ul
                    className=" "
                >
                    <li className="p-5">
                        <Link
                            href={"/"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Find a Trainer
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/syllabus"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Our Packages
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/about"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            Diet Plans
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/about"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="p-5">
                        <Link
                            href={"/about"}
                            className="font-medium hover:text-primary-blue duration-300"
                        >
                            How its Works
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}
