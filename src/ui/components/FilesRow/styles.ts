import { StyleSheet } from 'react-native';
// import { scale, verticalScale } from 'react-native-size-matters/extend';

// import { COLORS } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 30,
    width: 30,
  },
});

export default styles;
