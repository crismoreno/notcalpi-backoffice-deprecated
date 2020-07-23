import React, { useState, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import fetchProjects from '../helpers/GET/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/ProjectCard.jsx';
import ProjectCreateDrawer from '../components/Drawer/ProjectDrawer-create.jsx';
import ProjectEditDrawer from '../components/Drawer/ProjectDrawer-edit.jsx';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Projects = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);

  const [showEditDrawer, setShowEditDrawer] = useState(false);
  const [showCreateDrawer, setShowCreateDrawer] = useState(false);
  const [drawerProps, setDrawerProps] = useState(null);

  // useEffect(() => {
  //   if (drawerProps != null) {
  //     setShowEditDrawer(true);
  //   }
  // }, [drawerProps]);

  // const handleShowDrawer = (event, project = null) => {
  //   event.persist();
  //   if (project == null) {
  //     setDrawerProps({});
  //   } else {
  //     setDrawerProps(project);
  //   }
  // };

  const handleShowCreateDrawer = () => {
    setDrawerProps(null);
    setShowCreateDrawer(true);
  };
  const handleShowEditDrawer = (project) => {
    setDrawerProps(project);
    setShowEditDrawer(true);
  };
  const handleHideDrawer = () => {
    setDrawerProps(null);
    setShowEditDrawer(false);
    setShowCreateDrawer(false);
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
        onClick={(event) => {
          handleShowCreateDrawer();
        }}
      >
        <PlusOutlined />
        Add new project
      </Button>
      {drawerProps ? (
        <ProjectEditDrawer
          visibility={showEditDrawer}
          handleClose={handleHideDrawer}
          project={drawerProps}
        />
      ) : (
        <ProjectCreateDrawer
          visibility={showCreateDrawer}
          handleClose={handleHideDrawer}
        />
      )}
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            dispatch={dispatch}
            onClickEdit={(event) => {
              handleShowEditDrawer(project);
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
