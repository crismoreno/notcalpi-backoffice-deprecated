import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import fetchProjects from '../helpers/GET/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/ProjectCard.jsx';
import ProjectDrawer from '../components/ProjectDrawer/ProjectDrawer.jsx';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Projects = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);

  const [showDrawer, setShowDrawer] = useState(false);

  const handleShowDrawer = () => {
    console.log('show');
    setShowDrawer(true);
  };
  const handleHideDrawer = () => {
    console.log('hide');
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
        title={'Add new project'}
      />
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
