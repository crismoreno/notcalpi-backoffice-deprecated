import React, { setState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import fetchProjects from '../helpers/GET/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/ProjectCard.jsx';
import { ProjectDrawer } from '../components/ProjectDrawer.jsx';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Projects = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);

  // const [showDrawer, setShowDrawer] = setState(false);

  // const handleShowDrawer = () => {
  //   setShowDrawer(true);
  // };
  // const handleHideDrawer = () => {
  //   setShowDrawer(false);
  // };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Button type="primary" style={{ marginTop: '15px' }}>
        <PlusOutlined />
        Add new project
      </Button>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
});

export default connect(mapStateToProps)(Projects);
