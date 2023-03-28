import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// @TODO: Move storybook to separate script, as its files are bundled
async function init() {
  const App =
    process.env.APP_MODE === 'storybook'
      ? (await import('./src/containers/ContainerStorybook')).ContainerStorybook
      : (await import('./src/containers/ContainerApp')).ContainerApp;

  AppRegistry.registerComponent(appName, () => App);
}

init();
