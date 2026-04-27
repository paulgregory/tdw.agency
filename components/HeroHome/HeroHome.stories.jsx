import { Underline } from '../Embelishments/Underline/Underline'
import { HeroHome } from './HeroHome'

const meta = {
  title: 'Sections/Hero - Home Page',
  component: HeroHome,
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
        We help ambitious ideas land{' '}
        <Underline colour='mint' animate>properly</Underline>
      </>
    ),
    linkUrl: '/about-us',
    linkText: 'More about us',
  },
}
