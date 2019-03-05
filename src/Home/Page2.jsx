import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';

const pageData = [
  {
    title: '工业设计',
    content: '提供企业级应用的 UI 设计方案与技术实现',
    links: [
      <a key="0" href="#" target="_blank">Web&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="1" href="#" target="_blank">Mobile&nbsp;&nbsp;<Icon type="right" /></a>,
    ],
    Bg: Tetris,
  },
  {
    title: '数据分析可视化',
    content: '简单、专业、拥有无限可能的数据可视化方案',
    links: (<a href="#" target="_blank">查看详情&nbsp;&nbsp;<Icon type="right" /></a>),
    Bg: Column,
  },
  {
    title: '小程序',
    content: '智能、自然、惊艳的互联网互动体验',
    links: (<a>敬请期待</a>),
    Bg: Coordinate,
  },
  {
    title: '全球智能商盟平台',
    content: '金融、房地产、旅游、教育四大领域，全数字化智能服务平台',
    links: (<a href="http://www.uuwill.vip" target="_blank">查看详情&nbsp;&nbsp;<Icon type="right" /></a>),
    full: true,
    Bg: Building,
  },
];

export default class Page2 extends React.Component {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>可靠的技术实力</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}