import { Outlet } from "react-router-dom";

import SideBar from "@/layouts/SideBar";

const MainLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="flex fixed z-40 bg-white w-64">
          <SideBar />
        </div>
        <div className="ml-64 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
