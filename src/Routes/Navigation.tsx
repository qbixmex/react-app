import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";

import { routes } from './routes';

const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="d-flex flex-row">
          <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(({ to, name, path }) => (
                  <li key={ path }>
                    <NavLink to={ to } className={ ({ isActive }) => isActive ? "nav-active" : "" }>
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({ name, path, Component }) => (
                <Route key={ name } path={ path } element={ <Component /> } />
              ))
            }
            <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
