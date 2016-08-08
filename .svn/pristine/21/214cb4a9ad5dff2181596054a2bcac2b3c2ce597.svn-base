import React, {Component, PropTypes} from 'react';
import {Collapse} from 'antd';
import {
  Card,
  Col,
  Row,
  Steps,
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
  Tooltip,
  Icon
} from 'antd';

import {MainLayout} from '~/layouts/MainLayout/MainLayout';
import Node from '~/components/ProjectListsDetail/ProjectNodeVo';
import Progress from '~/components/ProjectListsDetail/ProjectProgress';
import Problem from '~/components/ProjectListsDetail/Problems/Problems';
import Resources from '~/components/ProjectListsDetail/Resources/Resources';
import $ from 'jquery';
import {ajax} from '~/services/ajax.js'

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 18
  },
  style: {
    marginBottom: 6
  }
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
      nodeVoIndex: 0
    };
  }

  componentWillMount() {
    ajax({
      url: 'decorationCompany/project/getProjectDetail',
      type: 'POST',
      data: {
        "projectId": this.props.params.id
      }
    }).then(d => {
      d.data.projectDetailVo.projectNodeVo.forEach(function(e, i) {
        e.troubleNum = 0
        e.projectNodeItemVoList.forEach(function(m) {
          e.troubleNum += m.troubleDetailList && m.troubleDetailList.length
        })
        if (e.status)
          d.data.projectDetailVo.index = 1 + i
      })
      this.setState(d.data)
    })
  }

  render() {
    var marginTop24 = {
      'marginTop': '24px'
    };
    var marginTop12 = {
      'marginTop': '12px'
    };
    return (
      <MainLayout>
        <Collapse defaultActiveKey={['1', '2', '3', '4']} onChange={callback}>
          <Panel header="订单概览" key="1">
            <Row>
              <Col span="11">
                <Card title="用户信息" bordered={true}>
                  <Form horizontal>
                    <FormItem {...formItemLayout} label="用户名">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailUserVo && this.state.projectDetailUserVo.userName}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="手机号">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailUserVo && this.state.projectDetailUserVo.mobile}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="家庭地址">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailUserVo && this.state.projectDetailUserVo.address}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="户型">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailUserVo && this.state.projectDetailUserVo.houseModel}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="住房面积">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailUserVo && this.state.projectDetailUserVo.houseArea}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="风格期望">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailUserVo && this.state.projectDetailUserVo.expectStyle}</p>
                    </FormItem>
                  </Form>
                </Card>
              </Col>
              <Col span="11" offset={1}>
                <Card title="订单信息" bordered={true}>
                  <Form horizontal>
                    <FormItem {...formItemLayout} label="订单来源">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.source}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="订单归属">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.owner}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="所属项目">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.bulidingName}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="所属销售">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.saler}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="订单类型">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.orderType}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="订单价格">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.orderPrice}</p>
                    </FormItem>
                    <FormItem {...formItemLayout} label="已付款">
                      <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailOrderVo && this.state.projectDetailOrderVo.paidPrice}</p>
                    </FormItem>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Panel>
          <Panel header="图纸资料（图纸建议图片或pdf文件）" key="2">
            <Resources params={this.props.params} imageList={this.state.datumVoList} manager={this.state.projectDetailVo && this.state.projectDetailVo.projectManager}/>
          </Panel>
          <Panel header="施工跟进" key="3">
            <Row>
              <Col span={6}>
                <FormItem label="设计师" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailVo && this.state.projectDetailVo.designer}</p>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="设计师" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailVo && this.state.projectDetailVo.surveyor}</p>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="设计师" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailVo && this.state.projectDetailVo.decorationCompany}</p>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="设计师" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <p className="ant-form-text" id="userName" name="userName">{this.state.projectDetailVo && this.state.projectDetailVo.projectManager}</p>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={18} offset={3}>
                <Steps current={this.state.projectDetailVo && this.state.projectDetailVo.index}>
                  <Step title='等待排期'/>
                  <Step title={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[0].name} description={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[0].expectCheckTime}/>
                  <Step title={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[1].name} description={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[1].expectCheckTime}/>
                  <Step title={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[2].name} description={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[2].expectCheckTime}/>
                  <Step title={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[3].name} description={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[3].expectCheckTime}/>
                </Steps>
              </Col>
            </Row>
            <Row style={marginTop24}>
              <Col span="11">
                <Card title="监理节点记录" bordered={true}>
                  <Node nodes={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo}/>
                </Card>
              </Col>
              <Col span="11" offset={1}>
                <Card title="装修进度查看" bordered={true}>
                  <Progress progress={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo[this.state.nodeVoIndex].craftList}/>
                </Card>
              </Col>
            </Row>
          </Panel>
          <Panel header="隐患问题纪录" key="4">
            <Problem problem={this.state.projectDetailVo && this.state.projectDetailVo.projectNodeVo}/>
          </Panel>
        </Collapse>
      </MainLayout>
    );
  }
}

export {ProjectListsDetail}
