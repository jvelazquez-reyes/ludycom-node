import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import SideBar from "../components/Services/Layout/SideBar";
import AllUsers from "../components/Services/AllUsers";

const UsersPage = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <SideBar active={active} setActive={setActive} />
        </div>
        <AllUsers />
      </div>
    </div>
  );
};

export default UsersPage;