// import { Story, Meta } from '@storybook/react/types-6-0';
// import TableContent from '.';

// export default {
//   title: 'TableContent',
//   component: TableContent
// } as Meta;

// export const Default: Story = () => <TableContent />;

import { storiesOf } from '@storybook/react';

import Table from '.';

storiesOf('Table', module).add('Default', () => <Table>Default</Table>);
