import { MainMenu } from './MainMenu'

const menuLinks = [
  { title: 'About us', url: '/about-us' },
  { title: 'Services', url: '/services' },
  { title: 'Contact', url: '/contact' },
]

const meta = {
  title: 'Components/Main Menu',
  component: MainMenu,
  parameters: {
    surface: 'dark',
    layout: 'fullscreen',
  },
  args: {
    links: menuLinks,
  },
}

export default meta

export const Default = {
  args: {
    currentPath: '/',
  },
}

export const AboutUsActive = {
  args: {
    currentPath: '/about-us',
  },
}
