import { StyleSheet } from 'react-native';
// import { scale, verticalScale } from 'react-native-size-matters/extend';

// import { COLORS } from 'styles';

const styles = StyleSheet.create({
  sectionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
    marginVertical: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default styles;
