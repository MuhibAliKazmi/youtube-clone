import { CgProfile } from "react-icons/cg";
import { IoLanguage } from "react-icons/io5";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { MdFeedback } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
const ProfileMenu = ({ onSignOut }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="absolute right-4 top-14 w-60 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 text-gray-800 text-sm z-50">
      <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
        <CgProfile className="text-4xl text-gray-500" />
        <div>
          <p className="font-semibold text-gray-900">{user}</p>
          <p className="text-gray-500 text-xs">@ {user}</p>
          <button className="mt-1 text-blue-600 text-xs font-medium hover:underline">
            View your channel
          </button>
        </div>
      </div>

      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Google Account
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Switch account
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={onSignOut}
        >
          Sign out
        </li>
        <hr className="my-2" />
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          YouTube Studio
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Purchases and memberships
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Your data in YouTube
        </li>
        <hr className="my-2" />
        <li
          onClick={toggleTheme}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
        >
          <span>Appearance: {theme === "dark" ? "Dark" : "Light"}</span>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
          <span>Language: English</span> <IoLanguage />
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Restricted Mode: Off
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Location: Pakistan
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Keyboard shortcuts
        </li>
        <hr className="my-2" />
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FiSettings /> <span>Settings</span>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FiHelpCircle /> <span>Help</span>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <MdFeedback /> <span>Send feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
