import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";

const UploadCourses = () => {
  const [selectFile, setSelectFile] = useState(null);

  const [previewURL, setPreviewURL] = useState("");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    categorie: "",
    description: "",
    duration: "",
    lessons: "",
    quizzes: "",
    photo: selectFile,
    price: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    console.log(file, "Input File");

    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3001/api/course/upload`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      setFormData({
        name: "",
        categorie: "",
        description: "",
        duration: "",
        lessons: "",
        quizzes: "",
        photo: selectFile,
        price: "",
      });
    } catch (err) {
      toast(err.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[#272727] pb-[30px]">
        <IoMdCloudUpload className="text-[20px]" />
        <h4>Upload Courses</h4>
      </div>
      <form
        onSubmit={submitHandler}
        className="w-full flex flex-col gap-[20px]"
      >
        <div className="flex w-full gap-[20px]">
          <div className="flex flex-col gap-[2px] w-[50%]">
            <label className="font-semibold">Course Name*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="text"
              placeholder="Enter your course name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-[2px] w-[50%]">
            <label className="font-semibold">Categorie*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="text"
              placeholder="Categorie"
              name="categorie"
              value={formData.categorie}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex w-full gap-[20px]">
          <div className="flex flex-col gap-[2px] w-[50%]">
            <label className="font-semibold">Course duration*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="text"
              placeholder="month/week"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="flex flex-col gap-[2px] w-[50%]">
            <label className="font-semibold">Certifications*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="text"
              placeholder="Yes/No"
              name="certifications"
              value={formData.certifications}
              onChange={handleInputChange}
            />
          </div> */}
        </div>
        <div className="flex w-full gap-[20px]">
          <div className="flex flex-col gap-[2px] w-[33%]">
            <label className="font-semibold">Lessons*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="number"
              placeholder="Lessons"
              name="lessons"
              value={formData.lessons}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-[2px] w-[33%]">
            <label className="font-semibold">Quizzes*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="number"
              placeholder="Quizzes No"
              name="quizzes"
              value={formData.quizzes}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-[2px] w-[33%]">
            <label className="font-semibold">Course Price*</label>
            <input
              required
              className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
              type="number"
              placeholder="Course Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {selectFile && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={previewURL}
                className="w-full h-full rounded-full"
                alt="image"
              />
            </figure>
          )}
          <div className="relative w-[200px] h-[100px]">
            <input
              required
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg,.png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 flex flex-col items-center justify-center bg-[#ffffff] w-full h-full overflow-hidden border-[1px] focus:outline-none border-[#49088A] rounded-md"
            >
              <IoMdCloudUpload className="text-[50px]" />
              <span>Click & Choose Photo</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-[2px] w-full">
          <label className="font-semibold">Description*</label>
          <textarea
            required
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="py-[6px] border-[1px] focus:outline-none border-[#49088A] px-[20px] rounded-md"
            placeholder="Course Description"
          />
        </div>
        <div>
          <button disabled={loading && true} type="submit" className="">
            {loading ? (
              <HashLoader size={10} color="#ffffff" />
            ) : (
              "Upload Course"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadCourses;
