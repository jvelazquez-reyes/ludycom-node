import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

// import locals
import { deleteUser, getUsers } from "../../redux/actions/users";
import Loader from "../Layout/Loader";
import styles from "../../styles/styles";

const AllUsers = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  const { users, usersLoading } = useSelector((state) => state.users || {});
  const { isAuthenticated } = useSelector((state) => state.user);

  console.log(user)

  const handlePreview = (params) => {
    setOpen(true);
    const filteredUser = users.filter((user) => user.id === params.id);
    setUser(filteredUser);
  };

  const dispatch = useDispatch();

  // Get all user
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Delete user
  const handleDelete = async (id) => {
    dispatch(deleteUser(id));
    window.location.reload();
  };

  // Create columns and rows for DataGrid that comes with the pagination feature
  const columns = [
    { field: "id", headerName: "ID", minWidth: 20, flex: 0.7 },

    {
      field: "names",
      headerName: "Name",
      minWidth: 130,
      flex: 1.4,
    },
    {
      field: "surnames",
      headerName: "Surname",
      minWidth: 130,
      flex: 1.4,
    },

    {
      field: "preview",
      flex: 1.4,
      maxWidth: 70,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handlePreview(params)}>
              <AiFillEye size={20} />
            </Button>
          </>
        );
      },
    },

    {
      field: "edit",
      flex: 1.4,
      maxWidth: 70,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/users-update/${params.id}`}>
              <Button>
                <AiOutlineEdit size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },

    {
      field: "delete",
      flex: 0.8,
      maxWidth: 80,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  users &&
    users.forEach((item) => {
      row.push({
        id: item.id,
        names: item.names,
        surnames: item.surnames,
      });
    });

  return (
    <>
      {usersLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 bg-white">
          <h5 className="text-[30px] font-Poppins text-center">Users</h5>
          <div className="w-full bg-white flex justify-end">
            <Link to={`/users/users-post`}>
              <div className={`${styles.button} mt-0 mb-0 !w-[200px]`}>
                <span className="text-[#fff] font-[Poppins] text-[15px]">
                  Add user
                </span>
              </div>
            </Link>
          </div>

          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
          {open && (
            <div className="fixed top-0 left-0 w-full h-screen bg-[#00000062] z-[20000] flex items-center justify-center">
              <div className="w-[90%] 800px:w-[40%] h-[80vh] bg-white rounded-md shadow p-4">
                <div className="w-full flex justify-end">
                  <RxCross1
                    size={30}
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <h5 className="text-[30px] font-Poppins text-center">
                  Preview
                </h5>
                {/* show user details */}
                <br />
                <div>
                  <label className="pb-2">
                    Name <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].names}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Surname
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].surnames}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Date of birth
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].birthdate}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Email
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].email}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Document number
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].document}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Code
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].code}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Salary
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].salary}</div>
                </div>
                <br />
                <div>
                  <label className="pb-2">
                    Status (1 = Active, 0 = Inactive)
                    <span className="text-red-500">:</span>
                  </label>
                  <div>{user[0].status}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AllUsers;
