import Link from "next/link";
import React from "react";

const MembershipForm = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-2">
          <div className="mt-1">
            <label className="font-semibold" htmlFor="firstName">
              Spouse&apos;s first name
            </label>
            <input
              type="text"
              placeholder="Your spouse's first name"
              id="firstName"
              required
              className="border w-[95%] bg-white rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              Spouse&apos;s last name
            </label>
            <input
              type="text"
              placeholder="Your spouse's last name"
              id="lastName"
              required
              className="border bg-white w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              Children&apos;s first name
            </label>
            <input
              type="text"
              placeholder="Enter your child's first name"
              id="lastName"
              required
              className="border bg-white w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              Children&apos;s last name
            </label>
            <input
              type="text"
              placeholder="Enter your child's last name"
              id="lastName"
              required
              className="border bg-white w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
        </div>
      </form>
      <div className="w-full mt-4 space-x-4 flex justify-end">
        <Link
          href={"/membership/contact"}
          className=" inline-block rounded-lg text-blue-500 border-2 border-blue-500 w-[26%] text-center"
        >
          Back
        </Link>
        <Link
          href={"/membership/bright"}
          className="bg-blue-800 inline-block rounded-lg text-white w-[26%] text-center"
        >
          Next step
        </Link>
      </div>
    </div>
  );
};

export default MembershipForm;
