import React from "react";

const BannerInfo = () => {
  return (
    <div className="bannerInfo my-16">
      <div className="videoBackground">
        <video autoPlay muted loop className="bgVideo">
          <source src="https://famewheels.pk/01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h2 className=" text-[3rem] font-bold">ONE OF THE NURSING INSTITUTE IN PAKISTAN</h2>
      </div>
    </div>
  );
};

export default BannerInfo;
