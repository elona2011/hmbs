import React from 'react';
import {Card, Col, Row} from 'antd';
import Trouble from '~/components/ProjectListsDetail/Problems/ProblemsTrouble'

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var node = []
    this.props.node && this.props.node.forEach((n, i) => node.push(
      <Card key={i} title={n.content} bordered={true}>
        <Trouble trouble={n.troubleDetailList}/>
      </Card>
    ))
    this.setState({node})
  }

  componentWillReceiveProps(nextProps) {
    var node = []
    nextProps.node.forEach((n, i) => node.push(
      <Card key={i} title={n.content} bordered={true}>
        <Trouble trouble={n.troubleDetailList}/>
      </Card>
    ))
    this.setState({node})
  }

  render() {
    return (
      <div>
        {this.state.node}
      </div>
    );
  }
}

export default Node
