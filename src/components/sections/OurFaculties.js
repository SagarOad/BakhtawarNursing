import React from "react";
import Image from "next/image";
import collegeImage from "@/assets/bakhtawarMannerImg.jpg";
import Link from "next/link";

const OurFaculties = () => {
  return (
    <section class="max-w-screen-2xl my-6 mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image src={collegeImage} alt="Campus" class="w-full h-auto" />
        </div>
        <div>
          <h2 class="text-gray-800 text-[24px] font-bold border-green-600 mb-12">
            <span className=" text-gray-600 font-semibold">OUR</span> FACULTIES
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Link href="/generic-nursing">
              <div className=" border-b-2 border-[#0000006d] pb-4">
                <h3 class="text-gray-600 text-[16px] font-semibold">BSN</h3>
                <p class="text-gray-800 text-[22px] font-bold">
                  Bachelor of Science in Nursing (Generic)
                </p>
              </div>
            </Link>
            <Link href="/post-nursing">
              <div className=" border-b-2 border-[#0000006d] pb-4">
                <h3 class="text-gray-600 text-[16px] font-semibold">
                  Post RN BSN
                </h3>
                <p class="text-gray-800 text-[22px] font-bold">
                  Bachelor of Science in Nursing (Post Registered Nurse)
                </p>
              </div>
            </Link>
            <Link href="/lhv">
              <div className=" border-b-2 border-[#0000006d] pb-4">
                <h3 class="text-gray-600 text-[16px] font-semibold">LHV</h3>
                <p class="text-gray-800 text-[22px] font-bold">
                  Lady Health Visitor
                </p>
              </div>
            </Link>
            <Link href="/cna">
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">CNA</h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Certified Nursing Assistant
              </p>
            </div>
            </Link>
            <Link href="/cmw">
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">CMW</h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Community Midwife
              </p>
            </div>
            </Link>
          </div>

          {/* <div className=" mt-12">
          <h2 className=" text-[24px]">Eligibility Criteria</h2>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurFaculties;
