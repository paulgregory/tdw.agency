import '../styles/tailwind.css'
import { createElement } from 'react'

/** @type {import('@storybook/react').Preview} */
const preview = {
  decorators: [
    (Story, context) => {
      if (context.parameters.surface === 'dark') {
        return createElement(
          'div',
          { className: 'min-h-dvh bg-navy' },
          createElement(Story)
        )
      }

      return createElement(Story)
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
