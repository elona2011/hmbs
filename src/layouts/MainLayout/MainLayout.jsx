import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
import styles from './MainLayout.less';

const MenuKey = {
  '/project-lists': '/project-lists',
  '/project-lists-detail': '/project-lists',
  '/manager-lists': '/manager-lists'
}

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = e => {
      console.log('click ', e);
      this.setState({current: e.key});
    }
    this.state = {
      current: MenuKey[window.location.pathname]
    };
  }

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.head}>
          <h1>装修公司系统</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.side}>
            <Menu onClick={this.handleClick} defaultOpenKeys={['sub1']} selectedKeys={[this.state.current]} mode="inline">
              <SubMenu key="sub1" title={< span > <Icon type="mail"/> < span > 装修公司 < /span></span >}>
                <Menu.Item key="/project-lists">
                  <Link to="/project-lists">项目施工清单</Link><br/></Menu.Item>
                <Menu.Item key="/manager-lists">
                  <Link to="/manager-lists">项目经理配置</Link><br/></Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className={styles.main}>
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export {MainLayout}
