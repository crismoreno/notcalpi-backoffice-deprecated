import React, { useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import fetchProjects from '../helpers/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/Card.jsx';
import { Button } from 'antd';

import {
  UserOutlined,
  FlagOutlined,
  FolderOpenOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img height="30" src={require('../assets/img/white-logo.svg')} />
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
            <Menu.Item key="1" icon={<FolderOpenOutlined />}>
              Projects
            </Menu.Item>
            <SubMenu key="sub1" icon={<FlagOutlined />} title="Categories">
              <Menu.Item key="2">Tags</Menu.Item>
              <Menu.Item key="3">Coding Languages</Menu.Item>
              <Menu.Item key="4">Made Ats</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<MailOutlined />}>
              Contact Forms
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Users
            </Menu.Item>
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
            <Button type="primary">Add new project</Button>
            <div className="project-cards-container">
              {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </div>
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
