import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import { MAPFIT_API_KEY } from './utils';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './App.less';

export default class SiderDemo extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    collapsed: false
  };

  // componentDidMount() {
  //   window.mapfit.apikey = MAPFIT_API_KEY;
  //   window.geo = new window.mapfit.Geocoder(
  //     MAPFIT_API_KEY,
  //     'https://api.mapfit.com/v2'
  //   );
  // }

  onCollapse = collapsed => this.setState({ collapsed });

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1'>
              <Icon type='pushpin' />
              <span>
                <Link style={{ color: '#fff' }} to='/'>
                  Pois
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='crown' />
              <span>
                <Link style={{ color: '#fff' }} to='/contribute'>
                  Contribute
                </Link>
              </span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  <span style={{ color: '#fff'}}>Profile</span>
                </span>
              }
            >
              <Menu.Item key='3'>
                <span>
                  <Link style={{ color: '#fff' }} to='/my-pois'>
                    My Pois
                  </Link>
                </span>
              </Menu.Item>
              <Menu.Item key='4'>
                <span>
                  <Link style={{ color: '#fff' }} to='/account-info'>
                    Account info
                  </Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='5'>
              <Icon type='heart' />
              <span>
                <Link style={{ color: '#fff' }} to='/feedback'>
                  Provide feedback
                </Link>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className='logo'>DIMOS.IO</div>
          </Header>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>dimos.io ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}
