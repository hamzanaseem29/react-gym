import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import Image from 'next/image'

const Newsletter = () => {
    return (
        <section>
            <Wrapper>
                <div className='flex md:flex-row flex-col items-center justify-between w-full bg-white p-3 md:p-5 border rounded-lg border-[#777]/20'>
                    <div className='flex  items-center  md:w-1/3 justify-between gap-3 md:gap-0  '>
                        <div className='w-[60px]  h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#FFEFD6] flex justify-center items-center'>
                            <Image src={'/assets/price-tag.svg'} alt='' height={1080} width={1080} className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] object-contain' />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-[18px] md:text-[20px] font-[500]'>
                                Subscribe for latest news
                            </p>
                            <p className='text-[16px] '>
                                Subscribe Now
                            </p>

                        </div>

                    </div>
                    <div className='flex md:flex-row flex-col items-center gap-2 w-full md:w-auto pt-4 md:pt-0'>
                        <input
                            type="email"
                            className=" focus:outline-none border h-12 px-3 md:w-[300px] w-full  rounded-lg"
                            placeholder="Enter your email"
                        />
                        <button className="bg-primary-blue text-white rounded-md w-full md:w-auto md:px-6 flex items-center justify-center h-12">
                            Subscribe
                        </button>

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Newsletter