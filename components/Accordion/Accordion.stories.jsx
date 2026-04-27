import { Accordion } from "./Accordion"

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    allowMultiple: {
      control: 'boolean',
    },
  },
}

export default meta

export const Default = {
  args: {
    items: [
      {
        label: 'Lorem ipsum dolor 1',
        description: (<p>Maecenas id massa iaculis tellus tristique fermentum. Curabitur bibendum aliquam urna, vel cursus nisl ultrices vel. Phasellus consectetur diam at nibh eleifend facilisis. Donec hendrerit sapien nec velit facilisis, non malesuada est lacinia. Nam vulputate placerat quam, nec tempor mauris consectetur sit amet.</p>),
      },
      {
        label: 'Lorem ipsum dolor 2',
        description: (<p>Maecenas id massa iaculis tellus tristique fermentum. Curabitur bibendum aliquam urna, vel cursus nisl ultrices vel. Phasellus consectetur diam at nibh eleifend facilisis. Donec hendrerit sapien nec velit facilisis, non malesuada est lacinia. Nam vulputate placerat quam, nec tempor mauris consectetur sit amet.</p>),
      },
      {
        label: 'Lorem ipsum dolor 3',
        description: (<p>Maecenas id massa iaculis tellus tristique fermentum. Curabitur bibendum aliquam urna, vel cursus nisl ultrices vel. Phasellus consectetur diam at nibh eleifend facilisis. Donec hendrerit sapien nec velit facilisis, non malesuada est lacinia. Nam vulputate placerat quam, nec tempor mauris consectetur sit amet.</p>),
      },
    ],
    allowMultiple: false,
  },
}
