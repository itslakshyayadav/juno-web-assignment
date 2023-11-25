import {
  HiOutlineDuplicate,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
} from "react-icons/hi";
export default function UserData(props) {
  const { isShow } = props;

  const Data = [
    { name: "User", status: "User" },
    {
      name: "Risk level",
      status: "Risk level",
      icon1: (
        <HiOutlineChevronUp className="w-3 h-3 text-gray-900"></HiOutlineChevronUp>
      ),
      icon2: (
        <HiOutlineChevronDown className="w-3 h-3 text-gray-500"></HiOutlineChevronDown>
      ),
    },
    {
      name: "Trigger reason",
      status: "Action Reason",
    },
    {
      name: "In queue for",
      status: "In queue for",
      icon1: (
        <HiOutlineChevronUp className="w-3 h-3 text-gray-900"></HiOutlineChevronUp>
      ),
      icon2: (
        <HiOutlineChevronDown className="w-3 h-3 text-gray-500"></HiOutlineChevronDown>
      ),
    },
    {
      name: "Date added on",
      status: "Date added on",
      icon1: (
        <HiOutlineChevronUp className="w-3 h-3 text-gray-900"></HiOutlineChevronUp>
      ),
      icon2: (
        <HiOutlineChevronDown className="w-3 h-3 text-gray-500"></HiOutlineChevronDown>
      ),
    },
    { name: "Priviously reviewed", status: "Action Taken By" },
  ];

  const employeeData = [
    {
      name: {
        userName: "Sam Altman",
        userEmail: "samaltman@gmail.com",
      },
      icon: (
        <HiOutlineDuplicate className="w-6 h-6 text-blue-600"></HiOutlineDuplicate>
      ),
      riskLevel: "Medium",
      triggerReason: "IP Change",
      actionReason: "Flagged",
      inQueueDay: "4 days",
      date: "12 Otc,2023",
      priviouslyReviewed: {
        status: "Yes",
        date: "23 Aug,2023",
      },
      actionTakenBy: {
        name: "Neil",
        email: "neil@juno.com",
      },
    },
    {
      name: {
        userName: "Sameer Choubey",
        userEmail: "sameerchoubey@gmail.com",
      },
      icon: (
        <HiOutlineDuplicate className="w-6 h-6 text-blue-600"></HiOutlineDuplicate>
      ),
      riskLevel: "High",
      triggerReason: "FIFO",
      actionReason: "Closed",

      inQueueDay: "4 days",
      date: "12 Otc,2023",
      priviouslyReviewed: {
        status: "NO",
        date: "",
      },
      actionTakenBy: {
        name: "Pratik",
        email: "pratik@juno.com",
      },
    },
    {
      name: {
        userName: "Adarsh Panikkar",
        userEmail: "adarsh@gmail.com",
      },
      icon: (
        <HiOutlineDuplicate className="w-6 h-6 text-blue-600"></HiOutlineDuplicate>
      ),
      riskLevel: "Low",
      triggerReason: "IP Change",
      actionReason: "Cleared",
      inQueueDay: "5 days",
      date: "12 Otc,2023",
      priviouslyReviewed: {
        status: "NO",
        date: "",
      },
      actionTakenBy: {
        name: "Prashanth",
        email: "prashanth@juno.com",
      },
    },
    {
      name: {
        userName: "Pratik shetty",
        userEmail: "pratik3@gmail.com",
      },
      icon: (
        <HiOutlineDuplicate className="w-6 h-6 text-blue-600"></HiOutlineDuplicate>
      ),
      riskLevel: "High",
      triggerReason: "FIFO",
      actionReason: "SOI requested",
      inQueueDay: "5 days",
      date: "12 Otc,2023",
      priviouslyReviewed: {
        status: "Yes",
        date: "12 Sep,2024",
      },
      actionTakenBy: {
        name: "Rasleen Kaur",
        email: "rasleen@juno.com",
      },
    },
    {
      name: {
        userName: "Elon Musk",
        userEmail: "elon@twitterceo.com",
      },
      icon: (
        <HiOutlineDuplicate className="w-6 h-6 text-blue-600"></HiOutlineDuplicate>
      ),
      riskLevel: "Low",
      triggerReason: "FIFO",
      actionReason: "Flagged",

      inQueueDay: "5 days",
      date: "12 Otc,2023",
      priviouslyReviewed: {
        status: "Yes",
        date: "12 Sep,2024",
      },
      actionTakenBy: {
        name: "Pratik Shetty",
        email: "pratik@juno.com",
      },
    },
    {
      name: {
        userName: "Tirna Kundu",
        userEmail: "tirna@juno.com",
      },
      icon: (
        <HiOutlineDuplicate className="w-6 h-6 text-blue-600"></HiOutlineDuplicate>
      ),
      riskLevel: "Low",
      triggerReason: "FIFO",
      actionReason: "Closed",
      inQueueDay: "5 days",
      date: "12 Otc,2023",
      priviouslyReviewed: {
        status: "Yes",
        date: "12 Sep,2024",
      },
      actionTakenBy: {
        name: "Varun Deshpande",
        email: "varun@juno.com",
      },
    },
  ];

  const riskLevelStatus = (userData) => {
    switch (userData.riskLevel) {
      case "High":
        return (
          <div className="flex gap-2 items-center">
            <div className="bg-red-800 h-2 w-2 rounded-full"></div>
            <div className="text-red-800 font-semibold">
              {userData.riskLevel}
            </div>
          </div>
        );
      case "Medium":
        return (
          <div className="flex gap-2 items-center">
            <div className="bg-yellow-700 h-2 w-2 rounded-full"></div>
            <div className="text-yellow-700 font-semibold">
              {userData.riskLevel}
            </div>
          </div>
        );

      case "Low":
        return (
          <div className="flex gap-2 items-center">
            <div className="bg-green-800 h-2 w-2 rounded-full"></div>
            <div className="text-green-800 font-semibold">
              {userData.riskLevel}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="text-left border">
        <thead className="w-full border bg-zinc-100">
          <tr>
            {Data.map((headItm, heading) => {
              return (
                <th
                  key={heading}
                  className="px-2 py-3 w-48 text-sm text-gray-800"
                >
                  <div className="flex items-center gap-2">
                    {isShow ? (
                      <h1> {headItm.status}</h1>
                    ) : (
                      <h1> {headItm.name}</h1>
                    )}
                    <div>
                      <span>{headItm.icon1}</span>
                      <span>{headItm.icon2}</span>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y w-full ">
          {employeeData.map((userData, index) => {
            return (
              <tr key={index} className="">
                <td className="flex justify-between items-center font-semibold px-2 py-3 w-60 mr-8">
                  <div>
                    <h1>{userData.name.userName}</h1>
                    <h2 className="text-xs text-gray-400">
                      {userData.name.userEmail}
                    </h2>
                  </div>
                  <div>{userData.icon}</div>
                </td>
                <td className="px-2 py-3">{riskLevelStatus(userData)}</td>
                <td className="px-2 py-3 font-semibold">
                  {!isShow ? userData.triggerReason : userData.actionReason}
                </td>
                <td className="px-2 py-3 font-medium">{userData.inQueueDay}</td>
                <td className="px-2 py-3 text-gray-400 font-medium text-sm">
                  {userData.date}
                </td>
                <td className="px-2 py-3">
                  {!isShow ? (
                    <>
                      {" "}
                      <h1 className="font-medium">
                        {userData.priviouslyReviewed.status}
                      </h1>
                      <h2 className="text-xs font-semibold text-gray-400">
                        {userData.priviouslyReviewed.date}
                      </h2>
                    </>
                  ) : (
                    <>
                      <h1 className="font-medium">
                        {userData.actionTakenBy.name}
                      </h1>
                      <h2 className="text-xs font-semibold text-gray-400">
                        {userData.actionTakenBy.email}
                      </h2>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
