import Navbar from "@/components/Navbar";
import OurFaculties from "@/components/sections/OurFaculties";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="py-80 main-bg w-full">
          <h2 className=" font-bold text-center text-white text-[66px]">
            Bakhtawar Mannar Institute of Nursing
          </h2>
          <p className=" text-center text-[22px] text-[#e3c501] font-semibold">
            (SMC Private) Limited
          </p>
        </div>

        <div className=" bg-[#9a1b55] w-full flex justify-center items-center">
          <button className="border-2 cta-button border-white text-[23px] font-semibold px-4 py-2 mx-2 my-4 text-white">
            APPLY FOR ADMISSION
          </button>
        </div>
      </div>

      <OurFaculties />
    </div>
  );
}
