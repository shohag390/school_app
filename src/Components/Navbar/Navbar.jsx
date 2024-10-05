import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/images/logo.png";

const navLink = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "allcourses",
    display: "Courses",
  },
  {
    path: "blog",
    display: "Blog",
  },
  {
    path: "contacts",
    display: "Contacts",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { user, role, token } = useContext(authContext);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`${
        navbar
          ? "bg-[#f4f5f8] shadow-md border-b-[1px]"
          : "bg-[#ffffff] border-b-[1px]"
      } flex items-center justify-between md:px-[80px] px-[20px] duration-500 md:h-[10vh] h-[8vh] sticky top-0 left-0 z-50`}
    >
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <ul className="md:flex md:items-center md:gap-[40px] hidden">
        {navLink?.map((item, index) => (
          <li
            key={index}
            className={`${
              navbar ? "text-[#272727]" : "text-[#272727]"
            } md:text-[18px] text-[17px] md:font-medium `}
          >
            <NavLink
              className={(navClass) =>
                navClass?.isActive ? "text-[#ffa03a]" : "hover:text-[#ffa03a]"
              }
              to={item?.path}
            >
              {item?.display}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="md:block flex items-center gap-[15px]">
        <div>
          {token && user ? (
            <Link
              to={`${
                role === "admin" ? "/techer/profile/me" : "/users/profile/me"
              }`}
            >
              <img
                className={`md:h-[45px] md:w-[45px] h-[40px] w-[40px] rounded-full border-[2px] ${
                  navbar ? "border-[#ffffff]" : "border-[#272727]"
                }`}
                src={user?.photo}
                alt=""
              />
            </Link>
          ) : (
            <Link
              className="md:py-[8px] py-[7px] md:px-[35px] px-[20px] bg-[#6045ff] text-[#ffffff] font-bold rounded-md hover:bg-[#ffa03a] duration-500"
              to={"/login"}
            >
              Login
            </Link>
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`${
            navbar ? "text-[#272727]" : "text-[#06042e]"
          } md:hidden`}
        >
          {!open ? (
            <IoMenu className="h-[36px] w-[36px]" />
          ) : (
            <IoClose className="h-[36px] w-[36px]" />
          )}
        </button>
      </div>
      <ul
        className={`${
          !open ? "left-[-100%]" : "left-0"
        } md:hidden absolute top-[8vh] duration-500 ${
          navbar ? "bg-[#f4f5f8] text-[#272727]" : "bg-[#ffffff] text-[#272727]"
        } w-full h-[92vh] flex flex-col justify-center items-center gap-[20px]`}
      >
        {navLink?.map((item, index) => (
          <li key={index}>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "text-[#ffa03a] text-[17px]"
                  : "hover:text-[#ffa03a] text-[17px]"
              }
              to={item?.path}
            >
              {item?.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
