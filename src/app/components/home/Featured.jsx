import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const Featured = () => {
  const data = [
    {
      id: 1,
      image: "/assets/gym1.jpg",
      name: "Punch Fitness",
      desc: "Near IGI Airport, Airocity road, Delhi",
      rating: "5.0",
      reviews: "650 reviews",
    },
    {
      id: 2,
      image: "/assets/gym2.jpg",
      name: "Gold Gym Dwarka",
      desc: "Sector 52, Dwarka,  Delhi",
      rating: "4.9",
      reviews: "650 reviews",
    },
    {
      id: 3,
      image: "/assets/gym3.jpg",
      name: "Fitness Zone",
      desc: "Near IGI Airport, Airocity road, Delhi",
      rating: "4.7",
      reviews: "650 reviews",
    },
  ];
  return (
    <section>
      <Wrapper>
        <div className="md:pb-16 pb-5">
          <h1 className="text-[24px] md:text-[32px] font-bold ">
            Featured Gym&apos;s</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 cursor-pointer">
            {data.map((e) => (
              <div
                key={e.id}
                className="flex flex-col gap-4 justify-start items-start"
              >
                <Image
                  src={e.image}
                  alt=""
                  width={1080}
                  height={1080}
                  className="rounded-lg object-cover h-[250px]"
                />
                <p className="text-[18px] font-medium">{e.name}</p>
                <p>{e.desc}</p>
                <div className="flex items-center gap-2">
                  <div className="bg-[#1AB64F] rounded-lg px-3 py-1 flex items-center gap-2">
                    <p className="text-white">{e.rating}</p>
                    <div>
                      <FaStar className="text-white" size={16} />
                    </div>
                  </div>

                  <p>({e.reviews})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Featured;
