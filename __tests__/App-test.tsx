import 'react-native';
import { ContainerApp } from '@/containers/ContainerApp';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ContainerApp />);
});
