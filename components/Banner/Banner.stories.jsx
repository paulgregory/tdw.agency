import { Banner } from './Banner'
import { Underline } from '../Embelishments/Underline/Underline'

const meta = {
  title: 'Sections/Banner',
  component: Banner,
  parameters: {
    surface: 'dark',
    layout: 'fullscreen',
  },
}

export default meta

export const Default = {
  args: {
    title: (
      <>Our <Underline colour='mint'>packages</Underline></>
    ),
    body: (
      <p className='lg:text-xl'>We offer a range of packages to suit your needs.</p>
    ),
    linkText: 'View packages',
    linkUrl: '/packages',
  },
}
