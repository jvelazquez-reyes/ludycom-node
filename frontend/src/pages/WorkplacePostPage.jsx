import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import SideBar from "../components/Services/Layout/SideBar";
import WorkplacePost from "../components/Services/WorkplacePost";

const WorkplacePostPage = () => {
  const [active, setActive] = useState(2); // For sidebar menu

  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <SideBar active={active} setActive={setActive} />
        </div>
        <WorkplacePost />
      </div>
    </div>
  );
};

export default WorkplacePostPage;