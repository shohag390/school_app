import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_image from "../../../assets/images/shape-bg.png";
import { BASE_URL } from "../../../config.js";
import { toast } from "react-toastify";
import { authContext } from "../../../context/AuthContext.jsx";
import GridLoader from "react-spinners/GridLoader";

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
    <div className="md:px-[80px] px-[20px] md:py-[40px] py-[25px] md:flex md:justify-between">
      <div className="bg-[#6045ff] md:h-[80vh] w-full md:flex md:items-center md:justify-center hidden">
        <img className="h-[70vh]" src={login_image} alt="" />
      </div>
      <div className="bg-[#f4f5f8] md:h-[80vh] w-full flex flex-col items-center justify-center md:py-0 py-[25px] md:rounded-none rounded-md">
        <div className="pb-[30px]">
          <h4 className="font-[700] text-[30px]">Let's Sign In Eduxo</h4>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full items-center justify-center md:px-[100px] px-[20px] md:gap-[20px] gap-[15px]"
          action=""
        >
          <input
            className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />

          <input
            className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
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
              className="btn py-[10px] rounded-md w-full lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#ffff] lg:font-semibold md:font-medium font-normal"
            >
              {loading ? <GridLoader size={2} color="#ffffff" /> : "Login"}
            </button>
          </div>
        </form>
        <p className="text-[#43392d] md:text-[18px] text-[17px] md:font-medium md:pt-[25px] pt-[20px] capitalize">
          Don't have account?{" "}
          <Link className="text-[#6045ff] hover:text-[#ffa03a]" to={"/signup"}>
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
