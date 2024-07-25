import LazyLoad from './lazyLoad';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

type IRouteObject = RouteObject & {
    path: string;
    name: string;
    isNav?: boolean;
    key?: string;
    // route?: string;
    logPageName?: string | { [key: string]: string }; //用于埋点
    children?: IRouteObject[];
  };


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