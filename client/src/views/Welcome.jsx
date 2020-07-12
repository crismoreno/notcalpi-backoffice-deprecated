import React from 'react';

import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';

const Welcome = ({ username: { username }, logoutHandler }) => {
  return (
    <div className="welcome-screen">
      <PageHeader
        className="contact-forms-page-header"
        title={`Welcome back, ${username}!`}
        // subTitle="This is a subtitle"
      />
      <Button type="primary" style={{ marginTop: '15px' }}>
        <Link to="/" onClick={logoutHandler}>
          Logout
        </Link>
      </Button>
    </div>
  );
};

export default Welcome;
