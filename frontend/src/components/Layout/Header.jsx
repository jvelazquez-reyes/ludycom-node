import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

// import locals
import { server } from "../../server";
import styles from "../../styles/styles";

const Header = ({ activeHeading }) => {
  const navigate = useNavigate();
  // Logging out
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated)

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  // Get user and workplace to write the data in the XLSX file
  const { users } = useSelector((state) => state.users || {});
  const { workplace } = useSelector(
    (state) => state.workplace || {}
  );

  // On click handleDownload
  const handleDownload = () => {
    // Merging by code users and workplace data into one array
    const mergeByCode = (a1, a2) =>
      a1.map((itm) => ({
        ...a2.find((item) => item.code === itm.code && item),
        ...itm,
      }));

    const sheetData = mergeByCode(users, workplace);

    // Generate XLSX file
    const wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(sheetData);

    XLSX.utils.book_append_sheet(wb, ws, "UserDataSheet");

    XLSX.writeFile(wb, "UserData.xlsx");
  };

  return (
    <>
      <div className={`${styles.section}`}>
        {/* Logo */}
        <div className="flex items-center justify-between-end">
          {isAuthenticated ? (
            <>
              <div className={`${styles.button}`}>
                <Link onClick={handleDownload}>
                  <span className="text-[#fff] font-[Poppins] text-[15px]">
                    Download XLSX file
                  </span>
                </Link>
              </div>
              <div className={`${styles.button}`}>
                <Link to="/login" onClick={logoutHandler}>
                  <span className="text-[#fff] font-[Poppins] text-[15px]">
                    Logout
                  </span>
                </Link>
              </div>
            </>
          ) : ({})}
        </div>
      </div>
    </>
  );
};

export default Header;
