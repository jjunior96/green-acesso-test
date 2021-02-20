// import { Story, Meta } from '@storybook/react/types-6-0';
// import Button from '.';

// export default {
//   title: 'Button',
//   component: Button
// } as Meta;

// export const Default: Story = () => <Button />;

import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module).add('Default', () => <Button>Default</Button>);
