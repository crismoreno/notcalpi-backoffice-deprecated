import React, { useState, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import fetchProjects from '../helpers/GET/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/ProjectCard.jsx';
import ProjectDrawer from '../components/Drawer/ProjectDrawer.jsx';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Projects = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);

  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerProps, setDrawerProps] = useState(null);

  useEffect(() => {
    if (drawerProps != null) {
      setShowDrawer(true);
    }
  }, [drawerProps]);

  const handleShowDrawer = (project) => {
    setDrawerProps(project);
  };
  const handleHideDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Button
        type="primary"
        style={{ marginTop: '15px' }}
        onClick={handleShowDrawer}
      >
        <PlusOutlined />
        Add new project
      </Button>
      <ProjectDrawer
        visibility={showDrawer}
        onClose={handleHideDrawer}
        id={projects}
      />
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            dispatch={dispatch}
            onClickEdit={() => {
              handleShowDrawer(project);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
});

export default connect(mapStateToProps)(Projects);
