import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '~/ui/components/Button';

storiesOf('Button', module)
  .add('default', () => <Button>Default</Button>)
  .add('primary / ghost', () => (
    <div>
      <Button color="primary">Primary</Button>{' '}
      <Button color="primary" ghost>
        Primary + Ghost
      </Button>
    </div>
  ))
  .add('pinky', () => <Button color="pinky">Pinky~</Button>);
