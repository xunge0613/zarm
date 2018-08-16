import React, { PureComponent } from 'react';
import { InputBaseProps, InputNumberProps, InputTextareaProps } from './PropsType';
import InputNumber from './InputNumber';
import InputBase from './InputBase';
import InputTextarea from './InputTextarea';

export type InputProps = InputBaseProps | InputNumberProps | InputTextareaProps;

export default class Input extends PureComponent<InputProps, {}> {
  static defaultProps = {
    type: 'text',
  };

  private input;

  constructor(props) {
    super(props);
  }

  focus() {
    if (this.input) {
      this.input.focus();
    }
  }

  blur() {
    if (this.input) {
      this.input.blur();
    }
  }

  render() {
    switch (this.props.type) {
      case 'idcard':
      case 'price':
      case 'number':
        return <InputNumber ref={ele => (this.input = ele)} {...this.props} />;

      case 'textarea':
        return <InputTextarea ref={ele => (this.input = ele)} {...this.props} />;

      case 'text':
        return <InputBase ref={ele => (this.input = ele)} {...this.props} />;

      default:
        return <InputBase ref={ele => (this.input = ele)} {...this.props as InputBaseProps} />;
    }
  }
}
