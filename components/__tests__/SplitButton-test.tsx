import * as React from 'react';
import renderer from 'react-test-renderer';

import { SplitButton } from '../navigation/SplitButton';

it(`renders correctly`, () => {
  const tree = renderer.create(<SplitButton />).toJSON();

  expect(tree).toMatchSnapshot();
});

