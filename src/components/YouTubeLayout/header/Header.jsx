import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaVideo, FaBell, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {
  setSearchQuery,
  setActiveQuery,
} from "../../../redux/Slices/videoSlice";
import SearchBar from "./search/SearchBar";
import ProfileMenu from "../header/profilemenu/ProfileMenu";

const Header = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videos = useSelector((state) => state.videos.items);
  const searchQuery = useSelector((state) => state.videos.searchQuery);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSelect = (query) => {
    dispatch(setSearchQuery(query));
    dispatch(setActiveQuery(query));
    navigate("/", { replace: false });
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <header className="px-4 flex items-center justify-between p-0 sm:px-4 py-2 bg-white  shadow-md w-full z-50">
      <div className="flex items-center gap-2">
        <FaBars
          onClick={toggleSidebar}
          className="text-2xl cursor-pointer h-5"
        />
        <Link to="/">
          <img
            onClick={() => {
              dispatch(setActiveQuery(""));
              dispatch(setSearchQuery(""));
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-5 cursor-pointer"
          />
        </Link>
      </div>

      <SearchBar
        videos={videos}
        searchQuery={searchQuery}
        onSearchSelect={handleSelect}
        setSearchQuery={(q) => dispatch(setSearchQuery(q))}
      />

      <div className="flex items-center gap-3 sm:gap-6 text-2xl text-gray-700">
        <FaVideo className="cursor-pointer w-5 hidden sm:flex" />
        <FaBell className="cursor-pointer w-5" />
        <CgProfile
          className="cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        {openMenu && <ProfileMenu onSignOut={handleSignOut} />}
      </div>
    </header>
  );
};

export default Header;
