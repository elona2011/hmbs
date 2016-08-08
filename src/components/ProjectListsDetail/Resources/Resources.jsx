import React from 'react';
import {Card, Col, Row, Input} from 'antd';
import {Image} from '~/components/upload/Image';
import RelateImage from '~/components/ProjectListsDetail/Resources/ImageRelate'
import './image.css'

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleInput = (value) => {
      if (value.target.value) {
        RelateImage({kind: '0', relationId: this.props.params.id, type: '0', url: value.target.value})
      }
    }
    this.handlePicture1 = list => RelateImage({
      kind: '6',
      relationId: this.props.params.id,
      type: '0',
      url: list[list.length - 1].url
    })
    this.handlePicture2 = list => RelateImage({
      kind: '2',
      relationId: this.props.params.id,
      type: '0',
      url: list[list.length - 1].url
    })
    this.handlePicture3 = list => RelateImage({
      kind: '5',
      relationId: this.props.params.id,
      type: '0',
      url: list[list.length - 1].url
    })
    this.handlePicture4 = list => RelateImage({
      kind: '4',
      relationId: this.props.params.id,
      type: '0',
      url: list[list.length - 1].url
    })
  }

  componentDidMount() {
    var imageList = []
    this.props.imageList && this.props.imageList.forEach((n, i) => imageList.push(
      <a href={n.url} target="_blank" className="upload-example" key={i}>
        <img alt={n.url} src={n.url}/>
      </a>
    ))
    this.setState({imageList})
  }

  componentWillReceiveProps(nextProps) {
    var imageList = [],
      image = {}
    nextProps.imageList && nextProps.imageList.forEach((n, i) => {
      imageList.push(
        <a href={n.url} target="_blank" className="upload-example" key={i}>
          <img alt={n.url} src={n.url}/>
        </a>
      )
      if (!image[n.kind]) {
        image[n.kind] = []
      }
      image[n.kind].push(n)
    })
    this.setState({imageList, image})
  }

  render() {
    if (this.props.manager)
      return (
        <div>
          {this.state.imageList}
        </div>
      )
    else
      return (
        <div>
          <Row>
            <Col span="11">
              <Card title="全景图" bordered={true}>
                <Input placeholder="输入链接地址" onBlur={this.handleInput}/>
              </Card>
            </Col>
            <Col span="11" offset={1}>
              <Card title="水电图" bordered={true}>
                <Image onChange={this.handlePicture1} fileList={this.state.image && this.state.image['6']}/>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span="11">
              <Card title="建筑测量图" bordered={true}>
                <Image onChange={this.handlePicture2} fileList={this.state.image && this.state.image['2']}/>
              </Card>
            </Col>
            <Col span="11" offset={1}>
              <Card title="吊顶图" bordered={true}>
                <Image onChange={this.handlePicture3} fileList={this.state.image && this.state.image['5']}/>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Card title="地面材质图" bordered={true}>
                <Image onChange={this.handlePicture4} fileList={this.state.image && this.state.image['4']}/>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }

export default Component
