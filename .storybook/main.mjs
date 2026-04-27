/** @type {import('@storybook/nextjs-vite').StorybookConfig} */
const config = {
  framework: '@storybook/nextjs-vite',
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
}

export default config
