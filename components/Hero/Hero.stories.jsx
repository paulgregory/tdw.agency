import { Underline } from '../Embelishments/Underline/Underline'
import { Hero } from './Hero'

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    surface: 'dark',
    layout: 'fullscreen',
  },
}

export default meta

export const Default = {
  args: {
    title: (
      <>
        <Underline colour='mint' animate>About us</Underline>
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
}
