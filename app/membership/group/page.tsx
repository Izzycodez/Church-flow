import React from "react";
import MembershipForm from "./MembershipForm";
import Header from "./Header";
import Center from "@/app/components/members/Center";

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[450px] w-[450px]">
        <Header />
        <Center />
        <MembershipForm />
      </div>
    </div>
  );
}
