import React from 'react';
import { Input } from '../src/components/common/';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const input = renderer.create(
    <Input 
      label="test"
      placeholder="test"
      value="test"
      onChangeText={() => null}
      length={1}
    />
  ).toJSON();
  expect(input).toMatchSnapshot();
});

