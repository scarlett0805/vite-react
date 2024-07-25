/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRoutes, createBrowserRouter } from 'react-router-dom';

import {routes} from './config'

// import ILayout from '@/components/Layout';
export const BrowserRouter =  createBrowserRouter(routes)
// createBrowserRouter(routes)
export default function RouteView() {
  const ele = useRoutes(routes);
  return ele;
}

