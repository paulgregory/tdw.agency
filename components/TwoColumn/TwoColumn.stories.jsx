import { Burst } from '../Embelishments/Burst/Burst'
import { TwoColumn } from './TwoColumn'

const meta = {
  title: 'Sections/Two Column',
  component: TwoColumn,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default = {
  args: {
    title: (<>Technical Strategy & <Burst colour='mint'>Architecture</Burst></>),
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    ),
    aside: <div className='bg-grey h-100 aspect-video md:aspect-square rounded-xl'></div>,
  },
}

export const asideMobileFirst = {
  args: {
    title: (<>Technical Strategy & <Burst colour='lavender'>Architecture</Burst></>),
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    ),
    aside: <div className='bg-grey aspect-video md:aspect-square rounded-xl'></div>,
    asideMobileFirst: true,
  },
}

export const asideDesktopFirst = {
  args: {
    title: (<>Technical Strategy & <Burst colour='lavender'>Architecture</Burst></>),
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    ),
    aside: <div className='bg-grey aspect-video md:aspect-square rounded-xl'></div>,
    asideDesktopFirst: true,
  },
}

export const asideAlwaysFirst = {
  args: {
    title: (<>Technical Strategy & <Burst colour='lavender'>Architecture</Burst></>),
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    ),
    aside: <div className='bg-grey aspect-video md:aspect-square object-cover rounded-xl'></div>,
    asideMobileFirst: true,
    asideDesktopFirst: true,
  },
}
