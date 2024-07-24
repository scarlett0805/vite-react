/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouteObject, useRoutes, createBrowserRouter } from 'react-router-dom';
import LazyLoad from './lazyLoad';
import { lazy } from 'react';

type IRouteObject = RouteObject & {
  path: string;
  name: string;
  isNav?: boolean;
  key?: string;
  // route?: string;
  logPageName?: string | { [key: string]: string }; //用于埋点
  children?: IRouteObject[];
};

// import Home from '@/pages/Home'

export const routes: IRouteObject[] = [
  {
    path: '/home',
    logPageName: 'HOME',
    name: '首页',
    key: 'home',
    element: LazyLoad(lazy(() => import('@/pages/Home'))),
    isNav: true,
    children: [
      {
        path: '/home/1',
        name: '首页1',
        key: 'home1',
        element: LazyLoad(lazy(() => import('@/pages/Home/home1'))),
      },
    ],
  },
  {
    path: '/test',
    logPageName: 'TEST',
    name: 'test',
    key: 'test',
    element: LazyLoad(lazy(() => import('@/pages/Test'))),
  },
];
// createBrowserRouter(routes)
// createBrowserRouter(routes)
export default function RouteView() {
  const ele = useRoutes(routes);
  return ele;
}
