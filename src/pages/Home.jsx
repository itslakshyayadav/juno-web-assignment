import { Link, Outlet } from "react-router-dom";
export default function Home() {
  const menuData = [
    { name: "Overview", path: "/overview" },
    { name: "Onboarding" },
    { name: "Monitoring", path: "monitoring" },
    { name: "Flagging" },
    { name: "Sorce of Income" },
    { name: "UAR" },
  ];

  return (
    <div className="flex divide-x-2">
      <section className="w-72 flex flex-col h-screen shrink-0 justify-between px-5">
        <div className="flex flex-col  px-5 gap-14 py-10">
          <h1 className=" border-t-2 border-t-gray-400 border-b-2 border-b-gray-400 py-3 text-center text-3xl text-gray-400 font-normal">
            LOGO HERE
          </h1>
          <ul className="flex flex-col gap-4 ">
            {menuData.map((items, index) => {
              return (
                <Link to={items.path} key={index}>
                  <li className="text-base px-3 py-2 hover:bg-indigo-200 text-gray-500 font-medium hover:text-blue-800 rounded-md">
                    {items.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-3 px-5 py-5">
          <img
            src="src/assets/ElonMusk.jpg"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col ">
            <h2 className="font-semibold">Elon Musk</h2>
            <p className="text-gray-500">elon@twitter.com</p>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-5 px-10 py-8 w-full">
        <Outlet></Outlet>
      </section>
    </div>
  );
}
