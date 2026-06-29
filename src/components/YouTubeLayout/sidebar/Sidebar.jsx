import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setActiveQuery } from "../../../redux/Slices/videoSlice";
import {
  AiFillHome,
  AiOutlineFire,
  AiOutlineHistory,
  AiOutlineYoutube,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaMusic,
  FaGamepad,
  FaNewspaper,
  FaTrophy,
  FaYoutube,
  FaYoutubeSquare,
  FaChild,
} from "react-icons/fa";
import {
  MdSubscriptions,
  MdFeedback,
  MdSettings,
  MdHelp,
} from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
const Sidebar = ({ isOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const mainItems = [
    { label: "Home", icon: <AiFillHome /> },
    { label: "Shorts", icon: <AiOutlineFire /> },
    { label: "Subscriptions", icon: <MdSubscriptions /> },
    { label: "You", icon: <AiOutlineUser /> },
    { label: "History", icon: <AiOutlineHistory /> },
  ];

  const exploreItems = [
    { label: "Explore", icon: <AiOutlineYoutube /> },
    { label: "Music", icon: <FaMusic /> },
    { label: "Gaming", icon: <FaGamepad /> },
    { label: "News", icon: <FaNewspaper /> },
    { label: "Sports", icon: <FaTrophy /> },
    { label: "YouTube Premium", icon: <FaYoutube /> },
    { label: "YouTube Music", icon: <FaYoutubeSquare /> },
    { label: "YouTube Kids", icon: <FaChild /> },
  ];

  const secondaryItems = [
    { label: "Settings", icon: <MdSettings /> },
    { label: "Report history", icon: <AiOutlineHistory /> },
    { label: "Help", icon: <MdHelp /> },
    { label: "Send feedback", icon: <MdFeedback /> },
  ];

  const Section = ({ items }) => (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            if (item.label === "Home") {
              dispatch(setActiveQuery(""));
              dispatch(setSearchQuery(""));
            }
          }}
        >
          <span className="text-xl text-gray-700">{item.icon}</span>
          <span
            className={`text-gray-700 font-medium transition-opacity duration-200 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  const dispatch = useDispatch();
  return (
    <aside
      className={`h-full overflow-y-auto scrollbar-hide hidden md:block shadow-md border-r transition-all duration-300 ease-in-out
    ${isOpen ? "w-60" : "w-[75px]"} 
    bg-gray-100 text-gray-700 border-gray-200 
    dark:bg-black dark:text-white dark:border-gray-700`}
    >
      <div className="p-3">
        <Section items={mainItems} />
        {isOpen && (
          <>
            <Section items={exploreItems} />
            <hr className="border-gray-300 my-3" />
            <Section items={secondaryItems} />
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
