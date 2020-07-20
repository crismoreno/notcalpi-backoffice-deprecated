import React from 'react';
import { Drawer, Form, Button, Col, Row } from 'antd';

// import useDeepCompareEffect from 'use-deep-compare-effect';
// import { connect } from 'react-redux';
// import fetchProjects from '../../helpers/GET/getProjects';

// import { getProjects } from '../../reducers/index';

import InputNum from './components/InputNum.jsx';
import InputSwitch from './components/InputSwitch.jsx';
import InputText from './components/InputText.jsx';
import InputUrl from './components/InputUrl.jsx';
import CodingLangs from './components/CodingLangs.jsx';
import MadeAts from './components/MadeAts.jsx';
// import Selector from './components/Selector.jsx';
import Tags from './components/Tags.jsx';
import TextArea from './components/TextArea.jsx';
import Uploader from './components/Uploader.jsx';

const ProjectDrawer = ({ visibility, onClose }) => {
  return (
    <Drawer
      title={`Add new project to be ID`}
      width={900}
      onClose={onClose}
      visible={visibility}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </div>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Uploader />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <InputText
              required={true}
              inputName={'Title'}
              inputLabel={'Title'}
              inputPlaceholder={'Title'}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputText
              required={true}
              inputName={'Customer'}
              inputLabel={'Customer'}
              inputPlaceholder={'Customer'}
            />
          </Col>
          <Col span={12}>
            <InputText
              required={true}
              inputName={'Collaborators'}
              inputLabel={'Collaborators'}
              inputPlaceholder={'Collaborators'}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <InputText
              required={true}
              inputName={'Completion Date'}
              inputLabel={'Completion Date'}
              inputPlaceholder={'Completion Date'}
            />
          </Col>
          <Col span={12}>
            <InputNum
              inputName={'Priority'}
              inputLabel={'Priority'}
              required={true}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputUrl required={false} inputName={'Production'} />
          </Col>
          <Col span={12}>
            <InputUrl required={false} inputName={'Repository'} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputUrl required={false} inputName={'Download'} />
          </Col>
          <Col span={12}>
            <InputUrl required={false} inputName={'Iframe'} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Tags />
          </Col>
          <Col span={12}>
            <CodingLangs />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <InputSwitch inputName={'Visible'} required={true} />
          </Col>
          <Col span={6}>
            <InputSwitch inputName={'Featured'} required={true} />
          </Col>
          <Col span={12}>
            <MadeAts />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <TextArea inputName={'Description'} />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

// const mapStateToProps = (state) => ({
//   projects: getProjects(state),
// });

export default ProjectDrawer;
