import React, {Component, PropTypes} from 'react';
import {Upload, Icon, Modal} from 'antd';
import $ from 'jquery';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priviewVisible: false,
      priviewImage: '',
      fileList: []
    };
    this.beforeUpload = this.beforeUpload.bind(this)
    this.onPreview = this.onPreview.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  onPreview(file) {
    this.setState({priviewImage: file.url, priviewVisible: true});
  }

  handleCancel() {
    this.setState({priviewVisible: false});
  }

  onRemove(file) {
    this.setState({
      fileList: this.state.fileList.filter(function(e) {
        return e.uid != file.uid
      })
    })
  }

  beforeUpload(file) {
    var self = this
    $.ajax({
      url: 'http://test.ihomefnt.com:8510/cms-web/media/qiniutoken?bucketName=aijia-product-test',
      dataType: 'json',
      type: 'GET',
      data: {},
      success: function(data) {
        if (data.code == 1) {
          var token = data.obj.token;
          var key = data.obj.key;
          var domain = data.obj.downloadUrl
          var formData = new FormData();
          formData.append("token", token);
          formData.append("file", file);
          formData.append("accept", "text/plain");
          $.ajax({
            url: 'http://upload.qiniu.com',
            type: 'POST',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
              file.url = 'http://' + domain + '/' + data.key;
              self.state.fileList.push({uid: file.uid, name: file.name, status: 'done', url: file.url})
              self.setState({fileList: self.state.fileList})
              self.props.onChange(self.state.fileList)
            },
            error: function() {
              console.debug('请检查网络');
            }
          });
        }
      }
    });
    return false
  }

  render() {
    return (
      <div className="clearfix">
        <Upload action='http://upload.qiniu.com' listType='picture-card' beforeUpload={this.beforeUpload} onPreview={this.onPreview} onRemove={this.onRemove} fileList={this.state.fileList}>
          <Icon type="plus"/>
          <div className="ant-upload-text">
            上传照片
          </div>
        </Upload>
        <Modal visible={this.state.priviewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" src={this.state.priviewImage}></img>
        </Modal>
      </div>
    );
  }
}

export {Image}
