import React from 'react';
import { Drawer, Form, Button, Col, Row } from 'antd';

import InputNum from './components/InputNum.jsx';
import InputSwitch from './components/InputSwitch.jsx';
import InputText from './components/InputText.jsx';
import InputUrl from './components/InputUrl.jsx';
import CodingLangs from './components/CodingLangs.jsx';
import MadeAts from './components/MadeAts.jsx';
import Selector from './components/Selector.jsx';
import Tags from './components/Tags.jsx';
import TextArea from './components/TextArea.jsx';
import Uploader from './components/Uploader.jsx';

const ProjectDrawer = ({ visibility, onClose, title }) => {
  return (
    <Drawer
      title={title}
      width={720}
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
            <InputText required={true} inputType={'Title'} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputText required={true} inputType={'Customer'} />
          </Col>
          <Col span={12}>
            <InputText required={true} inputType={'Collaborators'} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <InputText required={true} inputType={'Completion Date'} />
          </Col>
          <Col span={12}>
            <InputNum inputName={'Priority'} />
          </Col>
        </Row>
        {/* <Row gutter={16}>
          <Col span={12}>
            <InputSwitch inputName={'Visible'} required={true} />
          </Col>
          <Col span={12}>
            <InputSwitch inputName={'Featured'} required={true} />
          </Col>
        </Row> */}

        <Row gutter={16}>
          <Col span={12}>
            <InputUrl required={false} inputType={'Production'} />
          </Col>
          <Col span={12}>
            <InputUrl required={false} inputType={'Repository'} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputUrl required={false} inputType={'Download'} />
          </Col>
          <Col span={12}>
            <InputUrl required={false} inputType={'Iframe'} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Uploader />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <InputSwitch inputName={'Visible'} required={true} />
          </Col>
          <Col span={8}>
            <InputSwitch inputName={'Featured'} required={true} />
          </Col>
          <Col span={16}>
            <madeAts />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <TextArea />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default ProjectDrawer;
