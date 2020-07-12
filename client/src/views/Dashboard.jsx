import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import Projects from './Projects.jsx';
import Welcome from './Welcome.jsx';
import Category from './Category.jsx';
import ContactForms from './ContactForms.jsx';
import Users from './Users.jsx';

import { logoutUser } from '../helpers/login';
import { getAuth } from '../reducers/index';
import { logout } from '../actions/users';

import {
  UserOutlined,
  FlagOutlined,
  FolderOpenOutlined,
  MailOutlined,
  SmileOutlined,
  DesktopOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = ({ auth, logoutDispacher }, store) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    collapsed === false ? setCollapsed(true) : setCollapsed(false);
  };

  const logoutHandler = () => {
    logoutUser();
    logoutDispacher();
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <Link to="/admin" style={{ display: 'flex' }}>
            <img
              style={{ padding: '10px', height: '60px', margin: '0 auto' }}
              height="30"
              src={require('../assets/img/mini-logo.svg')}
            />
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<SmileOutlined />}>
            <Link to="/admin">Welcome</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FolderOpenOutlined />}>
            <Link to="/admin/projects">Projects</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<FlagOutlined />} title="Categories">
            <Menu.Item key="3">
              <Link to="/admin/category/tags">Tags</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/admin/category/codingLangs">Coding Languages</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/admin/category/madeAts">Made Ats</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<MailOutlined />}>
            <Link to="/admin/contactForms">Contact Forms</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<DesktopOutlined />}>
            <a target="_blank" href="https://www.cristinamoreno.dev/">
              Visit FrontOffice
            </a>
          </Menu.Item>
          <Menu.Item key="9" icon={<LogoutOutlined />}>
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
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
            <Route path="/admin" exact>
              <Welcome username={auth}></Welcome>
            </Route>
            <Route path="/admin/projects" exact>
              <Projects store={store} />
            </Route>
            <Route
              path="/admin/category/:cat"
              exact
              render={({ match }) => <Category match={match} store={store} />}
            />
            <Route
              path="/admin/contactForms"
              exact
              render={() => <ContactForms store={store} />}
            />
            <Route
              path="/admin/users"
              exact
              render={() => <Users store={store} />}
            />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Made with love by Cristina Moreno ❤️
        </Footer>
      </Layout>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutDispacher: () => dispatch(logout()),
});
const mapStateToProps = (state) => ({
  auth: getAuth(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
