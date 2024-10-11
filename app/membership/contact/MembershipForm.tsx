import Link from "next/link";
import React from "react";

const MembershipForm = () => {
  //phonebook contact cross threepeople
  return (
    <div>
      <form>
        <div className="grid grid-cols-2">
          <div className="mt-1">
            <label className="font-semibold" htmlFor="firstName">
              Phone number
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              id="phoneNumber"
              required
              className="border w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              className="border w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              Occupation
            </label>
            <input
              type="text"
              placeholder="What's your occupation?"
              id="occupation"
              required
              className="border w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              Educational background
            </label>
            <input
              type="text"
              placeholder="What's your educational background?"
              id="educationalBackground"
              required
              className="border w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
        </div>
        <div className="mt-1 block w-full">
          <label className="font-semibold" htmlFor="lastName">
            Address
          </label>
          <input
            type="text"
            placeholder="Street, City,State, Zip code and so on"
            id="address"
            required
            className="border w-[98%] rounded px-2 py-1 block border-gray-400 "
          />
        </div>
      </form>
      <div className="w-full mt-4 space-x-4 flex justify-end">
        <Link
          href={"/membership/user"}
          className=" inline-block rounded-lg text-blue-500 border-2 border-blue-500 w-[26%] text-center"
        >
          Back
        </Link>
        <Link
          href={"/membership/group"}
          className="bg-blue-800 inline-block rounded-lg text-white w-[26%] text-center"
        >
          Next step
        </Link>
      </div>
    </div>
  );
};

export default MembershipForm;
