import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colour: {
      control: 'inline-radio',
      options: ['mint', 'navy'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'normal', 'large', 'xlarge'],
    },
  },
}

export default meta

export const Default = {
  args: {
    label: 'Contact us',
    colour: 'mint',
    size: 'normal',
    href: '/',
  },
}
