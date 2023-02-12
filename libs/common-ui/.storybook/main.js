const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [],
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
