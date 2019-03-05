import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>关于我们</h2>
              <div>
                <a style={{cursor:'default'}}>量子IT科技公司</a>
              </div>
              <div>
                <p> 新超越集团总部位于世界一流的商业中心多伦多。多年来致力于四大领域及两大产业和两大平台，其中包括金融，地产，旅游，教育领域和文化，健康产业，打造全球智能商盟平台，奠定了集团在全球市场领先的商业地位。</p>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>相关链接</h2>
              <div>
                <a target="_blank" href="http://www.uuwill.vip">全球智能商贸平台</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://eduen.happyneg.net">教育</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://darong.happyneg.net">旅游</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://house.happyneg.net">地产</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://ci.happyneg.net">咨询投资</a>
              </div>
            
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                联系我们
              </h2>
              <div>
                <a target="_blank" href="https://www.google.com/maps/place/250+Sheppard+Ave+E,+North+York,+ON+M2N+6M9/@43.764198,-79.4022791,17z/data=!3m1!4b1!4m5!3m4!1s0x882b2d5d29c9feb7:0x1aa0423e2f0231ad!8m2!3d43.764198!4d-79.4000904">地址</a>
                <span> - </span>
                <span>250 Sheppard Ave East. North York, Ontario, Canada</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="tel:416-224-0386">联系电话</a>
                <span> - </span>
                <span>+1 416-224-0386</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="mailto:wuzhou331@gmail.com">Email</a>
                <span> - </span>
                <span>wuzhou331@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={24} sm={24}>
          <span>Copyright © 2019 LiangZi IT Inc. All Rights Reserved.</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
