import React from 'react';
import TweenOne from 'rc-tween-one';

function TweenOneG(props) {
  function getAnimation() {
    if (!Array.isArray(props.animation)) {
      return { ...props.animation, duration: 400 };
    }
    return props.animation.map((item, i) => {
      if (!i) {
        return { ...item, duration: 400, delay: Math.random() * 300 };
      }
      return { ...item, duration: 400 };
    });
  }
  return (
    <TweenOne
      component="g"
      {...props}
      animation={
        props.animation ?
          getAnimation() :
          null
      }
    />);
}

export default class Column extends React.PureComponent {
  startTween = false;
  default1Anim = { y: 0 };
  render() {
    const { hover } = this.props;
    return (
      <svg width="328px" height="150px" viewBox="0 0 328 150">
        <defs>
          <linearGradient x1="50%" y1="3.05125957%" x2="50%" y2="157.404891%" id="linearGradient-1">
            <stop stopColor="#39C8FB" offset="0%"></stop>
            <stop stopColor="#1890FF" stopOpacity="0" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="3.05125957%" x2="50%" y2="178.3625%" id="linearGradient-2">
            <stop stopColor="#FAD45B" offset="0%"></stop>
            <stop stopColor="#1890FF" stopOpacity="0" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="3.05125957%" x2="50%" y2="203.500014%" id="linearGradient-3">
            <stop stopColor="#1890FF" offset="0%" />
            <stop stopColor="#1890FF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="3.05125957%" x2="50%" y2="178.3625%" id="linearGradient-4">
            <stop stopColor="#0011ff" offset="0%" />
            <stop stopColor="#0011ff" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="65.2246094%" y1="88.090625%" x2="65.2246094%" y2="0%" id="linearGradient-5">
            <stop stopColor="#0D3CDF" offset="0%"></stop>
            <stop stopColor="#1874F3" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <TweenOneG animation={hover ? [{ y: -20 }, { y: -10 }, { y: -30 }] : this.default1Anim}>
            <g id="Group-33" transform="translate(0.000000, 116.000000)">
              <rect id="Rectangle-15" fill="#FADB14" opacity="0.3" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.03" x="0" y="2" width="20" height="145" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 15 }, { y: 0 }, { y: 25 }] : this.default1Anim} >
            <g id="Group-32" transform="translate(22.000000, 107.000000)">
              <rect id="Rectangle-15" fill="#FA541C" opacity="0.4" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.05" x="0" y="2" width="20" height="154" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 30 }, { y: -10 }, { y: 30 }] : this.default1Anim}>
            <g id="Group-31" transform="translate(44.000000, 48.000000)">
              <rect id="Rectangle-15" fill="#40A9FF" opacity="0.5" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.1" x="0" y="2" width="20" height="213" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -15 }, { y: 0 }, { y: -30 }] : this.default1Anim} >
            <g id="Group-30" transform="translate(66.000000, 63.000000)">
              <rect id="Rectangle-15" fill="url(#linearGradient-2)" opacity="0.6" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="url(#linearGradient-2)" opacity="0.2" x="0" y="2" width="20" height="198" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -20 }, { y: 10 }, { y: -30 }] : this.default1Anim} >
            <g id="Group-29" transform="translate(88.000000, 92.000000)">
              <rect id="Rectangle-15" fill="#9F00FF" opacity="0.65" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.2" x="0" y="2" width="20" height="169" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 20 }, { y: -10 }, { y: 40 }] : this.default1Anim} >
            <g id="Group-28" transform="translate(110.000000, 36.000000)">
              <rect id="Rectangle-15" fill="#26ADFF" opacity="0.85" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="url(#linearGradient-1)" opacity="0.35" x="0" y="2" width="20" height="225" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -20 }, { y: 10 }, { y: -40 }] : this.default1Anim} >
            <g id="Group-26" transform="translate(132.000000, 48.000000)">
              <rect id="Rectangle-15" fill="#FA8C16"  transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="url(#linearGradient-2)"  x="0" y="2" width="20" height="213" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 30 }, { y: 0 }, { y: 50 }] : this.default1Anim}>
            <g id="Group-11" transform="translate(154.000000, 0.000000)">
              <rect id="Rectangle-15" fill="url(#linearGradient-1)" x="0" y="2" width="20" height="261" />
              <rect id="Rectangle-15" fill="#00a5e2" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -30 }, { y: 20 }, { y: -20 }] : this.default1Anim}>
            <g id="Group-41" transform="translate(176.000000, 36.000000)">
              <rect id="Rectangle-15" fill="#0011ff" opacity="0.7" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="url(#linearGradient-5)" x="0" y="2" width="20" height="225" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -20 }, { y: 0 }, { y: -40 }] : this.default1Anim}>
            <g id="Group-34" transform="translate(198.000000, 107.000000)">
              <rect id="Rectangle-15" fill="#FAAD14" opacity="0.75" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.3" x="0" y="2" width="20" height="154" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 10 }, { y: -10 }, { y: 30 }] : this.default1Anim} >
            <g id="Group-35" transform="translate(220.000000, 63.000000)">
              <rect id="Rectangle-15" fill="#EB2F96" opacity="0.65" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.2" x="0" y="2" width="20" height="198" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -10 }, { y: 7 }, { y: -20 }] : this.default1Anim}>
            <g id="Group-36" transform="translate(242.000000, 81.000000)">
              <rect id="Rectangle-15" fill="#A0D911" opacity="0.6" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.12" x="0" y="2" width="20" height="181" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 10 }, { y: -10 }, { y: 20 }] : this.default1Anim}>
            <g id="Group-37" transform="translate(264.000000, 74.000000)">
              <rect id="Rectangle-15" fill="#40A9FF" opacity="0.5" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.1" x="0" y="2" width="20" height="188" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: -30 }, { y: 20 }, { y: -60 }] : this.default1Anim}>
            <g id="Group-39" transform="translate(286.000000, 108.000000)">
              <rect id="Rectangle-15" fill="#FA541C" opacity="0.4" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.05" x="0" y="2" width="20" height="154" />
            </g>
          </TweenOneG>
          <TweenOneG animation={hover ? [{ y: 10 }, { y: -10 }, { y: 10 }] : this.default1Anim}>
            <g id="Group-40" transform="translate(308.000000, 117.000000)">
              <rect id="Rectangle-15" fill="#FADB14" opacity="0.3" transform="translate(10.000000, 1.250000) scale(1, -1) translate(-10.000000, -1.250000) " x="0" y="0.5" width="20" height="1.5" />
              <rect id="Rectangle-15" fill="#1890FF" opacity="0.03" x="0" y="2" width="20" height="145" />
            </g>
          </TweenOneG>
        </g>
      </svg>);
  }
}
