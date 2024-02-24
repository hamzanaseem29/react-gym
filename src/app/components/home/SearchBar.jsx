import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
const SearchBar = () => {
    return (
        <div>
            <Wrapper>
                <div className="lg:flex hidden absolute z-30 md:mt-[-5rem] left-0 right-0 max-w-screen-lg w-full mx-auto bg-white pl-6  py-5  drop-shadow-lg border rounded-xl">
                    <div className="bg-white  flex  justify-between w-full">
                        <div className="flex items-center justify-between w-full">
                            <input
                                type="text"
                                className="border-none focus:outline-none text-sm w-[200px] "
                                placeholder="Search City, Area, Pincode"
                            />
                            <button className="flex bg-[#EAEAEA] rounded-full p-3 items-center justify-center gap-2 text-black text-sm">
                                <IoLocationOutline />
                                Near me
                            </button>
                        </div>
                        <div className="border-l h-10 ml-6 "></div>
                        <div className="flex items-center justify-center w-full">
                            <input
                                type="text"
                                className="border-none focus:outline-none text-sm "
                                placeholder="Zumba Training"
                            />
                        </div>
                        <div className="border-l h-10 "></div>
                        <div className="flex items-center justify-center w-full ml-5">
                            <input
                                type="text"
                                className="border-none focus:outline-none text-sm "
                                placeholder="Batch Size"
                            />
                            <button className="bg-primary-blue rounded-full flex items-center justify-center h-12  w-12">
                                <IoSearch className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden flex flex-col justify-center items-center border-b">
                    <div className="flex items-center py-4 border rounded-md gap-3 px-2 bg-white shadow-sm w-full">
                        <IoSearch className="text-primary-blue" size={20} />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Search Trainer, Training"
                            className="focus:outline-none text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-between  w-full py-3">
                        <div className="flex items-center gap-1">
                            <input
                                type="text"
                                className="border-none focus:outline-none text-sm w-[120px] "
                                placeholder="Bharia, Karachi."
                            />
                            <button className="flex bg-primary-blue text-[12px] font-[300] text-white rounded-full p-3 items-center justify-center gap-2">
                                <IoLocationOutline />
                                Near me
                            </button>
                        </div>
                        <button className="bg-primary-blue rounded-md px-3 flex items-center justify-center h-10">
                            <CgDetailsMore className="text-white" size={24} />
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default SearchBar;
