import { TintedImage } from './TintedImage'

const meta = {
  title: 'Components/Tinted Image',
  component: TintedImage,
  argTypes: {
    colour: {
      control: 'inline-radio',
      options: ['mint', 'aqua', 'lavender'],
    },
  },
}

export default meta

export const Default = {
  args: {
    colour: 'mint',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
    alt: 'A beautiful landscape',
  },
}
