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
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  greyText: {
    color: COLORS.grey,
  },
  blueText: {
    color: COLORS.blue,
  },
  redText: {
    color: COLORS.red,
  },
});

export default styles;
