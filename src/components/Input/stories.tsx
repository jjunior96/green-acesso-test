// import { Story, Meta } from '@storybook/react/types-6-0';
// import Input from '.';

// export default {
//   title: 'Input',
//   component: Input
// } as Meta;

// export const Default: Story = () => <Input name="text" />;

import { storiesOf } from '@storybook/react';

import Input from '.';

storiesOf('Input', module).add('Default', () => <Input name="input" />);
