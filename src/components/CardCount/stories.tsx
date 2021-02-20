import { Story, Meta } from '@storybook/react/types-6-0';
import CardCount from '.';

export default {
  title: 'CardCount',
  component: CardCount
} as Meta;

export const Default: Story = () => <CardCount total={12} />;
