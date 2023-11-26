import { HiOutlineXCircle, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import BaseDropdown from "../components/BaseDropdown";
import UserData from "./UsersData";
import { useState } from "react";
import BaseModal from "../components/BaseModal";
import { Link } from "react-router-dom";

export default function MonitoringPage1() {
  const [isShow, setIsShow] = useState(false);

  const dropDownTrigger = [
    { name: "hard flag" },
    { name: "Temp flag" },
    { name: "Restricted unflag" },
    { name: "Un flag" },
    { name: "Reviewed" },
  ];

  const dropDownRiskLevel = [
    { name: "High" },
    { name: "Medium" },
    { name: "Low" },
  ];
  const handleStatusChange = (value) => {
    setIsShow(value);
  };

  const CloseAccountModal = () => {
    return (
      <BaseModal>
        <div className="bg-red-100 flex rounded-md">
          <button
            type="button"
            className="px-3 gap-1 py-2 font-medium flex items-center text-red-600"
          >
            <HiOutlineXCircle className="h-5 w-5 text-red-600"></HiOutlineXCircle>
            Close account
          </button>
        </div>
      </BaseModal>
    );
  };

  return (
    <section className="flex flex-col gap-5 px-4 py-8 w-full">
      <h1 className="text-4xl font-semibold">Monitoring</h1>
      <div className="flex justify-between border-b-2 py-3">
        <div className="flex gap-8 py-2 text-gray-400 text-base font-semibold">
          <Link
            onClick={() => handleStatusChange(false)}
            className="hover:text-indigo-800"
          >
            Pending
          </Link>
          <Link
            onClick={() => handleStatusChange(true)}
            className="hover:text-indigo-800"
          >
            Completed
          </Link>
        </div>
        <CloseAccountModal></CloseAccountModal>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 w-96 border-2 rounded-lg">
          <HiOutlineMagnifyingGlass className="w-6 h-6 pl-2 text-gray-400"></HiOutlineMagnifyingGlass>
          <input
            type="text"
            className="outline-none px-2 py-2 w-full rounded-lg
              "
            placeholder="Search"
          />
        </div>

        <BaseDropdown dropdownElement=" Trigger reason">
          <ul className="flex flex-col">
            {dropDownTrigger.map((dropDownData, index) => {
              return (
                <Link
                  key={index}
                  href=""
                  className="hover:bg-indigo-200 hover:text-black text-gray-400 py-1 px-2 rounded-md"
                >
                  <li>{dropDownData.name}</li>
                </Link>
              );
            })}
          </ul>
        </BaseDropdown>

        <BaseDropdown dropdownElement="Risk level">
          <ul className="flex flex-col ">
            {dropDownRiskLevel.map((RiskLevelData, index) => {
              return (
                <Link
                  key={index}
                  href=""
                  className="hover:bg-indigo-200 hover:text-black text-gray-400 py-1 px-2 rounded-md"
                >
                  <li>{RiskLevelData.name}</li>
                </Link>
              );
            })}
          </ul>
        </BaseDropdown>
      </div>
      <UserData isShow={isShow}></UserData>
    </section>
  );
}
