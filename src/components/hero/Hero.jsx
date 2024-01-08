import Image from 'next/image';
import { MdVerified } from "react-icons/md";

const Hero = () => {
    return (
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:gap-[90px] lg:gap-[40px] gap-[40px]  sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[100px] sm:py-4 md:py-[60px] lg:py-[100px] xl:py-[150px]">
            <div className='flex flex-col gap-[24px]'>
                <p className='flex items-center gap-2 xl:p-5 lg:p-4 md:p-3 p-2 rounded-[60px] bg-[#262626] text-white text-[18px] font-[300px] max-w-[80%]'><MdVerified/> No LLC Required, No Credit Check.</p>
                <h2 className='xl:text-[48px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-white leading-[150%] font-medium'>Welcome to YourBank Empowering Your <span className='text-[#caff33]'>Financial Journey</span></h2>
                <p className='text-base font-light text-white leading-[150%]'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customer&apos;s needs.</p>
            </div>
            <div className='relative sm:hidden'>
                <Image src="/hero/Container.png" alt="hero" width={515} height={624} />
                <Image className='absolute top-[-5%] right-[-5%] xl:flex lg:flex hidden' src="/hero/heroarrow.png" alt="hero" width={417} height={382} />
            </div>
        </div>
    );
};

export default Hero;