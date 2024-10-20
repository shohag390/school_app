import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Components/Contacts/Contacts";
import Courses from "../Components/Courses/Courses";
import CoursesDtls from "../Components/Courses/CoursesDtls";
import EnrollPay from "../Components/Courses/EnrollPay";
import Signup from "../Components/Auth/Signup/Signup";
import Login from "../Components/Auth/Login/Login";
import About from "../Components/About/About";
import AllCourse from "../Components/Courses/AllCourse";
import ProtectedRoute from "./ProtectedRoute";
import UserAccount from "../Dashboard/User/UserAccount";
import AdminAccount from "../Dashboard/Admin/AdminAccount";
import HomeBlogs from "../Components/Blog/HomeBlogs";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/allcourses" element={<AllCourse />} />
      <Route path="/courses/:id" element={<CoursesDtls />} />
      <Route path="/payenroll" element={<EnrollPay />} />
      <Route path="/blog" element={<HomeBlogs />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <UserAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/techer/profile/me"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
