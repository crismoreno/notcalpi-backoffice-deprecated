import React, { useState, useEffect } from 'react';
import fetchProjects from '../helpers/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

const App = ({ dispatch, projects }) => {
  useEffect(() => {
    dispatch(fetchProjects());
  }, [projects]);

  return (
    <div>
      {projects.map((project, index) => (
        <Card
          key={index}
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={`https://res.cloudinary.com/hyavxktsb/image/upload/projects/${project.id}/cover.png`}
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={project.title}
            description={project.customer}
          />
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
});

export default connect(mapStateToProps)(App);
