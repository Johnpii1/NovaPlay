import { useEffect, useRef, useState } from "react";
import { FaBell, FaSearch, FaUser, FaBars } from "react-icons/fa";

export default function Navbar() {

  const [showSearch, setShowSearch] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowSearch(false);
        setShowNotification(false);
        setShowProfile(false);
        setShowMenu(false);
      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (

    <div
      ref={dropdownRef}
      className="flex justify-between items-center gap-5 p-5 bg-[#0F172A] text-white relative"
    >

      {/* LOGO */}
      <div>
        <h2 className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
          ▶ NovaPlay
        </h2>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden letter md:flex flex-row gap-[5rem] text-gray-400 cursor-pointer font-semibold">

        <span className="hover:text-[#8B5CF6] hover:underline">
          Home
        </span>

        <span className="hover:text-[#8B5CF6] hover:underline">
          Movies
        </span>

        <span className="hover:text-[#8B5CF6] hover:underline">
          TV Shows
        </span>

        <span className="hover:text-[#8B5CF6] hover:underline">
          New
        </span>

        <span className="hover:text-[#8B5CF6] hover:underline">
          My List
        </span>

      </div>

      {/* DESKTOP ICONS */}
      <div className="hidden md:flex flex-row gap-[1rem] text-[1rem] cursor-pointer">

        {/* NOTIFICATION */}
        <div className="relative">

          <span
            onClick={() => {
              setShowNotification(!showNotification);
              setShowSearch(false);
              setShowProfile(false);
            }}
            className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
          >
            <FaBell />
          </span>

          {showNotification && (

            <div className="absolute right-0 top-10 w-56 bg-[#111827] border border-zinc-700 rounded-lg p-4">

              <p className="text-sm text-gray-300">
                🔥 New movie added
              </p>

            </div>

          )}

        </div>

        {/* SEARCH */}
        <div className="relative">

          <span
            onClick={() => {
              setShowSearch(!showSearch);
              setShowNotification(false);
              setShowProfile(false);
            }}
            className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
          >
            <FaSearch />
          </span>

          {showSearch && (

            <div className="absolute right-0 top-10">

              <input
                type="text"
                placeholder="Search movies..."
                className="bg-[#111827] border border-zinc-700 px-4 py-2 rounded-lg outline-none text-white"
              />

            </div>

          )}

        </div>

        {/* PROFILE */}
        <div className="relative">

          <span
            onClick={() => {
              setShowProfile(!showProfile);
              setShowSearch(false);
              setShowNotification(false);
            }}
            className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
          >
            <FaUser />
          </span>

          {showProfile && (

            <div className="absolute right-0 top-10 w-40 bg-[#111827] border border-zinc-700 rounded-lg p-4 flex flex-col gap-3">

              <span className="hover:text-[#8B5CF6] cursor-pointer">
                Profile
              </span>

              <span className="hover:text-[#8B5CF6] cursor-pointer">
                Settings
              </span>

              <span className="text-red-400 cursor-pointer">
                Logout
              </span>

            </div>

          )}

        </div>

      </div>

      {/* MOBILE MENU BAR */}
      <div className="flex flex-row gap-[1rem] cursor-pointer md:hidden">

        {/* SEARCH */}
        <div className="relative">

          <FaSearch
            onClick={() => {
              setShowSearch(!showSearch);
              setShowNotification(false);
              setShowProfile(false);
              setShowMenu(false);
            }}
            className="hover:text-[#8B5CF6]"
          />

          {showSearch && (

            <div className="absolute right-0 top-10">

              <input
                type="text"
                placeholder="Search movies..."
                className="bg-[#111827] border border-zinc-700 px-4 py-2 rounded-lg outline-none text-white"
              />

            </div>

          )}

        </div>

        {/* NOTIFICATION */}
        <div className="relative">

          <FaBell
            onClick={() => {
              setShowNotification(!showNotification);
              setShowSearch(false);
              setShowProfile(false);
              setShowMenu(false);
            }}
            className="hover:text-[#8B5CF6]"
          />

          {showNotification && (

            <div className="absolute right-0 top-10 w-56 bg-[#111827] border border-zinc-700 rounded-lg p-4">

              <p className="text-sm text-gray-300">
                🔥 New movie added
              </p>

            </div>

          )}

        </div>

        {/* PROFILE */}
        <div className="relative">

          <FaUser
            onClick={() => {
              setShowProfile(!showProfile);
              setShowSearch(false);
              setShowNotification(false);
              setShowMenu(false);
            }}
            className="hover:text-[#8B5CF6]"
          />

          {showProfile && (

            <div className="absolute right-0 top-10 w-40 bg-[#111827] border border-zinc-700 rounded-lg p-4 flex flex-col gap-3">

              <span>Profile</span>

              <span>Settings</span>

              <span className="text-red-400">
                Logout
              </span>

            </div>

          )}

        </div>

        {/* SIDEBAR */}
        <div>

          <FaBars
            onClick={() => {
              setShowMenu(!showMenu);
              setShowSearch(false);
              setShowNotification(false);
              setShowProfile(false);
            }}
            className="hover:text-[#8B5CF6]"
          />

          {showMenu && (

            <div className="fixed top-0 right-0 w-[250px] h-screen bg-[#111827] p-6 z-50 flex flex-col justify-between text-gray-300 overflow-y-auto">

              {/* TOP */}
              <div className="letter text-[1.1rem] flex flex-col gap-8">

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setShowMenu(false)}
                  className="self-end text-xl hover:text-red-400 transition-all duration-300"
                >
                  ✕
                </button>

                <span className="hover:text-[#8B5CF6] cursor-pointer">
                  Home
                </span>

                <span className="hover:text-[#8B5CF6] cursor-pointer">
                  Movies
                </span>

                <span className="hover:text-[#8B5CF6] cursor-pointer">
                  TV Shows
                </span>

                <span className="hover:text-[#8B5CF6] cursor-pointer">
                  New
                </span>

                <span className="hover:text-[#8B5CF6] cursor-pointer">
                  My List
                </span>

              </div>

              {/* BOTTOM */}
              <div className="letter text-[1.1rem] flex flex-col gap-4 mb-14">
<button className="py-2 rounded-lg hover:text-[#8B5CF6] transition-all duration-300">
                  Settings
                </button>

                <button className="bg-[#8B5CF6] py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">
                  Sign In
                </button>

                
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}