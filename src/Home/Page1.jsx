import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page1 } from './data';


export default class Page1 extends React.Component {

  render() {
    const children = page1.children.map((item, i) => {
      return (
        <Col md={8} xs={24} key={i.toString()} className="item">
          <a
            className="link"
            href={item.link}
            target="_blank"
          >
            <div className="jump">
              <img src={item.src} style={{ width: '190px', height: '180px' }} alt="img" />
            </div>
            <div className="title">{item.title}</div>
            <p>{item.content}</p>
          </a>
        </Col>);
    });
    return (
      <section id="service">
        <div className="page-wrapper page1" id="page1">
          <div className="page">
            <div className="wrap-title">
              <h1>{page1.title}</h1>
              <div className="title-bar"></div>
            </div>
            <i />
            <OverPack>
              <QueueAnim key="queue" type="bottom" leaveReverse component={Row}>
                {children}
              </QueueAnim>
            </OverPack>
          </div>
        </div>
      </section>);
  }
}