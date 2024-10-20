import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../../utils/uploadCloudinary";
import { BASE_URL } from "../../../config";
import login_image from "../../../assets/images/signup-2.png";
import { toast } from "react-toastify";
import GridLoader from "react-spinners/GridLoader";

const Signup = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="md:px-[80px] px-[20px] md:py-[40px] py-[25px] md:flex md:justify-between">
      <div className="bg-[#6045ff] md:h-[87vh] w-full md:flex md:items-center md:justify-center hidden">
        <img className="h-[75vh]" src={login_image} alt="" />
      </div>
      <div className="bg-[#f4f5f8] md:h-[87vh] w-full flex flex-col items-center justify-center md:py-0 py-[25px] md:rounded-none rounded-md">
        <div className="pb-[20px]">
          <h4 className="font-[700] text-[30px]">Let's Sign Up Eduxo</h4>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full items-center justify-center md:px-[60px] px-[20px] gap-[15px]"
          action=""
        >
          <input
            className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
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
          <div className="flex items-center justify-between w-full gap-[15px]">
            <input
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
            />
            <input
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              placeholder="Occupation"
              required
            />
          </div>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows={2}
            placeholder="Bio"
            required
            className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
          ></textarea>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              {selectFile && (
                <figure className="w-[45px] h-[45px] rounded-full border-[1px] border-[#272727] flex items-center justify-center">
                  <img
                    src={previewURL}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </figure>
              )}
              <div className="relative w-[200px] h-[45px]">
                <input
                  type="file"
                  required
                  name="photo"
                  id="customFile"
                  onChange={handleFileInputChange}
                  accept=".jpg,.png"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="customFile"
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#ffffff]  cursor-pointer rounded-md input_shadow py-[8px] px-[20px]  input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
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
                className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              >
                <option value="student">student</option>
                <option value="admin">techer</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <button
              disabled={loading && true}
              type="submit"
              className="btn py-[10px] rounded-md w-full lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#ffff] lg:font-semibold md:font-medium font-normal"
            >
              {loading ? <GridLoader size={2} color="#ffffff" /> : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="text-[#43392d] md:text-[18px] text-[17px] md:font-medium pt-[20px] capitalize">
          Don't have account?{" "}
          <Link className="text-[#6045ff] hover:text-[#ffa03a]" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

{
  /* ; */
}
