import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateProject } from '../../helpers/UPDATE/updateProject';

import {
  fetchMadeAts,
  fetchTags,
  fetchCodingLangs,
} from '../../helpers/GET/getCategories';

import fetchProject from '../../helpers/GET/getProject';

import {setProjectRelatedByKind} from '../../actions/projects'

import {
  getMadeAts,
  getTags,
  getCodingLangs,
  getProjectData,
  getProjectMadeAt,
  getProjectLoading,
  getProjectCodingLangs,
	getProjectTags,
	getProjectRelatedBy,
	getProjectRelatedById,
} from '../../reducers/index';

import {
  Drawer,
  Form,
  Button,
	Col,
	Empty,
  Row,
  Input,
  Switch,
  InputNumber,
  Select,
  Upload,
  message,
  Spin,
} from 'antd';
const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;

import { UploadOutlined, LoadingOutlined } from '@ant-design/icons';

const ProjectEditDrawer = ({
  visibility,
  handleClose,
  project: { id, title, is_featured, show },
  madeats,
  tags,
  fetchProjectDispatcher,
  fetchCodingLangsDispatcher,
  codingLangs,
  fetchMadeAtsDispatcher,
  fetchTagsDispatcher,
  updateProjectDispatcher,
  getProject,
  getProjectMadeAt,
  getProjectLoading,
  getProjectCodingLangs,
	getProjectTags,
	getProjectRelatedBy,
	getProjectRelatedById,
	setProjectRelatedByKindDispatcher,
}) => {
  useEffect(() => {
    fetchProjectDispatcher(id);
    if (!madeats.length) {
      fetchMadeAtsDispatcher();
    }
    if (!tags.length) {
      fetchTagsDispatcher();
    }
    if (!codingLangs.length) {
      fetchCodingLangsDispatcher();
    }
  }, [id]);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	const formRef = useRef(null);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    formRef.current.resetFields();
  };
  const onFinish = (values) => {
    console.log(values, 'values');
    updateProjectDispatcher(values, id, handleClose);
    formRef.current.resetFields();
  };

  const selectURLBefore = (
    <Select defaultValue="https://" className="select-before">
      <Option value="https://">https://</Option>
      <Option value="http://">http://</Option>
    </Select>
	);

  const madeAtsChildren = [];
  for (let i = 0; i < madeats.length; i++) {
		madeAtsChildren.push(
			<Option key={madeats[i].id} value={madeats[i].id}>
        {madeats[i].short_name}
      </Option>
    );
	}

  const tagsChildren = [];
  for (let i = 0; i < tags.length; i++) {
		tagsChildren.push(
			<Option key={tags[i].id} value={tags[i].id}>
        {tags[i].name}
      </Option>
    );
  }
	
  const codingLangChildren = [];
  for (let i = 0; i < codingLangs.length; i++) {
		codingLangChildren.push(
			<Option key={codingLangs[i].id} value={codingLangs[i].id}>
        {codingLangs[i].name}
      </Option>
    );
	}
	
  const tagsDefaultChildren = [];
  if (getProjectTags) {
		for (let i = 0; i < getProjectTags.length; i++) {
			tagsDefaultChildren.push(getProjectTags[i].tag.id);
    }
  }
	
  const codingLangsDefaultChildren = [];
  if (getProjectCodingLangs) {
		for (let i = 0; i < getProjectCodingLangs.length; i++) {
			codingLangsDefaultChildren.push(getProjectCodingLangs[i].codinglang.id);
    }
	}

  const titleInitialValue = getProject ? getProject.title : null;
  const cutomerInitialValue = getProject ? getProject.customer : null;
  const collaboratorsInitialValue = getProject
    ? getProject.collaborators
    : null;
  const complation_dateInitialValue = getProject
    ? getProject.completion_date
    : null;
  const orderbyInitialValue = getProject ? getProject.orderby : null;
  const linkToProdInitialValue = getProject ? getProject.link_to_prod : null;
  const linkToRepoInitialValue = getProject ? getProject.link_to_repo : null;
  const linkToPostInitialValue = getProject ? getProject.link_to_post : null;
  const linkToDownloadInitialValue = getProject
    ? getProject.link_to_download
    : null;
  const linkToVideoloadInitialValue = getProject ? getProject.video : null;
  const featuredInitialValue = is_featured ? 'checked' : null;
	const visibleInitialValue = show ? 'checked' : null;
	const relatedByIdInitialValue = getProjectRelatedById ? getProjectRelatedById : null;
	const relatedByKindInitialValue = getProjectRelatedBy ? getProjectRelatedBy : null;
	const descriptionInitialValue = getProject ? getProject.description : null;

  const Spinner = () => {
    return <Spin indicator={antIcon} />;
  };

  const EditForm = () => {
    return (
      <Form
        layout="vertical"
        ref={formRef}
        name="create-edit-project-form"
        className="create-edit-project-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          title: titleInitialValue,
          customer: cutomerInitialValue,
          collaborators: collaboratorsInitialValue,
          completion_date: complation_dateInitialValue,
          orderby: orderbyInitialValue,
          link_to_prod: linkToProdInitialValue,
          link_to_repo: linkToRepoInitialValue,
          link_to_post: linkToPostInitialValue,
          link_to_download: linkToDownloadInitialValue,
          video: linkToVideoloadInitialValue,
          is_featured: featuredInitialValue,
          show: visibleInitialValue,
          tags: tagsDefaultChildren,
          codinglangs: codingLangsDefaultChildren,
					madeatsInput: getProjectMadeAt ? getProjectMadeAt.id : null,
					related_by_id: relatedByIdInitialValue,
					related_by: relatedByKindInitialValue,
          description: descriptionInitialValue,
        }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture">
                <Button>
                  <UploadOutlined /> Click to upload
                </Button>
              </Upload>
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="title"
              label="Title"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: `Add a valid Title`,
                },
              ]}
            >
              <Input placeholder="Title" />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="customer"
              label="Customer"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: `Add a valid Title`,
                },
              ]}
            >
              <Input placeholder="Customer" />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="collaborators"
              label="Collaborators"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: `Add a valid Collaborators`,
                },
              ]}
            >
              <Input placeholder="Collaborators" />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="completion_date"
              label="Completion Date"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: `Add a valid Complation Date`,
                },
              ]}
            >
              <Input placeholder="Completion Date" />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="orderby"
              label="Priority"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: `Add a valid Priority value`,
                },
              ]}
            >
              <InputNumber placeholder="Priority" style={{ width: '100%' }} />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="link_to_prod"
              label="👀 Link to production"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir prod URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="link_to_repo"
              label="📁 Link to repo"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir repo URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="link_to_download"
              label="📦 Link to download"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir download URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="video"
              label="📹 Link to Iframe"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir iframe URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="link_to_post"
              label="📎 Link to post"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir download URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="tags"
              label="Tags"
              hasFeedback
              rules={[
                {
                  required: false,
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Tags">
                {tagsChildren}
              </Select>
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="codinglangs"
              label="CodingLangs"
              hasFeedback
              rules={[
                {
                  required: false,
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="CodingLanguages">
                {codingLangChildren}
              </Select>
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Item
              name="show"
              label="Visible"
              valuePropName="checked"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: 'Visible',
                },
              ]}
            >
              <Switch />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name="is_featured"
              label="Featured"
              valuePropName="checked"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: 'Featured',
                },
              ]}
            >
              <Switch />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="madeatsInput"
              label="Made At"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: 'Please select a MadeAt!',
                },
              ]}
            >
              <Select placeholder="Made At">{madeAtsChildren}</Select>
            </Item>
          </Col>
        </Row>
				<Row gutter={16}>
					<Col span={12}>
            <Item
              name="related_by"
							label="Related By Kind"
              rules={[
                {
                  required: false
                },
              ]}
            >
              <Select placeholder="Related By Kind" onChange={(value)=>setProjectRelatedByKindDispatcher(value)} allowClear>
								<Option key="relatedByKind-1" value='tags'>Tag</Option>,
								<Option key="relatedByKind-2" value='codinglangs'>Coding Language</Option>,
								<Option key="relatedByKind-3" value='madeat'>Made At</Option>
							</Select>
            </Item>
          </Col>
					<Col span={12}>
					<Item
              name="related_by_id"
              label="Related By"
              rules={[
                {
                  required: false
                },
              ]}
            >
              <Select placeholder="Related By" allowClear disabled={getProjectRelatedBy == null}>
								{getProjectRelatedBy == 'tags' && tagsChildren}
								{getProjectRelatedBy == 'codinglangs' && codingLangChildren}
								{getProjectRelatedBy == 'madeat' && madeAtsChildren}
              </Select>
            </Item>
          </Col>
				</Row>
        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="description"
              label="Description"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: 'Description',
                },
              ]}
            >
              <TextArea autoSize placeholder="Description" />
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
    );
  };

  return (
    <Drawer
      title={`Edit project: ${title}`}
      width={900}
      onClose={handleClose}
      visible={visibility}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={handleClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          {/* <Button onClick={handleClose} type="primary">
            Submit
          </Button> */}
        </div>
      }
    >
      {getProjectLoading ? <Spinner /> : <EditForm />}
    </Drawer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMadeAtsDispatcher: () => dispatch(fetchMadeAts()),
  fetchProjectDispatcher: (id) => dispatch(fetchProject(id)),
  fetchTagsDispatcher: () => dispatch(fetchTags()),
  fetchCodingLangsDispatcher: () => dispatch(fetchCodingLangs()),
	updateProjectDispatcher: (values, idToUpdate, onFinish) =>
    dispatch(
      updateProject(values, idToUpdate, (err, result) => {
        if (result) {
          message.success(`Project ${values.title} was updated successfully!`);
          onFinish();
        } else {
          console.log(err, 'err');
        }
      })
		),
	setProjectRelatedByKindDispatcher: (kind) => dispatch(setProjectRelatedByKind(kind))
});

const mapStateToProps = (state) => ({
  tags: getTags(state),
  madeats: getMadeAts(state),
  codingLangs: getCodingLangs(state),
  getProject: getProjectData(state),
  getProjectMadeAt: getProjectMadeAt(state),
  getProjectCodingLangs: getProjectCodingLangs(state),
  getProjectLoading: getProjectLoading(state),
  getProjectTags: getProjectTags(state),
  getProjectRelatedBy: getProjectRelatedBy(state),
  getProjectRelatedById: getProjectRelatedById(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditDrawer);
