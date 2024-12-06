import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SRSHome, SRSProject } from "../screens";
import { SRSLayout } from "../screens";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="srs">
          <Route path="*" element={<SRSLayout />}>
            <Route index element={<SRSHome />} />
            <Route path="projects" element={<SRSProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
