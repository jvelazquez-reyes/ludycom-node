import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import locals
import {
  updateWorkplace,
} from "../../redux/actions/workplace";
import Loader from "../Layout/Loader";
import { useForm } from "react-hook-form";

const WorkplaceUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { workplace, workplaceLoading } = useSelector(
    (state) => state.workplace || {}
  );

  const filteredWorkplace = workplace.filter((workplace) => {
   return workplace.id.toString() === id;
  });

  // Populate input fields with existing workplace for update
  const [code, setCode] = useState(
    filteredWorkplace && filteredWorkplace[0].code
  );

  const [name, setName] = useState(
    filteredWorkplace && filteredWorkplace[0].name
  );

  const [manager, setManager] = useState(
    filteredWorkplace && filteredWorkplace[0].manager
  );

  const [status, setStatus] = useState(
    filteredWorkplace && filteredWorkplace[0].status
  );

  const dispatch = useDispatch();

  // Update workplace
  const handleUpdate = async (data, e) => {
    e.preventDefault();

    dispatch(updateWorkplace(code, name, manager, status, id));

    navigate("/workplaces/all-workplaces")    
  };

  // Hook form input field validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    code: { 
      required: "This field is required",
      maxLength: 2 },
    name: { 
      required: "This field is required",
      maxLength: 50 },
    manager: {
      required: "Required",
      maxLength: 7 },
    status: { 
      required: "This field is required",
      maxLength: 1 },
    }

  return (
    <>
      {workplaceLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 bg-white">
          <h5 className="text-[30px] font-Poppins text-center">
            Update workplace
          </h5>
          {/* update workplace */}
          <form onSubmit={handleSubmit(handleUpdate)}>
            <br />
            <div>
              <label className="pb-2">
                Code <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="code"
                {...register("code", registerOptions.code)}
                value={code}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code"
              />
              {errors.code && errors.code.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.code && errors.code.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", registerOptions.name)}
                value={name}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.name && errors.name.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Manager
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="manager"
                {...register("manager", registerOptions.manager)}
                value={manager}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setManager(e.target.value)}
                placeholder="Manager"
              />
              {errors.manager && errors.manager.type === "maxLength" && <span>Max length exceeded</span>}
              {errors?.manager && errors.manager.message}
            </div>
            <br />
            <div>
              <label className="pb-2">
                Status (1 = Active, 0 = Inactive)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
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

export default WorkplaceUpdate;