import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    width: '70%',
  },
  lberialText: {
    width: '33%',
    color: COLORS.blue,
  },
  moderateText: {
    width: '33%',
    color: COLORS.grey,
  },
  ConservativeText: {
    width: '33%',
    color: COLORS.red,
  },
});

export default styles;
