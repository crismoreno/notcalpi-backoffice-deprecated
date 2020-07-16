import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  clearTags,
  clearCodingLangs,
  clearMadeAts,
} from '../actions/categories';

import {
  fetchTags,
  fetchCodingLangs,
  fetchMadeAts,
} from '../helpers/GET/getCategories';

import { getTags, getCodingLangs, getMadeAts } from '../reducers/index';

import { CategoryCard } from '../components/CategoryCard.jsx';

import { Button, PageHeader } from 'antd';

const Category = ({
  dispatch,
  tags,
  madeAts,
  codingLangs,
  match: {
    params: { cat },
  },
}) => {
  useEffect(() => {
    switch (cat) {
      case 'tags':
        dispatch(clearCodingLangs());
        dispatch(clearMadeAts());
        dispatch(fetchTags());
        break;
      case 'codingLangs':
        dispatch(clearTags());
        dispatch(clearMadeAts());
        dispatch(fetchCodingLangs());
        break;
      case 'madeAts':
        dispatch(clearTags());
        dispatch(clearCodingLangs());
        dispatch(fetchMadeAts());
        break;
      case 'default':
        return null;
    }
  }, [cat]);

  let entity = eval(cat);

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
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <PageHeader
          className="contact-forms-page-header"
          title={`Check ${cat}`}
          // subTitle="This is a subtitle"
        />
        <Button type="primary" style={{ marginTop: '15px' }}>
          {`Add new ${cat.substring(0, cat.length - 1)}`}
        </Button>
      </div>
      <div className="project-cards-container">
        {entity.map((entity, index) => (
          <CategoryCard
            entity={entity}
            key={index}
            entityType={cat.substring(0, cat.length - 1)}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tags: getTags(state),
  codingLangs: getCodingLangs(state),
  madeAts: getMadeAts(state),
});

export default connect(mapStateToProps)(Category);
