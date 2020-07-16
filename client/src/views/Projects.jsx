import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import fetchProjects from '../helpers/GET/getProjects';
import { connect } from 'react-redux';

import { getProjects } from '../reducers/index';

import { ProjectCard } from '../components/ProjectCard.jsx';
import { Button } from 'antd';

const Projects = ({ dispatch, projects }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(projects) || !Boolean(projects.length)) {
      dispatch(fetchProjects());
    }
  }, [projects]);
  return (
    <div
      style={{
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
