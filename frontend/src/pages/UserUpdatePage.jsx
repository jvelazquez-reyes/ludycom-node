import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import SideBar from "../components/Services/Layout/SideBar";
import UserUpdate from "../components/Services/UserUpdate";

const UserUpdatePage = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <SideBar active={active} setActive={setActive} />
        </div>
        <UserUpdate />
      </div>
    </div>
  );
};

export default UserUpdatePage;