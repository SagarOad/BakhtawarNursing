import Image from "next/image";
import React from "react";
import image1 from "@/assets/01.jpeg";
import image2 from "@/assets/02.jpg";
import image3 from "@/assets/03.jpg";
import image4 from "@/assets/04.jpeg";
import image5 from "@/assets/05.jpg";
import image6 from "@/assets/06.jpeg";
import image7 from "@/assets/07.jpg";
import image8 from "@/assets/08.jpg";
import image9 from "@/assets/09.jpg";
import image10 from "@/assets/10.jpg";
import image11 from "@/assets/11.jpg";
import image12 from "@/assets/12.jpg";
import image13 from "@/assets/13.jpeg";
import image14 from "@/assets/14.jpg";
import image15 from "@/assets/15.jpg";

const ImageGrid = () => {
  return (
    <>
      <div className=" max-w-screen-2xl my-12 mx-auto p-8">
        {/* <h2 className=" text-[26px] font-bold text-center">Gallery</h2> */}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image1}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image2}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image3}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image4}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image5}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image6}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image7}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image8}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image9}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image10}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image11}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image12}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image13}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image14}
              alt=""
            />
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              class=" h-[280px] object-cover max-w-full rounded-lg"
              src={image15}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
