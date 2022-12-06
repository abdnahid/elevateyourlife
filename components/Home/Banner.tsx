import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
  const [bannerHeight, setBannerHeight] = useState(300);
  useEffect(() => {
    const element = window.document.querySelector("#mainMenu");
    setBannerHeight(window.innerHeight - element!.clientHeight);
    window.addEventListener("resize", () =>
      setBannerHeight(window.innerHeight - element!.clientHeight)
    );
  }, [typeof window !== "undefined" && window.innerHeight]);
  return (
    <section className="banner-height bg-bodyBg flex items-center">
      <div
        className="w-2/5 relative z-10"
        style={{ height: `${bannerHeight}px` }}
      >
        <Image
          src="https://res.cloudinary.com/abdnahid/image/upload/v1669921613/yoga/Homepage/banner-image_pbnkrv.jpg"
          layout="fill"
          alt="banner"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-3/5 z-20">
        <div className="font-gotu leading-[10rem] text-dark text-[140px] w-max text-center md:text-left md:-ml-20 ">
          <h1>Yoga</h1>
          <h1 className="md:pl-8">Retreat</h1>
          <h1 className="md:pl-16">Coach</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
