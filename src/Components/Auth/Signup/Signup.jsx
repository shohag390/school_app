import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../../utils/uploadCloudinary";
import { BASE_URL } from "../../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  // photo name email password phone occupation bio role

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    occupation: "",
    bio: "",
    photo: selectFile,
    role: "student",
  });
  console.log(formData);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.err(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-[30px] md:px-[80px] bg-[#efebf9] px-[20px] flex items-center justify-center">
      <div className="h-[100vh] w-[90%] border-[2px] rounded-md flex items-center justify-between">
        <div className="w-1/2 h-full bg-[#5751e1] text-[#ffffff] flex items-center justify-center flex-col px-[30px] py-[50px]">
          <h1 className="md:text-[30px] text-[25px] font-[700] md:leading-[45px] leading-[35px] text-[#ffffff] capitalize">
            Join SkillGro !
          </h1>
          <p>Already have an account ?</p>
          <Link to={"/login"} className="btnThree py-[8px] px-[30px] mt-[15px]">
            Login
          </Link>
        </div>

        <form
          onSubmit={submitHandler}
          className="w-1/2 h-full bg-[#ffffff] flex flex-col gap-[20px] px-[30px] justify-center items-center"
          action=""
        >
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            placeholder="Occupation"
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            role="2"
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none "
          ></textarea>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              {selectFile && (
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={previewURL}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </figure>
              )}
              <div className="relative w-[130px] h-[50px]">
                <input
                  type="file"
                  name="photo"
                  id="customFile"
                  onChange={handleFileInputChange}
                  accept=".jpg,.png"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="customFile"
                  className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#efebf9] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                >
                  Upload Photo
                </label>
              </div>
            </div>

            <div>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
              >
                <option value="student">student</option>
                <option value="admin">techer</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <button type="submit" className="rounded-[8px] py-[8px] w-full">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
