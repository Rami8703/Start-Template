import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';
// import { scale, verticalScale } from 'react-native-size-matters/extend';

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: COLORS.purple,
  },
  greyContainer: {
    backgroundColor: COLORS.grey,
  },
  disabledContainer: {
    backgroundColor: COLORS.purple2,
  },
  darkTitle: {
    color: 'black',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});

export default styles;
