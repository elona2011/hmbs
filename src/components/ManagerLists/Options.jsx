import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'antd';
import {ajax} from '~/services/ajax.js'
import {Inputs} from '~/components/ManagerLists/Inputs'

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  showModal() {
    this.setState({visible: true});
  }

  handleInput(d) {
    this.setState(d)
  }

  handleOk() {
    this.setState({confirmLoading: true});

    var options = {
      url: 'people/addProjectManager',
      data: {
        "name": this.state.name,
        "password": this.state.password,
        "phone": this.state.phone
      }
    }
    ajax(options).then(function(d) {
      this.setState({visible: false, confirmLoading: false});
      this.props.onConfirm()
    }.bind(this))
  }

  handleCancel() {
    this.setState({visible: false});
  }

  render() {
    return (
      <div>
        <a type="primary" onClick={this.showModal}>重置</a>
        <Modal title="重置" visible={this.state.visible} onOk={this.handleOk} confirmLoading={this.state.confirmLoading} onCancel={this.handleCancel}>
          <Inputs onInput={this.handleInput}/>
        </Modal>
      </div>
    );
  }
}

export {Reset}
