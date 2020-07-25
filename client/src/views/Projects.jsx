import React, { useState, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import fetchProjects from '../helpers/GET/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/ProjectCard.jsx';
import ProjectCreateDrawer from '../components/Drawer/CreateProjectDrawer.jsx';
import ProjectEditDrawer from '../components/Drawer/EditProjectDrawer.jsx';
import { Button, Alert } from 'antd';
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

  const countFeaturedProjects = projects.reduce(
    (acc, cur) => (cur.is_featured === true ? ++acc : acc),
    0
  );
  const countHiddenProjects = projects.reduce(
    (acc, cur) => (cur.show === false ? ++acc : acc),
    0
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          margin: '10px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            width: '100%',
            margin: '10px 0',
          }}
        >
          {countFeaturedProjects === 4 ? (
            <Alert
              message="There are 4 featured Projects 👌"
              type="success"
              showIcon
              style={{ marginRight: '10px' }}
            />
          ) : (
            <Alert
              message={`${countFeaturedProjects} featured Projects in total`}
              type="warning"
              showIcon
              style={{ marginRight: '10px' }}
            />
          )}
          <Alert
            message={`${countHiddenProjects} hidden projects in total`}
            type="info"
            showIcon
          />
        </div>
        <Button
          type="primary"
          onClick={(event) => {
            handleShowCreateDrawer();
          }}
        >
          <PlusOutlined />
          Add new project
        </Button>
      </div>
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
