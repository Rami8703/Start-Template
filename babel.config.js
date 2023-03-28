const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'inline-dotenv',
      {
        path: path.join(__dirname, '.env'),
      },
    ],
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src/',
        },
      },
    ],
  ],
};
