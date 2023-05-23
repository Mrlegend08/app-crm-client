import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import Talabalar from "../components/Talabalar";
import Teachers from "../components/Teachers";
import Kurslar from "../components/Kurslar";
import Guruhlar from "../components/guruhlar";
import StudentsMore from "../components/studentsMore";
import Lidlar from "../components/Lidlar";
import BoshSahifa from "../components/BoshSahifa";
import Sozlamalar from "../components/Sozlamalar";

const Root = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="talabalar" element={<Talabalar />} />
        <Route path="oqituvchilar" element={<Teachers />} />
        <Route path="kurslar" element={<Kurslar />} />
        <Route path="guruhlar" element={<Guruhlar />} />
        <Route path="talabalar/more" element={<StudentsMore />} />
        <Route path="lidlar" element={<Lidlar />} />
        <Route path="boshSahifa" element={<BoshSahifa />} />
        <Route path="sozlamalar" element={<Sozlamalar />} />
      </Routes>
    </>
  );
};

export default Root;
