import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';
import BasePropsType from './PropsType';

export interface SliderProps extends BasePropsType {
  prefixCls?: string;
  marks?: { [key: number]: string };
  dots?: boolean;
  included?: boolean;
  maximumTrackStyle?: React.CSSProperties;
  minimumTrackStyle?: React.CSSProperties;
  handleStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
  railStyle?: React.CSSProperties;
}

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
  };
  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcSlider {...this.props} /></div>
    );
  }
}
