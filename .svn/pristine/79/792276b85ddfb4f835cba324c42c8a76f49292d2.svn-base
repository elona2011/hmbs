import React, {Component, PropTypes} from 'react';
import {MainLayout} from '~/layouts/MainLayout/MainLayout';
import CitySelector from '~/components/Cities/CitySelector';
import {AddManager} from '~/components/ManagerLists/AddManager'
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  DatePicker
} from 'antd';
import {Table, Icon} from 'antd';
import {ajax} from '~/services/ajax.js'
import {Reset} from '~/components/ManagerLists/Options'
import SelectProgress from '~/components/ProjectLists/SelectProgress';
import Container from '~/components/ProjectLists/Container';
import Manager from '~/components/ProjectLists/SelectManager';

const FormItem = Form.Item;
var Manager1 = Container(Manager)

const columns = [
  {
    title: '项目经理',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '账号（手机号）',
    dataIndex: 'phone',
    key: 'phone'
  }, {
    title: '初始密码',
    dataIndex: 'password',
    key: 'password'
  }, {
    title: '操作',
    dataIndex: 'id',
    key: 'id',
    render: (text, record, index) => (
      <Row>
        <Col span={6}>
          <Reset></Reset>
        </Col>
        <Col span={6}>
          <a></a>
        </Col>
      </Row>
    )
  }
];

class ManagerLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onConfirm = this.onConfirm.bind(this)
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
  }

  componentDidMount() {
    ajax({url: 'decorationCompany/people/getProjectManagers', type: 'GET'}).then(function(d) {
      this.setState(d)
    }.bind(this))
  }

  onConfirm() {
    this.componentDidMount()
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
        <div>
          <Form horizontal className="ant-advanced-search-form">
            <Row >
              <Col sm={6}>
                <FormItem label="城市" labelCol={{
                  span: 6
                }} wrapperCol={{
                  span: 18
                }}>
                  <CitySelector/>
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
                <Button type="primary" htmlType="submit">搜索</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6} offset={1}>
                <AddManager onConfirm={this.onConfirm}/>
              </Col>
            </Row>
          </Form>
          <Table columns={columns} dataSource={this.state.data} style={marginTop24}/>
        </div>
      </MainLayout>
    );
  }
}

ManagerLists.propTypes = {};

export {ManagerLists}
