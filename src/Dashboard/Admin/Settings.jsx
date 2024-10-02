import { useEffect, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { BASE_URL, token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";

const Settings = ({ data }) => {
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
      const res = await fetch(`${BASE_URL}/instactor/${data._id}`, {
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

  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[#272727] pb-[30px]">
        <IoIosSettings className="text-[20px]" />
        <h4>Update Information</h4>
      </div>
      <form
        onSubmit={updateProfileHandler}
        className="h-full flex flex-col gap-[20px] justify-center items-center"
        action=""
      >
        <input
          className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <input
          className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleInputChange}
          placeholder="Your Email"
        />
        <input
          className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
          type="number"
          name="phone"
          value={formData.phone || ""}
          onChange={handleInputChange}
          placeholder="Phone"
        />
        <input
          className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
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
          className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none "
        ></textarea>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {formData.photo && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                  src={formData.photo || null}
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
        </div>

        <div className="w-full">
          <button
            disabled={loading && true}
            type="submit"
            className="btnOne w-full py-[10px]"
          >
            {loading ? (
              <HashLoader size={18} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
