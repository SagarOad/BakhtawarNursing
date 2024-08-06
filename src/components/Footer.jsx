import React from 'react'
import Logo from "@/assets/logo.png";
import Image from 'next/image';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-700 flex justify-center items-center py-8 px-3'>

        <div className="container grid grid-cols-12 gap-4">
            <div className="flex flex-col gap-3 lg:col-span-4 md:col-span-6 col-span-12 text-white">
                
<Image src={Logo} alt="logo" width={1000} height={1000} className='w-[100px]'/>
<p>BMION - an architecturally impressive infrastructure spread across several acres lends to a mesmerizing view.</p>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <h4 className="py-5 text-yellow-600 text-xl font-bold">Contact Info</h4>
<ul className='flex flex-col gap-3 text-white text-sm'>
    <li className='gap-2 flex items-center'><FaMapMarkerAlt size={20} /> Plot AS-1/5-6, Ahsanabad, Sector -1 Gulzare-e-Hijri, Scheme 33, Karachi Pakistan.</li>
    <li className='gap-2 flex items-center'><FaPhone size={20} /> 0332-3492932</li>
    <li className='gap-2 flex items-center'><FaWhatsapp size={20} /> 0347-3293798</li>
    <li className='gap-2 flex items-center'><MdEmail size={20} /> bmionas25@gmail.com</li>
</ul>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <h4 className="py-5 text-yellow-600 text-xl font-bold">News Updates</h4>
<ul className='flex flex-col gap-3 text-white text-sm'>
    <li className='gap-2 flex items-center'>Admissions Open Spring 2024 <button className='text-yellow-600'>See More ...</button></li>
    <li className='gap-2 flex items-center'>Gallery <button className='text-yellow-600'>See More ...</button></li>
    <li className='gap-2 flex items-center'>History of Nursing <button className='text-yellow-600'>See More ...</button></li>

</ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
