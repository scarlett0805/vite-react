import { RouteObject, useRoutes} from "react-router-dom";
import LazyLoad  from "./lazyLoad";
import { lazy } from 'react'

type IRouteObject = RouteObject &{
    path: string;
    name: string;
    isNav?: boolean;
    // route?: string;
    logPageName: string | {[key:string]:string}; //用于埋点
}

// import Home from '@/pages/Home'

export const routes: IRouteObject[] = [
    {
        path: '/home',
        logPageName: 'HOME',
        name: '首页',
        element: LazyLoad(lazy(()=>import('@/pages/Home')))
      
    },
    {
        path: '/test',
        logPageName: 'TEST',
        name: 'test',
        element: LazyLoad(lazy(()=>import('@/pages/Test')))
    }
]

// createBrowserRouter(routes)
export default function RouteView(){
    const ele = useRoutes(routes)
    return ele
}