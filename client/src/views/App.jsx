import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    if (collapsed === false) {
      setCollapsed(true);
    }
    if (collapsed === true) {
      setCollapsed(false);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{ display: 'flex' }}>
          <img
            style={{ padding: '10px', height: '60px', margin: '0 auto' }}
            height="30"
            src={require('../assets/img/mini-logo.svg')}
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Button type="primary" style={{ marginTop: '15px' }}>
            Add new project
          </Button>
          <div className="project-cards-container">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
});

export default connect(mapStateToProps)(App);
