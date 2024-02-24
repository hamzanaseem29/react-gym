import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import Image from 'next/image'

const Accomplishment = () => {
    const data = [
        {
            id: 1,
            image: '/assets/img11.jpg',
            text: 'Yoga',
        },
        {
            id: 2,
            image: '/assets/img1.jpg',
            text: 'Strength Training',
        },
        {
            id: 3,
            image: '/assets/img2.jpg',
            text: 'Bodybuilding',
        },
        {
            id: 4,
            image: '/assets/img3.jpg',
            text: 'Pilates',
        },
        {
            id: 5,
            image: '/assets/img4.jpg',
            text: 'Aerobics',
        },
        {
            id: 6,
            image: '/assets/img5.jpg',
            text: 'Weightlifting',
        },
        {
            id: 7,
            image: '/assets/img6.jpg',
            text: 'Tai chi',
        },
        {
            id: 8,
            image: '/assets/img7.jpg',
            text: 'Streching',
        },
    ]

    return (
        <section>
            <Wrapper>
                <div className='md:py-16 py-5'>
                    <h1 className='text-[24px] md:text-[32px] font-bold '>
                        Accomplishment
                    </h1>
                    <div className='flex md:py-8 py-5  md:items-center md:justify-center gap-3 overflow-x-scroll lg:overflow-hidden lg:grid lg:grid-cols-4'>
                        {
                            data.map((e) => (
                                <div key={e.id} className='min-h-[250px] min-w-[250px] md:min-h-[390px] md:min-w-[300px] relative'>
                                    <Image src={e.image} alt='' className='object-cover w-[250px] h-[250px] md:h-[390px] md:w-[300px] rounded-xl' width={1080} height={1080} />
                                    <div className='bg-gradient-to-t from-black/90 via-transparent to-transparent absolute inset-0 rounded-b-xl'></div>
                                    <div className='absolute left-4 right-0 bottom-5 '>
                                        <p className='text-white font-semibold text-[18px]'>
                                            {e.text}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Accomplishment