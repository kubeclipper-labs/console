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
import React from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

export default function CustomCheckbox(props) {
  const { value, className, content, disabled, onChange } = props;

  const conf = {
    checked: value,
    className,
    disabled,
    onChange: (e) => {
      onChange(e.target.checked);
    },
  };

  return <Checkbox {...conf}>{content}</Checkbox>;
}

CustomCheckbox.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

CustomCheckbox.defaultProps = {
  value: false,
  content: '',
  onChange: () => {},
};
