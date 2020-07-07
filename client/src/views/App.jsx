import React, { useEffect } from 'react';
import fetchProjects from '../helpers/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/Card.jsx';

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = ({ dispatch, projects }) => {
  useEffect(() => {
    dispatch(fetchProjects());
  });

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img height="20" src={require('../assets/img/white-logo.svg')} />
        </div>
        <Menu mode="horizontal"></Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
});

export default connect(mapStateToProps)(App);
