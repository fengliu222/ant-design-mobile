/* tslint:disable:no-console */
import { View, Text } from 'react-native';
import { DatePickerView } from 'antd-mobile';
import React from 'react';

export default class DatePickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  }
  onValueChange = (...args) => {
    console.log(args);
  }
  render() {
    return (<View>
      <Text style={{ margin: 16 }}>Start DateTime</Text>
      <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
      <Text style={{ margin: 16 }}>End DateTime</Text>
      <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
    </View>);
  }
}
