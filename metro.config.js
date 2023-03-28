const isAppModeStorybook = process.env.APP_MODE === 'storybook';

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        // https://github.com/storybookjs/react-native/issues/152
        inlineRequires: !isAppModeStorybook,
      },
    }),
  },
};
