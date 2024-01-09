import {
  HiArrowTopRightOnSquare,
  HiOutlineXCircle,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import BaseDropdown from "../components/BaseDropdown";
import CloseAccountModal from "../components/CloseAccountModal";
import { Link, useSearchParams } from "react-router-dom";
import BaseTable from "../components/BaseTable";
import userData from "../mock-data/userData";
import { USER_STATUS } from "../common/constants";
import { useState } from "react";

export default function MonitoringPage() {
  const [searchParams] = useSearchParams();
  const filterQueryParam = searchParams.get("filter");
  const [currentRiskLevel, setCurrentRiskLevel] = useState("All");
  const [searchText, setSearchText] = useState("");

  console.log(filterQueryParam);
  const dropDownTrigger = [
    { name: "hard flag" },
    { name: "Temp flag" },
    { name: "Restricted unflag" },
    { name: "Un flag" },
    { name: "Reviewed" },
  ];

  const dropDownRiskLevel = ["All", "High", "Medium", "Low"];

  const commonColumns = {
    user: {
      name: "User",
      model: "userName",
      cell: function (rowData) {
        return (
          <div className="flex gap-1 justify-between items-center">
            <div className="flex flex-col">
              <p className="font-medium">{rowData.userName}</p>
              <p className="text-sm text-gray-400">{rowData.userEmail}</p>
            </div>

            <button>
              <HiArrowTopRightOnSquare className="w-6 h-6 text-blue-600"></HiArrowTopRightOnSquare>
            </button>
          </div>
        );
      },
    },
    riskLevel: {
      name: "Risk level",
      model: "riskLevel",
      cell: function (rowData) {
        const riskLevelClasses = {
          High: {
            bg: "bg-red-700",
            text: "text-red-700",
          },
          Medium: {
            bg: "bg-yellow-700",
            text: "text-yellow-700",
          },
          Low: {
            bg: "bg-green-700",
            text: "text-green-700",
          },
        };
        return (
          <div className="flex gap-2 items-center">
            <div
              className={`${
                riskLevelClasses[rowData.riskLevel].bg
              } h-2 w-2 rounded-full`}
            ></div>
            <div
              className={`${
                riskLevelClasses[rowData.riskLevel].text
              } font-semibold `}
            >
              {rowData.riskLevel}
            </div>
          </div>
        );
      },
    },
    dateAddedOn: {
      name: "Date added on",
      model: "date",
    },
  };

  const pendingTableColumns = [
    commonColumns.user,
    commonColumns.riskLevel,
    {
      name: "Trigger reason",
      model: "triggerReason",
    },
    {
      name: "In queue for",
      model: "inQueueFor",
    },
    commonColumns.dateAddedOn,
    {
      name: "Previously reviewed",
      model: "previouslyReviewed",
      cell: function (rowData) {
        return (
          <div className="flex flex-col">
            <p className="font-medium">{rowData.previouslyReviewed}</p>
            <p className="text-sm text-gray-400">{rowData.reviewDate}</p>
          </div>
        );
      },
    },
  ];

  const completedTableColumns = [
    commonColumns.user,
    commonColumns.riskLevel,
    {
      name: "Action reason",
      model: "actionReason",
    },
    {
      name: "Time to close",
      model: "inQueueFor",
    },
    commonColumns.dateAddedOn,
    {
      name: "Action taken by",
      model: "actionTakenBy",
      cell: function (rowData) {
        return (
          <div className="flex flex-col">
            <p className="font-medium">{rowData.actionTakenByName}</p>
            <p className="text-sm text-gray-400">
              {rowData.actionTakenByEmail}
            </p>
          </div>
        );
      },
    },
  ];

  const pendingUsers = userData.filter(
    (item) =>
      item.status === USER_STATUS.Pending &&
      (currentRiskLevel === "All" || item.riskLevel === currentRiskLevel) &&
      (searchText === "" || item.userName.includes(searchText))
  );

  const completedUsers = userData.filter(
    (item) =>
      item.status === USER_STATUS.Completed &&
      (currentRiskLevel === "All" || item.riskLevel === currentRiskLevel) &&
      (searchText === "" || item.userName.includes(searchText))
  );

  return (
    <section className="flex flex-col gap-5 px-4 py-8 w-full">
      <h1 className="text-4xl font-semibold">Monitoring</h1>
      <div className="flex justify-between border-b-2">
        <div className="flex text-gray-400 gap-1 text-base font-semibold">
          <Link
            to="/monitoring?filter=pending"
            className={`py-5 px-6 hover:text-indigo-600 ${
              filterQueryParam === USER_STATUS.Pending || !filterQueryParam
                ? "text-indigo-600 border-b-[3px] border-b-indigo-600"
                : ""
            }`}
          >
            Pending
          </Link>
          <Link
            to="/monitoring?filter=completed"
            className={`py-5 px-6 hover:text-indigo-600 ${
              filterQueryParam === USER_STATUS.Completed
                ? "text-indigo-600 border-b-[3px] border-b-indigo-600"
                : " text-gray-400 hover:via-fuchsia-200"
            }`}
          >
            Completed
          </Link>
        </div>
        <CloseAccountModal>
          <div className="bg-red-100 flex rounded-md">
            <button
              type="button"
              className="px-3 gap-1 py-2 font-medium flex items-center text-red-600"
            >
              <HiOutlineXCircle className="h-5 w-5 text-red-600"></HiOutlineXCircle>
              Close account
            </button>
          </div>
        </CloseAccountModal>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 w-96 border-2 rounded-lg">
          <HiOutlineMagnifyingGlass className="w-6 h-6 pl-2 text-gray-400"></HiOutlineMagnifyingGlass>
          <input
            type="text"
            className="outline-none px-2 py-2 w-full rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search"
          />
        </div>

        <BaseDropdown dropdownElement="Trigger reason">
          <ul className="flex flex-col gap-1">
            {dropDownTrigger.map((dropDownData, index) => {
              return (
                <li key={"trigger-reason" + index}>
                  <button
                    type="button"
                    className="flex text-left hover:bg-indigo-200 hover:text-black text-gray-400 py-1 px-2 rounded-md w-full"
                  >
                    {dropDownData.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </BaseDropdown>

        <BaseDropdown dropdownElement="Risk level">
          <ul className="flex flex-col gap-1">
            {dropDownRiskLevel.map((riskLevel, index) => {
              return (
                <li key={"risk-level" + index}>
                  <button
                    type="button"
                    className="flex text-left hover:bg-indigo-200 hover:text-black text-gray-400 py-1 px-2 rounded-md w-full"
                    onClick={() => {
                      setCurrentRiskLevel(riskLevel);
                    }}
                  >
                    {riskLevel}
                  </button>
                </li>
              );
            })}
          </ul>
        </BaseDropdown>
      </div>
      {filterQueryParam === USER_STATUS.Completed ? (
        <BaseTable
          columns={completedTableColumns}
          rows={completedUsers}
        ></BaseTable>
      ) : (
        <BaseTable
          columns={pendingTableColumns}
          rows={pendingUsers}
        ></BaseTable>
      )}
    </section>
  );
}
