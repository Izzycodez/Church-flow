import React from "react";
import Image from "next/image";
import church from "@/public/images/Frame 18.png";

const RightSide = () => {
  return (
    <div className=" w-2/4 md:w-3/5 max-[500px]:w-full h-screen relative">
      <Image src={church} alt="Church image" fill={true} />
    </div>
  );
};

export default RightSide;
