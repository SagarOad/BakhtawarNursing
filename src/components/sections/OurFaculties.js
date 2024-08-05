import React from "react";
import Image from "next/image";
import collegeImage from "@/assets/bakhtawarMannerImg.jpg";


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
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">BSN</h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Bachelor of Science in Nursing (Generic)
              </p>
            </div>
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">
                Post RN BSN
              </h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Bachelor of Science in Nursing (Post Registered Nurse)
              </p>
            </div>
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">LHV</h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Lady Health Visitor
              </p>
            </div>
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">CNA</h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Certified Nursing Assistant
              </p>
            </div>
            <div className=" border-b-2 border-[#0000006d] pb-4">
              <h3 class="text-gray-600 text-[16px] font-semibold">CMW</h3>
              <p class="text-gray-800 text-[22px] font-bold">
                Community Midwife
              </p>
            </div>
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
