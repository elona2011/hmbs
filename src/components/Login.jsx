import React from 'react';
import {MainLayout} from '~/layouts/MainLayout/MainLayout';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  DatePicker
} from 'antd';
import {login} from '~/services/ajax.js'

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.changeName = this.changeName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    login({
      url: 'login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(function(data) {
      data
    })
  }

  changeName(e) {
    this.setState({username: e.target.value})
  }

  changePassword(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <MainLayout>
        <Form horizontal className="ant-advanced-search-form">
          <Row >
            <Col sm={12} offset={2}>
              <FormItem label="用户名" labelCol={{
                span: 12
              }} wrapperCol={{
                span: 12
              }}>
                <Input placeholder="" size="default" onChange={this.changeName}/>
              </FormItem>
            </Col>
          </Row>
          <Row >
            <Col sm={12} offset={2}>
              <FormItem label="密码" labelCol={{
                span: 12
              }} wrapperCol={{
                span: 12
              }}>
                <Input placeholder="" size="default" type="password" onChange={this.changePassword}/>
              </FormItem>
            </Col>
          </Row>
          <Row >
            <Col sm={12} offset={2}>
              <Col sm={12} offset={12}>
                <Button type="primary" htmlType="submit" onClick={this.onClick}>登录</Button>
              </Col>
            </Col>
          </Row>
        </Form>
      </MainLayout>
    );
  }
}

export {Login}
