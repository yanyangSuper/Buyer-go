import logo from '@/assets/home/buyer-logo.png';
import './index.less';
import {
  UserOutlined,
  ShoppingOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Formal',
    key: '1',
    // icon: <UserOutlined />,
  },
  {
    label: 'Business',
    key: '2',
    // icon: <UserOutlined />,
  },
  {
    label: 'Casual',
    key: '3',
    // icon: <UserOutlined />,
    // danger: true,
  },
  {
    label: 'Sportswear',
    key: '4',
    // icon: <UserOutlined />,
    // danger: true,
    // disabled: true,
  },
];
export function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <img style={{ height: '180px', width: '180px' }} src={logo} alt="" />
        <div className="header-center">
          <div className="search">
            <Dropdown menu={{ items }}>
              <a onClick={e => e.preventDefault()} className="search-form">
                <Space>
                  All categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <input className="search-ipt" type="text" placeholder="Search" />
          </div>
          <div className="menus">
            <div>VENDORS</div>
            <div>NEW IN</div>
            <div>BSET OF BEST</div>
            <div>PROMOTION</div>
            <div>PREMIUM</div>
            <div>LIVE</div>
          </div>
        </div>
        <div className="header-right">
          <div>
            <UserOutlined />
            Account
          </div>
          <div>
            <ShoppingOutlined />
            Shoping
          </div>
        </div>
      </div>
    </div>
  );
}
