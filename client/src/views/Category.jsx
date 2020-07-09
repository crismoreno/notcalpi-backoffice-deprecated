import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { fetchTags } from '../helpers/getCategories';

import { connect } from 'react-redux';

import { getTags } from '../reducers/index';

import { CategoryCard } from '../components/CategoryCard.jsx';

import { Button } from 'antd';

const Category = ({ dispatch, tags }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(tags) || !Boolean(tags.length)) {
      dispatch(fetchTags());
    }
  }, [tags]);
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
        {tags.map((tag, index) => (
          <CategoryCard tag={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tags: getTags(state),
});

export default connect(mapStateToProps)(Category);
