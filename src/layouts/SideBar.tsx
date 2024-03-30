import { useLocation, useNavigate } from "react-router-dom";

// icons
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menus = [
    {
      id: 0,
      icon: <img src="/risks.svg" width="25" height="25" />,
      label: "John Adams Doe",
      path: "/",
    },
    {
      id: 1,
      icon: <img src="/group.svg" width="25" height="25" />,
      label: "9:29am - April 3rd, 2024",
      path: "/history?id=32897948",
    },
    {
      id: 2,
      icon: <img src="/contact.svg" width="25" height="25" />,
      label: "2:49pm - April 1st, 2024",
      path: "/history?id=4583098",
    },
  ];

  const onClickMenu = (menuId: number) => {
    navigate(menus[menuId].path);
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-black/10 border-black/10 border-r-[1px] flex-1 flex flex-col justify-between py-4">
        <div className="mx-5">
          <div className="mb-8">
            <span className="text-xl bg-custom-purple rounded-xl px-4 py-2 flex items-center justify-between text-white">
              + New Search
              <FaRegEdit />
            </span>
          </div>
          <div className="overflow-auto">
            {menus.map((menu) => {
              return (
                <div
                  key={menu.id}
                  onClick={() => onClickMenu(menu.id)}
                  className={`w-full cursor-pointer py-2 px-2 flex items-center gap-2 hover:text-custom-purple/80 ${
                    pathname == menu.path ? "text-custom-purple/80" : ""
                  }`}
                >
                  {menu.icon}
                  <span className="text-sm">{menu.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="bg-black/10 h-[1px]" />
          <div className="mx-5 my-4">
            <div
              className={`w-full cursor-pointer py-2 px-2 flex items-center gap-2 hover:text-custom-purple/80`}
            >
              <AiOutlineUser className="w-6 h-6" />
              <span className="text-sm">My Account</span>
            </div>
            <div
              className={`w-full cursor-pointer py-2 px-2 flex items-center gap-2 hover:text-custom-purple/80`}
            >
              <MdLogout className="w-6 h-6" />
              <span className="text-sm">Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
