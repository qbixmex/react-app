import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../Pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1 className="display-1 blue">Lazy Layout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy-1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy-2">Lazy 3</NavLink>
        </li>
        <li>
          <NavLink to="lazy-3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy-1" element={ <LazyPage1 /> }></Route>
        <Route path="lazy-2" element={ <LazyPage2 /> }></Route>
        <Route path="lazy-3" element={ <LazyPage3 /> }></Route>

        <Route path="*" element={ <Navigate replace to="lazy-1" /> }></Route>
      </Routes>
    </div>
  );
};

export default LazyLayout;
