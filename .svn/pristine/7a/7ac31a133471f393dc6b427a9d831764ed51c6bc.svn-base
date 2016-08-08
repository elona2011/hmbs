import React, {Component, PropTypes} from 'react';
import {MainLayout} from '~/layouts/MainLayout/MainLayout';
import CitySelector from '~/components/Cities/CitySelector';
import SelectProgress from '~/components/ProjectLists/SelectProgress';
import Container from '~/components/ProjectLists/Container';
import Manager from '~/components/ProjectLists/SelectManager';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  DatePicker
} from 'antd';
import {Table, Icon} from 'antd';
import {Tabs} from 'antd';
import {Progress} from 'antd';
import {Select} from 'antd';
import {hashHistory} from 'react-router'
import {ajax} from '~/services/ajax.js'

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

var Manager1 = Container(Manager)
var optionsManagers = []

class ProjectLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.callback = this.callback.bind(this)
    this.onRowClick = (record, index) => {
      hashHistory.push('/project-lists-detail/' + record.projectId)
    }
    this.changeCity = value => this.state.city = value
    this.changeProgress = value => this.state.progressStatus = value
    this.changeManager = value => this.state.managerId = value
    this.buttonHandle = () => ajax({
      url: 'decorationCompany/project/getProjects',
      type: 'POST',
      data: {
        "city": this.state.city,
        "projectManagerId": this.state.managerId,
        "projectStatus": this.state.progressStatus
      }
    }).then(d => this.setState(d))

    var self = this
    this.columns = [
      {
        title: '所属项目',
        dataIndex: 'building',
        key: 'building'
      }, {
        title: '施工进度',
        dataIndex: 'projectStatus',
        key: 'projectStatus',
        render: (text) => {
          var percent = 20 * text
          return (
            <div style={{
              width: 170
            }}>
              <Progress percent={percent} strokeWidth={5}/>
            </div>
          )
        }
      }, {
        title: '收款进度',
        dataIndex: 'receivedProgress',
        key: 'receivedProgress',
        render: (text) => {
          var percent = 100 * text
          return (
            <div style={{
              width: 170
            }}>
              <Progress percent={percent} strokeWidth={5}/>
            </div>
          )
        }
      }, {
        title: '下一监理节点',
        dataIndex: 'projectStatus',
        key: 'projectStatus1',
        render: (text) => {
          var status = ['准备开工', '开工交底', '水电验收', '瓦木验收', '竣工验收']
          return status[text]
        }
      }, {
        title: '下一节点时间',
        dataIndex: 'expectCheckTime',
        key: 'expectCheckTime'
      }, {
        title: '设计师',
        dataIndex: 'designer',
        key: 'designer'
      }, {
        title: '监理',
        dataIndex: 'surveyor',
        key: 'surveyor'
      }, {
        title: '项目经理',
        dataIndex: 'projectManagerId',
        key: 'projectManagerId',
        render: (text, record, index) => {
          function handleChange(value) {
            console.log(`selected ${value}`);
            record
            ajax({
              url: 'decorationCompany/project/assignPeople',
              type: 'POST',
              data: {
                "projectId": record.projectId,
                "userId": value,
                "userType": "3"
              }
            }).then(d => ajax({url: 'decorationCompany/project/getProjects', type: 'POST', data: {}}).then(d => d))
          }

          function handleClick(e) {
            e.stopPropagation()
          }

          return (
            <div onClick={handleClick}>
              <Manager1 value={text} onSelect={handleChange}/>
            </div>
          )
        }
      }
    ];
  }

  componentDidMount() {
    ajax({url: 'decorationCompany/project/getProjects', type: 'POST', data: {}}).then(d => this.setState(d))
  }

  callback(key) {
    console.log(key);
  }

  render() {
    return (
      <MainLayout>
        <div>
          <Form horizontal className="ant-advanced-search-form">
            <Row gutter={16}>
              <Col sm={6}>
                <FormItem label="城市" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <CitySelector onChange={this.changeCity}/>
                </FormItem>
              </Col>
              <Col sm={6}>
                <FormItem label="施工进度" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <SelectProgress onChange={this.changeProgress}/>
                </FormItem>
              </Col>
              <Col sm={6}>
                <FormItem label="项目经理" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <Manager1 onSelect={this.changeManager}/>
                </FormItem>
              </Col>
              <Col sm={6}>
                <Button type="primary" htmlType="submit" onClick={this.buttonHandle}>搜索</Button>
              </Col>
            </Row>
          </Form>
          <Tabs defaultActiveKey="1" type="line" onChange={this.callback}>
            <TabPane tab="河南" key="1">
              <Table columns={this.columns} dataSource={this.state.data} onRowClick={this.onRowClick}/>
            </TabPane>
            <TabPane tab="南京" key="2">
              <Table columns={this.columns} dataSource={this.state.data} onRowClick={this.onRowClick}/>
            </TabPane>
            <TabPane tab="北京" key="3">
              <Table columns={this.columns} dataSource={this.state.data} onRowClick={this.onRowClick}/>
            </TabPane>
          </Tabs>
        </div>
      </MainLayout>
    );
  }
}

ProjectLists.propTypes = {};

export {ProjectLists}
