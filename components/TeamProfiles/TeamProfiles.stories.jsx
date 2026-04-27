import { TeamProfiles } from './TeamProfiles'
import { DoubleUnderline } from '../Embelishments/DoubleUnderline/DoubleUnderline'

const meta = {
  title: 'Sections/Team profiles',
  component: TeamProfiles,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default = {
  args: {
    title: (<DoubleUnderline colour='orange'>Our story</DoubleUnderline>),
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    ),
    profiles: [
      {
        name: 'John Doe',
        description: 'John specialises in turning complex business objectives into clear, scalable digital products. With a background spanning architecture and front-end delivery, he brings structure to complexity, ensuring platforms are well considered, technically sound and built to scale from the outset.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      },
      {
        name: 'John Doe',
        description: 'John specialises in turning complex business objectives into clear, scalable digital products. With a background spanning architecture and front-end delivery, he brings structure to complexity, ensuring platforms are well considered, technically sound and built to scale from the outset.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      },
    ],
  },
}
