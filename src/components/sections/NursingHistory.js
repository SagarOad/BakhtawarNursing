import React from "react";
import Image from "next/image";
import nursingImage from "@/assets/nursing1.jpg"

const NursingHistory = () => {
  return (
    <div className="max-w-screen-2xl my-6 mx-auto p-8">
      <div className=" grid grid-cols-12 md:gap-12">
        <div className=" col-span-12  md:col-span-6">
          <h2 className="text-gray-800 text-[24px] font-bold border-green-600 mb-4">
            Nursing History
          </h2>
          <p className=" text-[18px]">
            The history of nursing is a profound journey that spans from ancient
            civilizations to the present day, rooted in compassion and
            dedication to care. Originating with early caregivers using
            traditional remedies, nursing evolved significantly during the
            Middle Ages through religious orders. The 19th century saw Florence
            Nightingale revolutionize the profession with her work during the
            Crimean War, setting the stage for modern nursing education and
            practice. Throughout the 20th century and beyond, nursing expanded
            into specialized fields, playing a crucial role in global health
            care. Today, nurses continue to be indispensable in promoting health
            and healing across diverse settings.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Image src={nursingImage} width={1000} height={1000}   />
        </div>
      </div>
    </div>
  );
};

export default NursingHistory;
