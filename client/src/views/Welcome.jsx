import React from 'react';

import { Link } from 'react-router-dom';

import {
	PageHeader,
  Form,
  Button,
	Col,
  Row,
  InputNumber,
} from 'antd';

const { Item } = Form;

const Welcome = ({ username: { username }, logoutHandler }) => {
  return (
		<>
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


		<Form
		layout="vertical"
		name="create-edit-project-form"
		className="create-edit-project-form"
		style={{width: '50%'}}
		// onFinish={onFinish}
		// onFinishFailed={onFinishFailed}
		// initialValues={{
		// }}
		>
		<Row gutter={16}>
			<Col span={12}>
				<Item
					name="limitfeatured"
					label="Limit Featured"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<InputNumber placeholder="Featured Limit" style={{ width: '100%' }} />
				</Item>
			</Col>
			<Col span={12}>
				<Item
					name="limitrelated"
					label="Limit Related"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<InputNumber placeholder="Featured Related" style={{ width: '100%' }} />
				</Item>
				</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="submit-project-create-edit-button"
					>
						Submit
					</Button>
				</Form.Item>
			</Col>
		</Row>
	</Form>
	</>
  );
};

export default Welcome;
