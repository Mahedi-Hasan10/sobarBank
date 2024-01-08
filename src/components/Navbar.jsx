'use client';
import { useState } from 'react';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
const Navbar = () => {
    const [show, setShow] = useState(false);
    const openMenu = () => {
        setShow(show => !show);
        console.log(show)
    }

    return (
        <div>
            <nav className="custom_navbar flex flex-wrap items-center justify-between xl:px-[34px] lg:px-[25px] px-[15px]">
                <div>
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                </div>
                <ul className="flex flex-wrap gap-[20px] text-[18px] xl:flex lg:flex md:flex sm:hidden">
                    <li className="px-[20px] py-[10px] xl:rounded-[82px] lg:rounded-[50px] rounded-[40px]">Home</li>
                    <li className="px-[20px] py-[10px] xl:rounded-[82px] lg:rounded-[50px] rounded-[40px]">Carrers</li>
                    <li className="px-[20px] py-[10px] xl:rounded-[82px] lg:rounded-[50px] rounded-[40px]">About</li>
                    <li className="px-[20px] py-[10px] xl:rounded-[82px] lg:rounded-[50px] rounded-[40px]">Security</li>
                </ul>

                <div className="gap-7 xl:flex lg:flex md:flex sm:hidden">
                    <button className="hover:bg-[#CAFF33] px-7 py-3 rounded-3xl hover:!text-black transition duration-300">Login</button>
                    <button className="bg-[#CAFF33] px-7 py-3 rounded-3xl !text-black">Sign Up</button>
                </div>
                <div className="xl:hidden lg:hidden md:hidden sm:flex" >
                    <button onClick={openMenu} className="text-[#fff] text-[30px] cursor-pointer" >{!show ? <MenuOutlined />:<IoMdClose/>}</button> 
                </div>

                <div className={`sm:${show ? 'flex' : 'hidden'} transition   flex-col gap-4 p-4 xl:hidden lg:hidden md:hidden bg-black absolute top-[90px] left-0 w-full`}>
                <ul className=" flex items-center flex-col gap-[20px] text-[18px]">
                    <li className="px-[20px] border-b border-b-[#CAFF33] py-[10px] w-full text-center">Home</li>
                    <li className="px-[20px] py-[10px] border-b border-b-[#CAFF33]  w-full text-center">Carrers</li>
                    <li className="px-[20px] py-[10px] border-b border-b-[#CAFF33]  w-full text-center">About</li>
                    <li className="px-[20px] py-[10px] border-b border-b-[#CAFF33]  w-full text-center">Security</li>
                </ul>

                <div className="flex flex-col gap-7">
                    <button className="hover:bg-[#CAFF33] px-7 py-3 rounded-3xl hover:!text-black transition duration-300 border border-[#CAFF33]  w-full text-center">Login</button>
                    <button className="bg-[#CAFF33] px-7 py-3 rounded-3xl !text-black border border-[#CAFF33]  w-full text-center">Sign Up</button>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;