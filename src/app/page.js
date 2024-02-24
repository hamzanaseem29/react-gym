import Image from "next/image";
import Hero from "./components/home/Hero";
import SearchBar from "./components/home/SearchBar";
import Accomplishment from "./components/home/Accomplishment";
import Trainers from "./components/home/Trainers";
import Featured from "./components/home/Featured";
import Newsletter from "./components/home/Newsletter";

export default function Home() {
  return (
    <>
    <div className="relative">
      <Hero
        title1={"FIND THE BEST"}
        title2={"TRAINER FOR YOU"}
        paragraph={
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
        }
      />

    </div>
      <SearchBar />
      <Accomplishment />
      <Trainers />
      <Featured />
      <Newsletter/>
    </>
  );
}
