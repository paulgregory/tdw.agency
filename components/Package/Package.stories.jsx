import { Package } from './Package'

const meta = {
  title: 'Sections/Package',
  component: Package,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default = {
  args: {
    icon: 'clarity',
    title: 'Clarity Sprint',
    subTitle: 'Define what to build',
    intro: 'Used when the vision exists, but scope, architecture and delivery approach still need defining.',
    whatWeDo: (
      <>
        <p>A focused discovery combining product thinking, UX and solution architecture.</p>
        <ul>
          <li>Stakeholder discovery and product workshops.</li>
          <li>Validation of assumptions and risks.</li>
          <li>Definition of platform architecture and delivery approach.</li>
        </ul>
      </>
    ),
    whatYouGain: (
      <>
        <ul>
          <li>Clear, build-ready technical direction.</li>
          <li>Documented decisions and validated assumptions.</li>
          <li>Recommended platform architecture and delivery plan.</li>
          <li><strong>Confidence to proceed</strong>, with reduced risk and clearer scope.</li>
        </ul>
      </>
    ),
    whyItMatters: (
      <>
        <p>Digital initiatives often stall between vision and delivery due to unclear scope, competing priorities and technical uncertainty.</p>
        <p>The Clarity Sprint resolves these risks quickly, aligning stakeholders and defining the right technical direction before investment.</p>
      </>
    ),
    idealFor: (
      <>
        <ul>
          <li>Organisations planning a new platform or major rebuild.</li>
          <li>Teams with a vision but unclear technical direction.</li>
          <li>Digital initiatives that have stalled before delivery.</li>
        </ul>
      </>
    ),
    duration: (
      <p>A typical Clarity Sprint runs over <strong>2-4 weeks</strong> and provides the foundation for successful delivery.</p>
    ),
    colour: 'lavender',
  },
}
