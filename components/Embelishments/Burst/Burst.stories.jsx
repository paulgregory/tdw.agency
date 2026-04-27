import { Burst } from './Burst'

const meta = {
  title: 'Embelishments/Burst',
  component: Burst,
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
      Wow, this is an important <Burst {...(args)}>point</Burst>.
    </h2>
  )
}

export default meta

export const Default = Template.bind({
  args: {
    colour: 'mint',
  },
})
