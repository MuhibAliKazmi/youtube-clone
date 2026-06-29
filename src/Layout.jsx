import Header from "./components/YouTubeLayout/header/Header";
import Sidebar from "./components/YouTubeLayout/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("/watch")) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen w-full">
      <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex flex-1 overflow-hidden w-full h-screen">
        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 w-full overflow-y-auto overflow-x-hidden bg-gray-100 px-4 pb-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
