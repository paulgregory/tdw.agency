import { Accordion } from "../Accordion/Accordion";
import { PackageCard } from "../PackageCard/PackageCard";

export function Packages({}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
      <PackageCard
        title='01 &mdash; Clarity Sprint'
        subTitle='Define what to build'
        intro='Used when the vision exists, but scope, architecture and delivery approach still need defining.'
        colour='lavender'
      >
        <Accordion
          items={[
            {
              label: 'Why it matters',
              description:
                <>
                  <p>Digital initiatives often stall between vision and delivery due to unclear scope, competing priorities and technical uncertainty.</p>
                  <p>The Clarity Sprint resolves these risks quickly, aligning stakeholders and defining the right technical direction before investment.</p>
                </>
            },
            {
              label: 'What we do',
              description:
                <>
                  <p>A focused discovery combining product thinking, UX and solution architecture.</p>
                  <ul>
                    <li>Stakeholder discovery and product workshops.</li>
                    <li>Validation of assumptions and risks.</li>
                    <li>Definition of platform architecture and delivery approach.</li>
                  </ul>
                </>
            },
            {
              label: 'What you gain',
              description:
                <>
                  <ul>
                    <li>Clear, build-ready technical direction.</li>
                    <li>Documented decisions and validated assumptions.</li>
                    <li>Recommended platform architecture and delivery plan.</li>
                    <li><strong>Confidence to proceed</strong>, with reduced risk and clearer scope.</li>
                  </ul>
                </>
            },
            {
              label: 'Ideal for',
              description:
                <>
                  <ul>
                    <li>Organisations planning a new platform or major rebuild.</li>
                    <li>Teams with a vision but unclear technical direction.</li>
                    <li>Digital initiatives that have stalled before delivery.</li>
                  </ul>
                  <p>A typical Clarity Sprint runs over <strong>2-4 weeks</strong> and provides the foundation for successful delivery.</p>
                </>
            }
          ]}
        />
      </PackageCard>
      <PackageCard
        title='02 &mdash; Platform Audit'
        subTitle='Understand what exists'
        intro='Used when a live platform exists but its health, risks and future evolution need clearer definition.'
        colour='aqua'
      >
        <Accordion
          items={[
            {
              label: 'Why it matters',
              description:
                <>
                  <p>Digital platforms often evolve over time, accumulating technical debt and complexity.</p>
                  <p>A Platform Audit provides a clear view of architecture, performance and UX — helping teams make confident decisions about upgrades, redesigns or replatforming.</p>
                </>
            },
            {
              label: 'What we do',
              description:
                <>
                  <p>A focused technical and experience review of the platform.</p>
                  <ul>
                    <li>Platform architecture review.</li>
                    <li>UX, accessibility and performance evaluation.</li>
                    <li>Prioritised technical and strategic recommendations.</li>
                  </ul>
                </>
            },
            {
              label: 'What you gain',
              description:
                <>
                  <ul>
                    <li>A clear picture of the platform's current health and risks.</li>
                    <li>Prioritised recommendations for improvement.</li>
                    <li>Insight into technical debt, performance and UX gaps.</li>
                    <li>A roadmap for upgrade, redesign or replatforming decisions.</li>
                  </ul>
                </>
            },
            {
              label: 'Ideal for',
              description:
                <>
                  <ul>
                    <li>Organisations managing legacy or complex digital platforms.</li>
                    <li>Websites that are underperforming or difficult to evolve.</li>
                    <li>Teams planning upgrades, redesigns or replatforming initiatives.</li>
                  </ul>
                  <p>A typical Platform Audit runs over <strong>1-2 weeks</strong> and provides clear insight into platform health, risks and opportunities.</p>
                </>
            }
          ]}
        />
      </PackageCard>
      <PackageCard
        title='03 &mdash; Delivery Partnership'
        subTitle='Build and evolve'
        intro='Ongoing collaboration for organisations that need senior technical leadership, UX collaboration and delivery capability.'
        colour='mint'
      >
        <Accordion
          items={[
            {
              label: 'Why it matters',
              description:
                <>
                  <p>Digital platforms need continuous evolution, not just occasional projects. Without strong technical leadership and governance, complexity and technical debt quickly grow.</p>
                  <p>A Delivery Partnership provides the technical direction and UX collaboration needed to evolve platforms with confidence.</p>
                </>
            },
            {
              label: 'What we do',
              description:
                <>
                  <p>Ongoing collaboration across product, UX and development.</p>
                  <ul>
                    <li>Solutions architecture and technical leadership.</li>
                    <li>UX collaboration and front-end development.</li>
                    <li>Platform governance.</li>
                    <li>Continuous improvement.</li>
                  </ul>
                </>
            },
            {
              label: 'What you gain',
              description:
                <>
                  <ul>
                    <li>Senior technical leadership guiding platform evolution.</li>
                    <li>Consistent UX and front-end development practices.</li>
                    <li>Reliable delivery across complex digital initiatives.</li>
                    <li>A scalable platform that improves over time.</li>
                  </ul>
                </>
            },
            {
              label: 'Ideal for',
              description:
                <>
                  <ul>
                    <li>Organisations running long-term digital platforms.</li>
                    <li>Multi-agency delivery environments.</li>
                    <li>Teams needing senior technical leadership and partner support.</li>
                  </ul>
                </>
            }
          ]}
        />
      </PackageCard>
    </div>
  )
}