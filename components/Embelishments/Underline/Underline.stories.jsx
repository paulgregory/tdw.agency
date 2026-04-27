import { Underline } from './Underline'

const meta = {
  title: 'Embelishments/Single underline',
  component: Underline,
  argTypes: {
    colour: {
      control: 'inline-radio',
      options: ['mint', 'aqua', 'lavender', 'orange', 'peach', 'steel', 'white'],
    },
    animate: {
      control: 'boolean',
    },
  }
}

function Template(args) {
  return (
    <h2 className='text-3xl font-bold text-navy'>
      Wow, this is <Underline {...(args)}>embelished</Underline> text.
    </h2>
  )
}

export default meta

export const Default = Template.bind({
  args: {
    colour: 'mint',
  },
})
