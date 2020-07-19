import React, { useEffect, useState } from 'react';
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
import { PlusOutlined } from '@ant-design/icons';

import { getTags, getCodingLangs, getMadeAts } from '../reducers/index';
import CategoryDrawer from '../components/Drawer/CategoryDrawer.jsx';

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

  const [showDrawer, setShowDrawer] = useState(false);

  const handleShowDrawer = () => {
    setShowDrawer(true);
  };
  const handleHideDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
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
        <Button
          type="primary"
          style={{ marginTop: '15px' }}
          onClick={handleShowDrawer}
        >
          <PlusOutlined />
          {`Add new ${cat.substring(0, cat.length - 1)}`}
        </Button>
        <CategoryDrawer
          visibility={showDrawer}
          onClose={handleHideDrawer}
          entity={cat}
        />
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
