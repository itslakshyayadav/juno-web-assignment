import {
  HiOutlineXCircle,
  HiOutlineMagnifyingGlass,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import BaseDropdown from "./components/BaseDropdown";
import UserData from "./UsersData";

export default function MonitoringPage1() {
  const menuData = [
    { name: "Overview" },
    { name: "Onboarding" },
    { name: "Monitoring" },
    { name: "Flagging" },
    { name: "Sorce of Income" },
    { name: "UAR" },
  ];

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

  return (
    <div className="flex divide-x-2">
      <section className=" w-80 flex flex-col justify-between h-[46.2rem] px-5 py-5 ">
        <div className="flex flex-col  px-5 gap-14 py-5">
          <h1 className=" border-t-2 border-t-gray-400 border-b-2 border-b-gray-400 py-3 text-center text-3xl text-gray-400 font-normal">
            LOGO HERE
          </h1>
          <ul className=" flex flex-col gap-4 ">
            {menuData.map((items, index) => {
              return (
                <a href="" key={index}>
                  <li className=" text-lg px-3 py-2 hover:bg-indigo-200 text-gray-500 font-medium hover:text-blue-800 rounded-md">
                    {items.name}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-3 px-5 py-5">
          <img
            src="src/assets/ElonMusk.jpg"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col ">
            <h2 className="text-lg font-semibold">Elon Musk</h2>
            <p className="text-gray-500">elon@twitter.com</p>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-5 px-10 py-8 w-full">
        <h1 className="text-4xl font-semibold">Monitoring</h1>
        <div className="flex justify-between border-b-2 py-3">
          <div className="flex gap-8 py-2 text-gray-400 text-lg font-semibold ">
            <a href="" className="hover:text-indigo-800 ">
              Pending
            </a>
            <a href="" className="hover:text-indigo-800">
              Completed
            </a>
          </div>
          <div className="bg-red-200 rounded-md">
            <button
              type="button"
              className="px-4 gap-2 py-2 flex items-center text-red-500"
            >
              <HiOutlineXCircle className=" h-6 w-6 text-red-500"></HiOutlineXCircle>
              Close account
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2 w-[370px] border-2 rounded-md ">
            <HiOutlineMagnifyingGlass className="w-6 h-6 pl-2 text-gray-400"></HiOutlineMagnifyingGlass>
            <input
              type="text"
              className="px-2 py-2 w-full"
              placeholder="Search"
            />
          </div>

          <BaseDropdown dropdownElement=" Trigger reason">
            <ul className="flex flex-col ">
              {dropDownTrigger.map((dropDownData, index) => {
                return (
                  <a
                    key={index}
                    href=""
                    className="hover:bg-indigo-200 hover:text-black text-gray-400 py-1 px-2 rounded-md"
                  >
                    <li>{dropDownData.name}</li>
                  </a>
                );
              })}
            </ul>
          </BaseDropdown>

          <BaseDropdown dropdownElement="Risk leve">
            <ul className="flex flex-col ">
              {dropDownRiskLevel.map((RiskLevelData, index) => {
                return (
                  <a
                    key={index}
                    href=""
                    className="hover:bg-indigo-200 hover:text-black text-gray-400 py-1 px-2 rounded-md"
                  >
                    <li>{RiskLevelData.name}</li>
                  </a>
                );
              })}
            </ul>
          </BaseDropdown>
        </div>
        <UserData></UserData>
      </section>
    </div>
  );
}
