import React, { Component, PropTypes } from 'react';
import { Collapse } from 'antd';
import { Card, Col, Row } from 'antd';
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { Steps } from 'antd';

import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { Image } from './upload/Image';
import $ from 'jquery';

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 14 },
    };
const Step = Steps.Step;


function callback(key) {
  console.log(key);
}

class ProjectListsDetail extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          priviewVisible: false,
      priviewImage: '',
      };
    }

  render(){
  	var marginTop24 = {
      'marginTop': '24px'
    };
    var marginTop12 = {
      'marginTop': '12px'
    };
    return (
    	<MainLayout>
      <Collapse defaultActiveKey={['1','2','3','4']} onChange={callback}>
    <Panel header="订单概览" key="1">
      <Row>
      <Col span="11">
        <Card title="用户信息" bordered={true}>
        	<Form horizontal >
		        <FormItem
		          {...formItemLayout}
		          label="用户名"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="手机号"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="家庭地址"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="户型"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="住房面积"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="风格期望"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		    </Form>
        </Card>
      </Col>
      <Col span="11" offset={1}>
        <Card title="订单信息" bordered={true}>
			<Form horizontal >
		        <FormItem
		          {...formItemLayout}
		          label="订单来源"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="订单归属"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="所属项目"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="所属销售"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="订单类型"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="订单价格"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="已付款"
		        >
		          <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
		        </FormItem>
		    </Form>
        </Card>
      </Col>
    </Row>
    </Panel>
    <Panel header="图纸资料（图纸建议图片或pdf文件）" key="2">
    <Row>
      <Col span="11">
        <Card title="全景图" bordered={true}>
        	<Image />
        </Card>
      </Col>
      <Col span="11" offset={1}>
        <Card title="水电图" bordered={true}>
			<Image />
        </Card>
      </Col>
    </Row>
      <Row>
      <Col span="11">
        <Card title="建筑测量图" bordered={true}>
        	<Image />
        </Card>
      </Col>
      <Col span="11" offset={1}>
        <Card title="吊顶图" bordered={true}>
			<Image />
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span={11}>
        <Card title="地面材质图" bordered={true}>
        	<Image />
        </Card>
      </Col>
    </Row>
    </Panel>
    <Panel header="施工跟进" key="3">
      <Row>
	      <Col span={6}>
	        <FormItem
		        label="设计师"
		        labelCol={{ span: 6 }}
		        wrapperCol={{ span: 18 }}
		      >
	                <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
	        </FormItem>
	      </Col>
	      <Col span={6}>
	        <FormItem
		        label="设计师"
		        labelCol={{ span: 6 }}
		        wrapperCol={{ span: 18 }}
		      >
	                <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
	        </FormItem>
	      </Col>
	      <Col span={6}>
	        <FormItem
		        label="设计师"
		        labelCol={{ span: 6 }}
		        wrapperCol={{ span: 18 }}
		      >
	                <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
	        </FormItem>
	      </Col>
	      <Col span={6}>
	        <FormItem
		        label="设计师"
		        labelCol={{ span: 6 }}
		        wrapperCol={{ span: 18 }}
		      >
	                <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
	        </FormItem>
	      </Col>
    	</Row>
    	<Row>
    		<Col span={18} offset={3}>
		    	<Steps current={1}>
				    <Step title="等待排期" />
				    <Step title="开工交底" />
				    <Step title="水电交底" />
				    <Step title="主体工程交底"  />
				    <Step title="竣工交底"  />
				</Steps>
			</Col>
		</Row>
		<Row style={marginTop24}>
	      <Col span="11">
	        <Card title="监理节点记录" bordered={true}>
	        	<Card title="开工交底" bordered={true}>
	        	
	        	</Card>
	        	<Card title="水电交底" bordered={true} style={marginTop12}>
	        	
	        	</Card>
	        </Card>
	      </Col>
	      <Col span="11" offset={1}>
	        <Card title="装修进度查看" bordered={true}>
				
	        </Card>
	      </Col>
	    </Row>
    </Panel>
    <Panel header="隐患问题纪录" key="4">
      	<Card title="验收节点：水电验收" bordered={true}>
	        <Card title="闭水实验" bordered={true}>
	        	<p className="ant-form-text" id="userName" name="userName">整改回复：111111111</p>
	        	<br />
	        	<img alt="example" src={this.state.priviewImage} />
	        	<img alt="example" src={this.state.priviewImage} />
			</Card>	
		</Card>
    </Panel>
  </Collapse>
  </MainLayout>
    );
  }
}

export {ProjectListsDetail}