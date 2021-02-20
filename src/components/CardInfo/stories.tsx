import { Story, Meta } from '@storybook/react/types-6-0';
import CardInfo from '.';

export default {
  title: 'CardInfo',
  component: CardInfo
} as Meta;

export const Default: Story = () => <CardInfo color="otherTitle" />;
