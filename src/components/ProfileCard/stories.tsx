import { Story, Meta } from '@storybook/react/types-6-0';
import ProfileCard from '.';

export default {
  title: 'ProfileCard',
  component: ProfileCard
} as Meta;

export const Default: Story = () => <ProfileCard />;
