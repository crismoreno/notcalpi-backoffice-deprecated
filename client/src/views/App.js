import React, { useState, useEffect } from 'react';
import fetchProjects from '../helpers/getProjects';
import { connect } from 'react-redux';

// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
// import { Card, Avatar } from 'antd';
// const { Meta } = Card;

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await axios('http://localhost:5000/api');
  //     setData(response.data);
  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state

  return (
    <div>
      <h1>Hello from React</h1>
      {/* <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
      , */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(App);
