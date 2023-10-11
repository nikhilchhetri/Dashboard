import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const NavButton = ({ title, custoFunc, color, dotColor, icon }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        style={{ color }}
        onClick={custoFunc}
        className="relative p-3 rounded-full hover:bg-light-gray text-xl">
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex h-2 w-2 right-2 top-2 rounded-full"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between relative md:mx-6 p-2">
      <NavButton
        title="Menu"
        custoFunc={() => {
          setActiveMenu(!activeMenu);
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          custoFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          custoFunc={() => handleClick("chat")}
          color="blue"
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          custoFunc={() => handleClick("notification")}
          color="blue"
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}>
            <img src={avatar} alt="profile" className="rounded-full h-8 w-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 text-14 font-bold ml-1">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
