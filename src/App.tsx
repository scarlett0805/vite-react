import { FC } from 'react';
import './App.css';
import ILayout from './components/Layout';
import {routes} from '@/router/config'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
interface IProps {}

const browserRoute = createBrowserRouter([{
  path: '/',
  element: <ILayout/>,
  children: routes
}])

const App: FC<IProps> = () => {
  return (
    <RouterProvider router={browserRoute} fallbackElement={<p>Initial Load...</p>} />
  );
};

export default App;
