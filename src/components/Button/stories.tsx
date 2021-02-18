import { withKnobs, text } from '@storybook/addon-knobs';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const Basic = () => <Button>{text('title', 'Entrar')}</Button>;
