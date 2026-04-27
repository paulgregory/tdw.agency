import { ProofPoints } from './ProofPoints'

const meta = {
  title: 'Sections/Proof Points',
  component: ProofPoints,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default = {
  args: {
    title: 'Why choose us',
    proofPoints: [
      {
        title: 'We are experts in our field',
        description:
          'With over 20 years of experience, we have a proven track record of delivering successful projects for our clients.',
      },
      {
        title: 'We are passionate about what we do',
        description:
          'We are dedicated to helping our clients achieve their goals and are always looking for new and innovative ways to solve problems.',
      },
      {
        title: 'We have a strong network of partners',
        description:
          'We have established relationships with a wide range of industry experts and can leverage these connections to benefit our clients.',
      },
    ],
  },
}
