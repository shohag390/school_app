import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/image/logp2.png";
import logo2 from "../../assets/image/logo1.png";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { IoClose, IoMenu } from "react-icons/io5";

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
        navbar ? "bg-[#06042e]" : "bg-[#ffffff] shadow-md"
      } flex items-center justify-between md:px-[80px] px-[20px] duration-500 md:h-[10vh] h-[8vh] sticky top-0 left-0 z-50`}
    >
      <Link to={"/"}>
        {navbar ? (
          <img
            className="md:h-[55px] md:w-[180px] w-[130px] h-[40px]"
            src={logo2}
            alt="logo"
          />
        ) : (
          <img
            className="md:h-[55px] md:w-[180px] w-[130px] h-[40px]"
            src={logo1}
            alt="logo"
          />
        )}
      </Link>
      <ul className="md:flex md:items-center md:gap-[40px] hidden">
        {navLink?.map((item, index) => (
          <li
            key={index}
            className={`${
              navbar ? "text-[#ffffff]" : "text-[#06042e]"
            } md:text-[19px] md:font-semibold `}
          >
            <NavLink
              className={(navClass) =>
                navClass?.isActive ? "text-[#ffc224]" : "hover:text-[#ffc224]"
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
                className={`md:h-[45px] md:w-[45px] h-[40px] w-[40px] rounded-full border-[1px] ${
                  navbar ? "border-[#ffffff]" : "border-[#06042e]"
                }`}
                src={user?.photo}
                alt=""
              />
            </Link>
          ) : (
            <Link
              className="md:py-[10px] py-[7px] md:px-[35px] px-[20px] btnNav"
              to={"/login"}
            >
              Login
            </Link>
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`${
            navbar ? "text-[#ffffff]" : "text-[#06042e]"
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
          navbar ? "bg-[#06042e] text-[#ffffff]" : "bg-[#ffffff] text-[#06042e]"
        } w-full h-[92vh] flex flex-col justify-center items-center gap-[20px]`}
      >
        {navLink?.map((item, index) => (
          <li key={index}>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive ? "text-[#ffc224]" : "hover:text-[#ffc224]"
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
