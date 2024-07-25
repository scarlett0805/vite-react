/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { NavLink, useLocation, Outlet , useMatches} from 'react-router-dom';
const { Header, Content, Sider } = Layout;
import { routes } from '@/router/config';
// import RouteView from '@/router';

import './style.less';

const ILayout: FC = () => {
  const [headerItems, setHeaderItems] = useState<any[]>([]);
  // const [siderList, setSiderList] = useState<any[]>();
  const matches = useMatches();
  console.log('lxy matches', matches)
  const [headerKey, setHeaderKey] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    const headerList = routes.map((item) => {
      return {
        key: item.key,
        label: <NavLink to={item.path}>{item.name}</NavLink>,
      };
    });
    setHeaderItems(headerList);
  }, []);
  useEffect(() => {
    console.log('lxy loction---', location);
  }, [location]);

  return (
    <>
      <Layout className="app-layout">
        <Header className="app-header">
          <Menu
            theme="light"
            className="app-header-menu"
            mode="horizontal"
            selectedKeys={[headerKey]}
            items={headerItems}
            style={{ flex: 1, minWidth: 0 }}
            onClick={(item) => {
              setHeaderKey(item.key);
            }}
          />
        </Header>
        <Layout>
          <Sider width={200} className="app-sider">
            <Menu
              className="app-sider-menu"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              items={[]}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="app-content">
              {/* <RouteView /> */}
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default ILayout;
