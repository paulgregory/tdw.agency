import { DoubleUnderline } from './DoubleUnderline'

const meta = {
  title: 'Embelishments/Double underline',
  component: DoubleUnderline,
  argTypes: {
    colour: {
      control: 'inline-radio',
      options: ['mint', 'aqua', 'lavender', 'orange', 'peach', 'steel', 'white'],
    },
  }
}

function Template(args) {
  return (
    <h2 className='text-3xl font-bold text-navy'>
      Wow, this is <DoubleUnderline {...(args)}>embelished</DoubleUnderline> text.
    </h2>
  )
}

export default meta

export const Default = Template.bind({
  args: {
    colour: 'mint',
  },
})
