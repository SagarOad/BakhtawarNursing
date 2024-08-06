import React from 'react'
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
    <Navbar />
    <div className="h-[60vh] bgHeroFaculty">
      <div className="flex justify-center items-center h-full w-full">
        <h1 className="text-6xl font-bold text-white">
          About Us
        </h1>
      </div>
    </div>

  </div>
  )
}

export default page