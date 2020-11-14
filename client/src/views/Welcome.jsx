import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	PageHeader,
  Form,
  Button,
	Col,
  Row,
	InputNumber,
	Input
} from 'antd';

const { TextArea } = Input;

import fetchSetup from '../helpers/GET/getSetup';
import {getSetup, isLoadingSetup} from '../reducers/index';

const { Item } = Form;

import { LoadingOutlined } from '@ant-design/icons';

const Welcome = ({ dispatch, username: { username }, logoutHandler, setupData, isLoadingSetupData }) => {
	useDeepCompareEffect(() => {
      dispatch(fetchSetup());
	}, [fetchSetup]);
	

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
	const Spinner = () => {
    return <Spin indicator={antIcon} />;
	};

	const limitRelatedInitialVal = setupData.limit_related;
	const limitfeaturedInitialVal = setupData.limit_featured;
	const phoneNumInitialVal = setupData.phone_num;
	const emailInitialVal = setupData.email;
	const linkedInInitialVal = setupData.linkedin_link;
	const mediumInitialVal = setupData.medium_link;
	const instagramInitialVal = setupData.instagram_link;
	const githubInitialVal = setupData.github_link;
	const cvsharelinkInitialVal = setupData.cv_share_link;
	const calendlyuriInitialVal = setupData.calendly_uri;
	const githubfrontofficeInitialVal = setupData.github_frontOffice;
	const githubbackofficeInitialVal = setupData.github_backOffice;
	const herokufrontofficeInitialVal = setupData.heroku_frontOffice;
	const herokubackofficeInitialVal = setupData.heroku_backOffice;
	const currentlydoingInitialVal = setupData.currently_doing;

	const EditForm = () => {
		return(
			<Form
		layout="vertical"
		name="create-edit-project-form"
		className="create-edit-project-form"
		style={{width: '50%'}}
		// onFinish={onFinish}
		// onFinishFailed={onFinishFailed}
		initialValues={{
			limitrelated: limitRelatedInitialVal,
			limitfeatured: limitfeaturedInitialVal,
			phoneNum: phoneNumInitialVal,
			email: emailInitialVal,
			linkedinlink: linkedInInitialVal,
			mediumlink: mediumInitialVal,
			instagramlink: instagramInitialVal,
			githublink: githubInitialVal,
			cvsharelink: cvsharelinkInitialVal,
			calendlyuri: calendlyuriInitialVal,
			githubfrontoffice: githubfrontofficeInitialVal,
			githubbackoffice: githubbackofficeInitialVal,
			herokubackoffice: herokubackofficeInitialVal,
			herokufrontoffice: herokufrontofficeInitialVal,
			currentlydoing: currentlydoingInitialVal
		}}
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
			<Col span={12}>
				<Item
					name="phoneNum"
					label="Telephone Number"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Phone Num" style={{ width: '100%' }} />
				</Item>
			</Col>
			<Col span={12}>
				<Item
					name="email"
					label="Email"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Email" style={{ width: '100%' }} />
				</Item>
				</Col>
		</Row>

		<Row gutter={16}>
			<Col span={12}>
				<Item
					name="mediumlink"
					label="Medium Link"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Medium Link" style={{ width: '100%' }} />
				</Item>
			</Col>
			<Col span={12}>
				<Item
					name="linkedinlink"
					label="LinkedIn Link"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="LinkedIn Link" style={{ width: '100%' }} />
				</Item>
				</Col>
		</Row>

		<Row gutter={16}>
			<Col span={12}>
				<Item
					name="githublink"
					label="Github Link"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Github Link" style={{ width: '100%' }} />
				</Item>
			</Col>
			<Col span={12}>
				<Item
					name="instagramlink"
					label="Instagram Link"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Instagram Link" style={{ width: '100%' }} />
				</Item>
				</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="cvsharelink"
					label="CV Share Link"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="CV Share Link" style={{ width: '100%' }} />
				</Item>
			</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="calendlyuri"
					label="Calendly URI"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Calendly URI" style={{ width: '100%' }} />
				</Item>
			</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="githubfrontoffice"
					label="Github FrontOffice"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Github FrontOffice" style={{ width: '100%' }} />
				</Item>
			</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="githubbackoffice"
					label="Github BackOffice"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Github BackOffice" style={{ width: '100%' }} />
				</Item>
			</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="herokubackoffice"
					label="Heroku BackOffice"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Heroku BackOffice" style={{ width: '100%' }} />
				</Item>
			</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="herokufrontoffice"
					label="Heroku FrontOffice"
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<Input placeholder="Heroku FrontOffice" style={{ width: '100%' }} />
				</Item>
			</Col>
		</Row>

		<Row gutter={16}>
			<Col span={24}>
				<Item
					name="currentlydoing"
					label="Currently working on..."
					hasFeedback
					rules={[
						{
							required: true,
							message: `Add a valid Limit`,
						},
					]}
				>
					<TextArea autoSize placeholder="Currently working on..." />
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
		)
	}
	
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
		{isLoadingSetupData ? <Spinner /> : <EditForm />}
		</>
  );
};

const mapStateToProps = (state) => ({
	setupData: getSetup(state),
	isLoadingSetupData: isLoadingSetup(state)
});

export default connect(mapStateToProps)(Welcome);
