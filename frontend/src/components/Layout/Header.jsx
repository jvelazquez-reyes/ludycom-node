import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

// import locals
import styles from "../../styles/styles";
import { server } from "../../server";
import { categoriesData } from "../../static/data";

const Header = ({ activeHeading }) => {
  const navigate = useNavigate();
  const [sheetData, setSheetData] = useState(null);
  const { users, usersLoading } = useSelector((state) => state.users || {});
  const { workplace, workplaceLoading } = useSelector(
    (state) => state.workplace || {}
  );
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [active, setActive] = useState(false);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const handleDownload = () => {
    const mergeByCode = (a1, a2) =>
      a1.map((itm) => ({
        ...a2.find((item) => item.code === itm.code && item),
        ...itm,
      }));

    const sheetData = mergeByCode(users, workplace);

    const wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(sheetData);

    XLSX.utils.book_append_sheet(wb, ws, "UserDataSheet");

    XLSX.writeFile(wb, "UserData.xlsx");
  };

  return (
    <>
      <div className={`${styles.section}`}>
        {isAuthenticated ? (
          <div className={`${styles.button}`}>
            <Link to="/login" onClick={logoutHandler}>
              <span className="text-[#fff] font-[Poppins] text-[15px]">
                Logout
              </span>
            </Link>
          </div>
        ) : (
          <div className={`${styles.button}`}>
            <Link onClick={handleDownload}>
              <span className="text-[#fff] font-[Poppins] text-[15px]">
                Download XLSX file
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
