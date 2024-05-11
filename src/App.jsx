import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaDownload } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "./App.css";

function App() {
  const [active, setActive] = useState(true);
  const [sidebarActive, setSidebarActive] = useState(true);

  const events = [
    {
      title: "hackathon1",
      college: "college1",
      date: "30/04/2024",
      noCerti: "30",
      link: "https://pindown.app/docs/43e214fsfd",
    },
    {
      title: "hackathon2",
      college: "college2",
      date: "01/05/2024",
      noCerti: "27",
      link: "https://pindown.app/docs/43e214fsfe",
    },
    {
      title: "hackathon3",
      college: "college3",
      date: "10/05/2024",
      noCerti: "40",
      link: "https://pindown.app/docs/43e214fsff",
    },
    {
      title: "hackathon4",
      college: "college4",
      date: "15/05/2024",
      noCerti: "35",
      link: "https://pindown.app/docs/43e213fsff",
    },
    {
      title: "hackathon5",
      college: "college5",
      date: "20/05/2024",
      noCerti: "25",
      link: "https://pindown.app/docs/43e215fsff",
    },
  ];

  return (
    <section className=" dashboard grid grid-cols-12 min-h-dvh h-fit w-dvw">
      <div
        className={`${
          sidebarActive ? "sidebar" : "sidebar-active"
        } grid grid-rows-12 gap-1 col-auto md:col-span-2 border-r-2 border-slate-500`}
      >
        <div className=" row-span-1 border-b-2 border-slate-500 flex items-center justify-center">
          <h1 className=" font-semibold text-2xl 3d:text-3xl">Pindown Logo</h1>
        </div>
        <div className=" row-span-9 border-b-2 border-slate-500">
          <ul className=" flex flex-col gap-3 w-full h-full p-3">
            <li className=" text-xl">My Docs</li>
            <li className=" text-xl">Events/Batches</li>
            <li className=" text-xl">Create Template</li>
            <li className=" text-xl">Pricing</li>
            <li className=" text-xl">Settings</li>
            <li className=" text-xl">Image Gallery</li>
          </ul>
        </div>
        <div className=" row-span-2 w-full h-full flex flex-col items-center justify-evenly py-5">
          <h2 className=" text-2xl">abcd@gmail.com</h2>
          <p className=" text-sm">Terms and Conditions</p>
          <p className=" text-xs">Privacy Policy</p>
        </div>
        <FaGripLinesVertical
          onClick={() => {
            setSidebarActive(!sidebarActive);
          }}
          className={`${
            sidebarActive ? "ver-line" : "ver"
          }  absolute right-0 top-1/2`}
        />
        <FaXmark
          onClick={() => {
            setSidebarActive(!sidebarActive);
          }}
          className={`${
            sidebarActive ? "close-mark" : "close"
          }  absolute right-0 top-1/2`}
        />
      </div>
      <div className=" w-full h-full grid grid-rows-12 gap-1 col-span-12 md:col-span-10">
        <div className=" top-nav row-span-1 grid grid-cols-8 border-b-2 border-slate-500 px-4 relative">
          <div className=" col-span-4 md:col-span-4 flex items-center justify-start">
            <h1 className=" font-medium text-2xl">Dashboard</h1>
          </div>
          <div className="col-span-1 md:col-span-2"></div>
          <div className=" col-span-3 md:col-span-2">
            <ul className=" w-full h-full flex flex-row items-center justify-evenly gap-3">
              <li className=" h-full w-full flex items-center justify-center text-base cursor-pointer">
                <FaDownload />
              </li>
              <li className=" h-full w-full flex items-center justify-center text-base cursor-pointer">
                <FiMessageSquare />
              </li>
              <li className=" h-full w-full flex items-center justify-center text-base cursor-pointer">
                <FaBell />
              </li>
              <li
                className=" h-full w-full flex items-center justify-center text-2xl cursor-pointer"
                onClick={() => setActive(!active)}
              >
                <FaUserCircle />
              </li>
            </ul>
          </div>
        </div>
        <div
          className={` absolute right-10 rounded-xl border-2 border-slate-500 w-60 h-40 flex flex-col items-start justify-evenly ${
            active ? "profile-dropdown" : "profile-dropdown-active"
          }`}
        >
          <div className=" w-full h-full flex items-center justify-start px-4 border-b-2 border-slate-400 cursor-pointer">
            <p className=" text-base hover:scale-110 transition-all ease-in-out">
              Public Profile
            </p>
          </div>
          <div className=" w-full h-full flex items-center justify-start px-4 border-b-2 border-slate-400 cursor-pointer">
            <p className=" text-base hover:scale-110 transition-all ease-in-out">
              Logout
            </p>
          </div>
          <div className=" w-full h-full flex items-center justify-start px-4 cursor-pointer">
            <p className=" text-base hover:scale-110 transition-all ease-in-out">
              Preferences
            </p>
          </div>
        </div>
        <div className=" row-span-11 md:py-10 px-7 grid grid-rows-6 md:grid-rows-3 gap-8">
          <div className=" row-span-2 md:row-span-1 grid grid-cols-7 gap-3">
            <div className=" col-span-3 border-2 border-slate-500 rounded-xl p-2 md:p-8 flex flex-col items-start justify-around h-3/4 md:h-full">
              <h4 className=" text-base md:text-2xl">
                Manage your docs seamlessly
              </h4>
              <button className=" w-fit h-fit border-2 border-slate-500 rounded-lg md:py-1 px-2 md:px-4">
                Try free now
              </button>
            </div>
            <div className=" col-span-2 border-2 border-slate-500 rounded-xl p-2 md:p-8 flex flex-col items-start justify-around h-3/4 md:h-full">
              <h4 className=" text-lg md:text-2xl">Total Batches</h4>
              <p className=" text-2xl md:text-5xl font-semibold">4</p>
            </div>
            <div className=" col-span-2 border-2 border-slate-500 rounded-xl p-2 md:p-8 flex flex-col items-start justify-around h-3/4 md:h-full">
              <h4 className=" text-lg md:text-2xl">Total Docs Dropped</h4>
              <p className=" text-2xl md:text-5xl font-semibold">135</p>
            </div>
          </div>
          <div className=" row-span-4 md:row-span-2 border-2 border-slate-500 rounded-lg grid grid-rows-6">
            <div className=" row-span-1 flex items-center justify-start p-3 text-2xl font-semibold border-b-2 border-slate-500">
              Recent Events
            </div>
            <div
              className={` event-container row-span-5 grid grid-rows-${events.length} gap-3 px-2 py-4`}
            >
              {events.map((eventlist, index) => (
                <div
                  key={index}
                  className=" events grid grid-cols-12 gap-2 items-center px-2"
                >
                  <input
                    type="checkbox"
                    name={`checkbox-${index}`}
                    id={`checkbox-${index}`}
                    className=" col-span-1 w-5 h-5"
                  />
                  <p className=" col-span-2">{eventlist.title}</p>
                  <p className=" col-span-3">{eventlist.college}</p>
                  <p className=" col-span-2">{eventlist.date}</p>
                  <p className=" col-span-1">{eventlist.noCerti}</p>
                  <p className=" col-span-3">
                    <a href={eventlist.link}>{eventlist.link}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
