import { Provider } from 'react-redux';
import { StatusBar, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useBootstrapApp } from './useBootstrapApp';

function ContainerApp(): JSX.Element {
  const { isLoading, isError, error, dependencies } = useBootstrapApp();

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <ActivityIndicator />
      </SafeAreaProvider>
    );
  }

  if (isError) {
    Alert.alert('Fatal Error', String(error));
    return <SafeAreaProvider />;
  }

  return (
    <Provider store={dependencies.store}>
      <SafeAreaProvider>
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

export { ContainerApp };
