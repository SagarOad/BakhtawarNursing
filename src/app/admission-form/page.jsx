import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>

      <div className="h-[60vh] bgHeroFaculty">
        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-6xl font-bold text-white">Admission Form</h1>
        </div>
      </div>

<div className="container">

<h1 className="text-gray-800 text-4xl font-bold py-6">Basic Information</h1>

<form className='grid grid-cols-12 gap-4 py-6'>
<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Name Of Applicant</label>
<input type="text" placeholder='e.g. Ali Khan' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Father's Name</label>
<input type="text" placeholder='e.g. Ali Khan' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Email</label>
<input type="email" placeholder='e.g. abc@gmail.com' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Date Of Birth</label>
<input type="date" placeholder='e.g. Ali Khan' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Birth Location</label>
<input type="text" placeholder='e.g. Karachi' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Birth Country</label>
<input type="text" placeholder='e.g. pakistan' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Age On Cloing Date</label>
<input type="date" placeholder='e.g. pakistan' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">CNIC or B-Form No:</label>
<input type="text" placeholder='e.g. 42000-123456789-0' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Martial Status</label>
<input type="text" placeholder='e.g. single' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Religion</label>
<input type="text" placeholder='e.g. Islam' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Gender</label>
<select type="text" className='border-[1px] border-gray-400 px-4 py-2 rounded' >
    <option value="" selected disabled>Select Gender</option>
    <option value="Male" >Male</option>
    <option value="Female" >Female</option>
</select>
</div>


<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Tel No</label>
<input type="number" placeholder='e.g. 021-12345678' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>

<div className='flex flex-col lg:col-span-4 gap-2'>
    <label htmlFor="name">Mobile No</label>
<input type="number" placeholder='e.g. 0345-1234567' className='border-[1px] border-gray-400 px-4 py-2 rounded' />
</div>


<div className='flex flex-col col-span-12 gap-2'>
    <label htmlFor="name">Home Address</label>
<textarea rows="4"  placeholder='e.g. a.b.c karachi pakistan' className='border-[1px] border-gray-400 px-4 py-2 rounded' ></textarea>
</div>


<div className="col-span-12 flex justify-center">

<button className="border-2 border-yellow-600 text-[23px] font-semibold px-4 py-2 mx-2 my-4 text-yellow-600">
            Submit
          </button>

</div>

</form>

</div>

    </div>
  )
}

export default page
