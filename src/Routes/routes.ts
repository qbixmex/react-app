import { lazy, LazyExoticComponent } from "react";
import { LazyPage1 } from '../01-lazy-load/Pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy2 = lazy(() => import( /* webpackChunkName: "LazyPage-2"*/ "../01-lazy-load/Pages/LazyPage2" ));
const Lazy3 = lazy(() => import( /* webpackChunkName: "LazyPage-3"*/ "../01-lazy-load/Pages/LazyPage3" ));

export const routes: Route[] = [
  {
    to: "/lazy-1",
    path: "lazy-1",
    Component: LazyPage1,
    name: "Lazy 1"
  },
  {
    to: "/lazy-2",
    path: "lazy-2",
    Component: Lazy2,
    name: "Lazy 2"
  },
  {
    to: "/lazy-3",
    path: "lazy-3",
    Component: Lazy3,
    name: "Lazy 3"
  },
];
