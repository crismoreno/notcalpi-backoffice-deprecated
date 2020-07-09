import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './views/Projects.jsx';
import Welcome from './views/Welcome.jsx';

import {
  UserOutlined,
  FlagOutlined,
  FolderOpenOutlined,
  MailOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = (store) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    collapsed === false ? setCollapsed(true) : setCollapsed(false);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
            <Link to="/" style={{ display: 'flex' }}>
              <img
                style={{ padding: '10px', height: '60px', margin: '0 auto' }}
                height="30"
                src={require('./assets/img/mini-logo.svg')}
              />
            </Link>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<SmileOutlined />}>
              <Link to="/">Welcome</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FolderOpenOutlined />}>
              <Link to="/projects">Projects</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<FlagOutlined />} title="Categories">
              <Menu.Item key="3">
                <Link to="/tags">Tags</Link>
              </Menu.Item>
              <Menu.Item key="4">Coding Languages</Menu.Item>
              <Menu.Item key="5">Made Ats</Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<MailOutlined />}>
              Contact Forms
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>
              Users
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/projects">
                <Projects store={store} />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Made with love by Cristina Moreno ❤️
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;