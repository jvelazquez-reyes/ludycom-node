import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import SideBar from "../components/Services/Layout/SideBar";
import AllWorkplaces from "../components/Services/AllWorkplaces";

const WorkplacesPage = () => {
  const [active, setActive] = useState(2);

  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <SideBar active={active} setActive={setActive} />
        </div>
        <AllWorkplaces />
      </div>
    </div>
  );
};

export default WorkplacesPage;