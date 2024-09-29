import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../config.js";
import { toast } from "react-toastify";
import { authContext } from "../../../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="md:h-[90vh] w-full md:px-[80px] bg-[#efebf9] px-[20px] flex items-center justify-center">
      <div className="h-[70vh] w-[80%] border-[2px] rounded-md flex items-center justify-between">
        <div className="w-1/2 h-full bg-[#5751e1] text-[#ffffff] flex items-center justify-center flex-col px-[30px] py-[50px]">
          <h1 className="md:text-[30px] text-[25px] font-[700] md:leading-[45px] leading-[35px] text-[#ffffff] capitalize">
            Welcome to login!
          </h1>
          <p>Don't have an account ?</p>
          <Link
            to={"/signup"}
            className="btnThree py-[8px] px-[30px] mt-[15px]"
          >
            Sign up
          </Link>
        </div>

        <form
          onSubmit={submitHandler}
          className="w-1/2 h-full bg-[#ffffff] flex flex-col items-center justify-center px-[30px] gap-[20px]"
          action=""
        >
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />

          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />

          <div className="w-full">
            <button
              disabled={loading && true}
              type="submit"
              className="btnOne py-[8px] w-full rounded-[8px]"
            >
              {loading ? <HashLoader size={18} color="#ffffff" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
