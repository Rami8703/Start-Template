import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    width: '30%',
    marginTop: 15,
    color: COLORS.grey,
  },
  chartContainer: {
    flexDirection: 'row',
    width: '70%',
    height: '100%',
  },

  seperator: {
    backgroundColor: COLORS.grey,
    width: 1,
    height: '100%',
  },
  positiveProgressContainer: {
    width: '100%',
    justifyContent: 'center',
  },
});

export default styles;
