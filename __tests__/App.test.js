import React from 'react';
import App from '../src/App';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchSnapshot();
});