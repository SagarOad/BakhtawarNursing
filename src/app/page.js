import Navbar from "@/components/Navbar";
import BannerInfo from "@/components/sections/BannerInfo";
import ImageGrid from "@/components/sections/ImageGrid";
import NursingHistory from "@/components/sections/NursingHistory";
import OurFaculties from "@/components/sections/OurFaculties";
import apply from "@/assets/apply.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div className=" py-72 main-bg md:block hidden w-[90%] mx-auto"></div>

        <div className=" main-bg2 md:hidden">
          <h2 className=" font-bold text-center py-24 text-white text-[42px]">
            Bakhtawar Mannar Institute of Nursing
          </h2>
          <p className=" text-center text-[22px] text-[#e3c501] font-semibold">
            (SMC Private) Limited
          </p>
        </div>

        <div className="w-full flex justify-center md:mt-[-80px] items-center">
          <div className=" bg-[#9a1b55] h-[200px] mx-2 w-[340px] p-2 border-white border-2 text-white text-[23px] font-semibold flex justify-center items-center">
            <Link href="admission-form" className=" cta-button">
              <Image
                className=" mx-auto mb-4"
                src={apply}
                width={50}
                height={50}
              />
              <h2 className=" text-center">APPLY NOW</h2>
            </Link>
          </div>
          <div className=" bg-[#9a1b55] h-[200px] mx-2 w-[340px] p-2 border-white border-2 text-white flex justify-center items-center">
            <div>
              <h2 className=" text-center text-[23px] font-semibold">
                ADMISSION OPEN
              </h2>
              <p className="text-center">2024</p>
              <div className=" flex justify-center items-center mt-3">
                <button className="cta-button border-2 border-white px-3 py-1 text-[14px]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurFaculties />
      <ImageGrid />
      <NursingHistory />
      <BannerInfo />
    </div>
  );
}
