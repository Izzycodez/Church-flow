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
              First name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="firstName"
              required
              className="border w-[95%] bg-white rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 ">
            <label className="font-semibold" htmlFor="lastName">
              last name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              id="lastName"
              required
              className="bg-white border w-[95%] rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1 font-semibold">
            <div>Gender</div>
            <input
              type="radio"
              name="gender"
              className="appearance-none w-[14px] h-[14px] border-2  border-blue-500 rounded-full checked:bg-blue-500 checked:border-black"
            />
            <label htmlFor="gender" className=" ml-2 mr-4">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              className="appearance-none w-[14px] h-[14px] border-2 border-blue-500 rounded-full checked:bg-blue-500 checked:border-black"
            />
            <label htmlFor="gender" className="ml-2">
              Female
            </label>
          </div>
          <div className="mt-1">
            <label className="font-semibold" htmlFor="dateOfBirth">
              Date of birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              required
              className="border w-[95%] bg-white rounded px-2 py-1 block border-gray-400 "
            />
          </div>
          <div className="mt-1">
            <label className="font-semibold" htmlFor="Marital status">
              Marital status
            </label>
            <select
              name="Marital status"
              id="Marital status"
              required
              className="border w-[95%] bg-white rounded px-2 py-1 block border-gray-400 "
            >
              <option value="" className="opacity-30">
                What&apos;s your marital status?
              </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widow">Widow</option>
            </select>
          </div>
          <div className="mt-1">
            <label className="font-semibold bg-white" htmlFor="dateOfmarriage">
              Date of marriage
            </label>
            <input
              type="date"
              name="dateOfmarriage"
              required
              id="dateOfmarriage"
              className="border w-[95%] bg-white rounded px-2 py-1 block border-gray-400 "
            />
          </div>
        </div>
      </form>
      <div className="w-full mt-4 space-x-4 flex justify-end">
        <Link
          href={"/membership/contact"}
          className="bg-blue-800 inline-block py-1 rounded-lg text-white w-[26%] text-center"
        >
          Next step
        </Link>
      </div>
    </div>
  );
};

export default MembershipForm;
