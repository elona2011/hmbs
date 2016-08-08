import React from 'react';
import {Card, Col, Row} from 'antd';
import Content from '~/components/ProjectListsDetail/ProjectNodeContent'

class ProjectNodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var nodes = []
    this.props.nodes && this.props.nodes.forEach((n, i) => nodes.push(
      <Card key={i} title={n.name} bordered={true}>
        <Content contents={n.projectNodeItemVoList}/>
      </Card>
    ))
    this.setState({nodes})
  }

  componentWillReceiveProps(nextProps) {
    var nodes = []
    nextProps.nodes.forEach((n, i) => nodes.push(
      <Card key={i} title={n.name} bordered={true}>
        <Content contents={n.projectNodeItemVoList}/>
      </Card>
    ))
    this.setState({nodes})
  }

  render() {
    return (
      <div>
        {this.state.nodes}
      </div>
    );
  }
}

export default ProjectNodes
