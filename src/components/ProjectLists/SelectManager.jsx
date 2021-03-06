import {Select} from 'antd';
import React, {Component, PropTypes} from 'react';
import {ajax} from '~/services/ajax.js'
const Option = Select.Option;

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      managers: [],
      value: ''
    }
    this.handleChange = value => {
      this.props.onSelect('value', value)
    }
  }

  componentDidMount() {
    this.state.managers = []
    this.props.managers && this.props.managers.forEach((n, i) => {
      this.state.managers.push(
        <Option key={n.id} value={n.id}>{n.name}</Option>
      )
    })
  }

  componentWillReceiveProps(nextProps) {
    this.state.managers = []
    nextProps.managers && nextProps.managers.forEach((n, i) => {
      this.state.managers.push(
        <Option key={n.id} value={n.id}>{n.name}</Option>
      )
    })
  }

  render() {
    return (
      <Select onSelect={this.handleChange} value={this.props.value} showSearch allowClear placeholder="请选择人员" optionFilterProp="children" notFoundContent="无法找到" style={{
        minWidth: 190
      }}>
        {this.state.managers}
      </Select>
    );
  }
}

export default Manager
