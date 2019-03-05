import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" isMobile={this.state.isMobile} />,
        <Page3 key="page3" isMobile={this.state.isMobile}/>,
        <Footer key="footer" />,
        <DocumentTitle key="title" title="LiangZi IT Inc." />,
      ]
    );
  }
}
export default Home;
