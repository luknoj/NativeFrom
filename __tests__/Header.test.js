import React from 'react';
import { Header } from '../src/components/common/';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const header = renderer.create(<Header title="test" />).toJSON();
  expect(header).toMatchSnapshot();
});