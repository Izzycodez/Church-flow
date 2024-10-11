import React from "react";
import { LeftSide } from "../components/LeftSide";
import RightSide from "../components/RightSide";

const Page = () => {
  return (
    <div className="flex flex-row max-[500px]:flex-col p-1 min-h-screen">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Page;
