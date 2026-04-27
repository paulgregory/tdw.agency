import { PackageIcon } from './PackageIcon'

const meta = {
  title: 'Components/Package Icon',
  component: PackageIcon,
  argTypes: {
    icon: {
      control: 'inline-radio',
      options: ['audit', 'clarity', 'partnership'],
    },
  },
}

export default meta

export const Audit = {
  args: {
    icon: 'audit',
  },
}

export const Clarity = {
  args: {
    icon: 'clarity',
  },
}

export const Partnership = {
  args: {
    icon: 'partnership',
  },
}
