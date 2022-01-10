import { lazy, LazyExoticComponent } from "react";
import NoLazy from '../01-lazy-load/Pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout"*/ "../01-lazy-load/Layout/LazyLayout" ));

export const routes: Route[] = [
  {
    path: "/lazy-load/*",
    to: "/lazy-load/",
    Component: LazyLayout,
    name: "Lazy Layout - Dashboard"
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy"
  }
];
