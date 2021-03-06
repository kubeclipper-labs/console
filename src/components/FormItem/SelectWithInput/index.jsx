/*
 * Copyright 2021 KubeClipper Authors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React, { Component } from 'react';
import { Select } from 'antd';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      inputVal: undefined,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { value } = nextProps;
    if (value !== prevState.value) {
      return {
        value,
      };
    }
    return null;
  }

  onChange = (val) => {
    this.setState(
      {
        value: val,
        inputVal: undefined,
      },
      () => {
        const { formRef, onChange, name } = this.props;
        formRef?.current && formRef.current.setFieldsValue({ [name]: val });
        onChange && onChange(val);
      }
    );
  };

  onSearch = (value) => {
    !!value &&
      this.setState({
        inputVal: value,
      });
  };

  onBlur = () => {
    const { inputVal } = this.state;
    !!inputVal && this.onChange(inputVal);
  };

  render() {
    const { options = [], filterOption = false, style } = this.props;
    const { value } = this.state;
    return (
      <Select
        showSearch
        value={value}
        style={{ width: '100%', height: '100%', ...style }}
        onChange={this.onChange}
        onSearch={this.onSearch}
        onBlur={this.onBlur}
        filterOption={filterOption}
        onFocus={this.onFocusSelect}
        showArrow={false}
        options={options}
        getPopupContainer={() => document.body}
        allowClear
      />
    );
  }
}
