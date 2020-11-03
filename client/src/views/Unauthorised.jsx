import React from 'react';
import { Link } from 'react-router-dom';

import { FrownOutlined } from '@ant-design/icons';
import { PageHeader, Button } from 'antd';

const Unauthorized = () => {
  return (
    <div className="unauthorised-screen">
      <FrownOutlined style={{ fontSize: '64px', color: 'black' }} />
      <PageHeader
        className="contact-forms-page-header"
        title="403 Forbidden route"
        // subTitle="This is a subtitle"
      />
      <Button type="primary">
        <Link to="/">Go back to safety</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;
