import React, { useState, useEffect } from 'react';
import fetchProjects from '../helpers/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
// import { Card, Avatar } from 'antd';
// const { Meta } = Card;

const App = ({ dispatch, projects }) => {
  useEffect(() => {
    dispatch(fetchProjects());
  }, [projects]);

  return (
    <div>
      {projects.map(({ project }) => (
        <h1>Hello!</h1>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
});

export default connect(mapStateToProps)(App);
