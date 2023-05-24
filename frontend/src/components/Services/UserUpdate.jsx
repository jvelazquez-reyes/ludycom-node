import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// import locals
import {
  updateUser,
} from "../../redux/actions/users";
import Loader from "../Layout/Loader";


const UserUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, usersLoading } = useSelector(
    (state) => state.users || {}
  );

  const filteredUser = users.filter((user) => {
   return user.id.toString() === id;
  });

  const [names, setNames] = useState(
    filteredUser && filteredUser[0].names
  );
  const [surnames, setSurnames] = useState(
    filteredUser && filteredUser[0].surnames
  );

  const [birthdate, setBirthdate] = useState(
    filteredUser && filteredUser[0].birthdate
  );

  const [email, setEmail] = useState(
    filteredUser && filteredUser[0].email
  );

  const [document, setDocument] = useState(
    filteredUser && filteredUser[0].document
  );

  const [code, setCode] = useState(
    filteredUser && filteredUser[0].code
  );

  const [salary, setSalary] = useState(
    filteredUser && filteredUser[0].salary
  );

  const [status, setStatus] = useState(
    filteredUser && filteredUser[0].status
  );

  const dispatch = useDispatch();

  const handleUpdate = async (data, e) => {
    e.preventDefault();

    dispatch(updateUser(names, surnames, email, id));

    navigate("/users/all-users")    
  };

  // Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    names: { 
      required: "This field is required",
      maxLength: 50 },
    surnames: { 
      required: "This field is required",
      maxLength: 50 },
    birthdate: { 
      required: "This field is required",
      pattern: {
        value: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/i,
        message: "Enter a date in the format yyyy-mm-dd" }},
    email: {
      required: "Required",
      maxLength: 50,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      }},
    document: { 
      required: "This field is required",
      maxLength: 7 },
    code: { 
      required: "This field is required",
      maxLength: 2 },
    salary: { 
      required: "This field is required" },
    status: { 
      required: "This field is required",
      maxLength: 1 },
    }

  return (
    <>
      {usersLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 bg-white">
          <h5 className="text-[30px] font-Poppins text-center">
            Update user
          </h5>
          {/* update user */}
          <form onSubmit={handleSubmit(handleUpdate)}>
            <br />
            <div>
              <label className="pb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="names"
                {...register("names", registerOptions.names)}
                value={names}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setNames(e.target.value)}
                placeholder="Names"
              />
              {errors.names && errors.names.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.names && errors.names.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Surname
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="surnames"
                {...register("surnames", registerOptions.surnames)}
                value={surnames}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setSurnames(e.target.value)}
                placeholder="Surname"
              />
              {errors?.surnames && errors.surnames.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Date of birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="birthdate"
                {...register("birthdate", registerOptions.birthdate)}
                value={birthdate}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="Date of birth"
              />
              {errors.birthdate && errors.birthdate.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.birthdate && errors.birthdate.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Email
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", registerOptions.email)}
                value={email}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {errors?.email && errors.email.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Document number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="document"
                {...register("document", registerOptions.document)}
                value={document}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDocument(e.target.value)}
                placeholder="Document number"
              />
              {errors.document && errors.document.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.document && errors.document.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Area code <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="code"
                {...register("code", registerOptions.code)}
                value={code}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setCode(e.target.value)}
                placeholder="Area code"
              />
              {errors.code && errors.code.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.code && errors.code.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Salary <span className="text-red-500">*</span>
              </label>
              <input
                name="salary"
                {...register("salary", registerOptions.salary)}
                value={salary}
                type="number"
                step="0.01"
                min="0.00"
                max="9999999999.99"
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setSalary(e.target.value)}
                placeholder="salary"
              />
              {errors.salary && errors.salary.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.salary && errors.salary.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Status (1 = Active, 0 = Inactive) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="status"
                {...register("status", registerOptions.status)}
                value={status}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
              />
              {errors.status && errors.status.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.status && errors.status.message}
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Update"
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UserUpdate;
