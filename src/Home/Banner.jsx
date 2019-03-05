import React from 'react';
import PropTypes from 'prop-types';
import './static/banner.less';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {

    return (
        <div id="react-content">
          <section id="video-container">
            <video autoPlay muted loop>
              <source src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site" />
            </video>
            <div className="overlay">
              <div className="homepage-title">
                <div className="title">LiangZi IT Inc.</div>
                <p className="content">量子科技致力于提供一站式
                  <br /> 专业可靠、无限可能的平台开发，数据分析的最佳实践。
                </p>
                <a className="link" href="#service"><button className="btn-more">了解更多</button></a>
              </div>
              <img id="arrow" src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg" width="64" height="64"></img>
            </div>
          </section>
        </div>
    );
  }
}

export default Banner;
