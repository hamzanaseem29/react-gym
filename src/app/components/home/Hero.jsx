import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import Image from 'next/image'



const Hero = ({ title1, title2, paragraph }) => {
    return (
        <section>
            <Wrapper>
                <div className='flex flex-col justify-center items-center py-5 md:py-10  relative'>
                    <div className={`rounded-2xl md:rounded-3xl relative overflow-hidden`}>
                        <div className='md:rounded-3xl rounded-2xl w-full '>
                            <div className='bg-gradient-to-r inset-0 absolute  z-30 from-black/90 via-black/80 md:via-black/50 to-transparent'>

                            </div>
                            <div className='bg-gradient-to-br mt-[-4rem] ml-[-4rem] inset-0 absolute  z-30 from-primary-blue via-primary-blue/60 to-transparent rounded-full md:w-[400px] md:h-[400px] w-[300px] h-[300px]'>

                            </div>
                            <Image src={'/assets/banner-home.jpg'} alt='banner-gym' width={1920} height={1080} className='md:object-cover max-h-[530px] rounded-3xl' />

                            <div className='absolute left-0 right-0 top-[1px] md:top-10 flex flex-col justify-between h-full gap-2 p-5 md:p-10 z-40'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[25px] md:text-[57px] font-bold text-white'>{title1}
                                        <br />
                                        {title2}</h1>
                                    <p className='text-white md:max-w-[550px] text-[12px] md:text-base md:font-medium '>
                                        {paragraph}
                                    </p>

                                </div>
                                <div className='flex items-center gap-4 mt-3 md:pb-28 pb-3'>
                                    <div className='flex items-center  gap-3'>
                                        <Image src={'/assets/muscle.svg'} alt='' width={300} height={300} className='border-2 border-primary-blue rounded-full  w-6 h-6 md:w-10 md:h-10 p-1' />
                                        <p className='md:text-[18px] text-sm md:font-medium text-white'>
                                            1500+ Trainer
                                        </p>
                                    </div>
                                    <div className='flex items-center  gap-3'>
                                        <Image src={'/assets/dumbell.svg'} alt='' width={300} height={300} className='border-2 border-primary-blue rounded-full w-6 h-6 md:w-10 md:h-10 p-1' />
                                        <p className='md:text-[18px] text-sm md:font-medium text-white'>
                                            80+ Exercise
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                        {/* <SearchBar /> */}
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero
