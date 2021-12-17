import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      LAZYLAYOUTPAGE
      <ul>
        <li>
          <NavLink to="lazy1">lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/lazy1" element={<LazyPage1 />} />
        <Route path="/lazy2" element={<LazyPage2 />} />
        <Route path="/lazy3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
