import Navbar from "@/components/Navbar";
import React from "react";

const SubjectFaculty = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[60vh] bgHeroFaculty">
        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-6xl font-bold text-white">
            CMW – Community Midwife
          </h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="flex justify-between items-center md:gap-6">
          <div>
            <h1 className="text-gray-800 text-4xl font-bold">
              CMW – Community Midwife
            </h1>

            <p className="text-yellow-600 py-6 font-semibold text-xl">
              2 Years Diploma Program
            </p>

            <p className="text-gray-700 text-xl">
              Cultivating academic distinction and pioneering research in
              computing, with the ambition to emerge as a regional leader in
              technological innovation and societal advancement.
            </p>

            <h1 className="text-gray-800 text-4xl font-bold mt-4">
              Eligibility Criteria
            </h1>

            <ul className="text-gray-700 text-base flex flex-col gap-3 py-3 list-disc px-4">
              <li>
                Matriculation with minimum 45% Marks in Biology, Chemistry, &
                Physics
              </li>
              <li>Matriculation in Arts with minimum 50% Marks</li>
              <li>Age limit: 14-35 Years</li>
              <li>Gender: Both</li>
            </ul>
            <button className="border-2 cta-button border-yellow-600 text-[23px] font-semibold px-4 py-2 mx-2 my-4 text-yellow-600">
            APPLY FOR ADMISSION
          </button>
            <h1 className="text-gray-800 text-4xl font-bold mt-4">
              Program & Curriculum Details
            </h1>

            <div className="flex items-center gap-3">
              <div>
                <p className="text-yellow-600  font-semibold text-xl bg-gray-300 p-1 my-4">
                  Program Duration
                </p>
                <p>4 Years (8 semesters)</p>
              </div>
              <div>
                <p className="text-yellow-600  font-semibold text-xl bg-gray-300 p-1 my-4">
                  Credit Hours
                </p>
                <p>136 Cr. Hrs.</p>
              </div>
            </div>

            <table class="table-auto">
              <thead>
                <tr>
                  <th class="lg:px-4 px-2 py-2">Code</th>
                  <th class="lg:px-4 px-2 py-2">Title</th>
                  <th class="lg:px-4 px-2 py-2">Cr. Hrs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border lg:px-4 px-2 py-2">CMC111</td>
                  <td class="border lg:px-4 px-2 py-2">
                    Programming Fundamentals
                  </td>
                  <td class="border lg:px-4 px-2 py-2">4 (3-1)</td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border lg:px-4 px-2 py-2">GER111</td>
                  <td class="border lg:px-4 px-2 py-2">
                    Application of Information & Communication Technologies
                  </td>
                  <td class="border lg:px-4 px-2 py-2">3 (2-1)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <img
            src="https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="nursing"
            className="w-full h-full object-contain lg:flex hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectFaculty;
