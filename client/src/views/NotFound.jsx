import React from 'react';
import { Link } from 'react-router-dom';

import { DislikeOutlined } from '@ant-design/icons';
import { PageHeader, Button } from 'antd';

const Unauthorized = () => {
  return (
    <div className="unauthorised-screen">
      <DislikeOutlined style={{ fontSize: '64px', color: 'black' }} />
      <PageHeader
        className="contact-forms-page-header"
        title="404 Page not found"
        // subTitle="This is a subtitle"
      />
      <Button type="primary">
        <Link to="/">Go back to safety</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;
