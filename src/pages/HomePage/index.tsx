import logo from '@/assets/home/buyer-logo.png';
import advImage from '@/assets/home/adv.png';
import advTxt from '@/assets/home/adv-txt.png';
import subImage from '@/assets/home/subadv.png';
import subTxt from '@/assets/home/sub-txt.png';
import store1 from '@/assets/home/store1.png';
import store2 from '@/assets/home/store2.png';
import store3 from '@/assets/home/store3.png';
import store4 from '@/assets/home/store4.png';
import './index.less';
import { UserOutlined, ShoppingOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Flex } from 'antd';
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
const recommendList = [
  {
    img: store1,
    txt: 'New York',
  },
  {
    img: store2,
    txt: 'New York',
  },
  {
    img: store3,
    txt: 'New York',
  },
  {
    img: store4,
    txt: 'New York',
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
            <input className="search-ipt" type="text" placeholder="Search anthing" />
          </div>
          <div className="menus">
            <Space size={'large'}>
              <div>VENDORS</div>
              <div>NEW IN</div>
              <div>BSET OF BEST</div>
              <div>PROMOTION</div>
              <div>PREMIUM</div>
              <div>LIVE</div>
            </Space>
          </div>
        </div>
        <div className="header-right">
          <div className="btns">
            <Space>
              <Space>
                <UserOutlined />
                Account
              </Space>
              <Space>
                <ShoppingOutlined />
                Shoping
              </Space>
            </Space>
          </div>
          <Button type="primary" style={{ width: '100%', background: '#1C3B5E' }} shape="round">
            DROPHIPPING
          </Button>
        </div>
      </div>
      <div className="main-adv" style={{ backgroundImage: `url(${advImage})` }}>
        <img src={advTxt} alt="" />
      </div>
      <div className="sub-adv">
        <img src={subImage} alt="" />
        <div className="sub-adv-right">
          <img src={subTxt} alt="" />
        </div>
      </div>
      <div className="newvendos">NEW VENDORS</div>
      <div className="recommend">
        <Flex gap="middle" justify="space-between">
          {recommendList.map((item, index) => (
            <div className="recommend-item" key={index}>
              <img style={{ height: '355px', width: '330px' }} src={item.img} alt="" />
            </div>
          ))}
        </Flex>
      </div>
      <div className="newvendos">SHOP ALL NEW VENDORS</div>
    </div>
  );
}
