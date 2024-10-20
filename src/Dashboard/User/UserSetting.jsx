import { useEffect, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { toast } from "react-toastify";
import GridLoader from "react-spinners/GridLoader";
import { BASE_URL, token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import AOS from "aos";
import "aos/dist/aos.css";

const UserSetting = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    phone: "",
    bio: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: data?.name,
      email: data?.email,
      occupation: data?.occupation,
      phone: data?.phone,
      bio: data?.bio,
      photo: data?.photo,
    });
  }, [data]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${data._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      setLoading(false);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[18px] text-[#43392d] capitalize pb-[30px]">
        <IoIosSettings className="text-[20px]" />
        <h4>Update Information</h4>
      </div>
      <form
        onSubmit={updateProfileHandler}
        className="h-full flex flex-col gap-[20px] justify-center items-center"
        data-aos="zoom-in-left"
      >
        <input
          className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <input
          className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleInputChange}
          placeholder="Your Email"
        />
        <input
          className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
          type="number"
          name="phone"
          value={formData.phone || ""}
          onChange={handleInputChange}
          placeholder="Phone"
        />
        <input
          className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
          type="text"
          name="occupation"
          value={formData.occupation || ""}
          onChange={handleInputChange}
          placeholder="Occupation"
        />
        <textarea
          placeholder="Bio"
          name="bio"
          value={formData.bio || ""}
          onChange={handleInputChange}
          rows={4}
          className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
        ></textarea>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {formData.photo && (
              <figure className="w-[45px] h-[45px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                  src={formData.photo || null}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </figure>
            )}
            <div className="relative w-[200px] h-[45px]">
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
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#ffffff]  cursor-pointer rounded-md input_shadow py-[8px] px-[20px]  input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              >
                Upload Photo
              </label>
            </div>
          </div>
        </div>

        <div className="w-full">
          <button
            disabled={loading && true}
            type="submit"
            className="btn py-[8px] w-full rounded-md"
          >
            {loading ? (
              <GridLoader size={2} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSetting;
