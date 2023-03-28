import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    paddingVertical: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerProcent: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  firstElement: {
    backgroundColor: COLORS.purple,
    padding: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  secondElement: {
    backgroundColor: '#DC9839',
    padding: 3,
    marginHorizontal: 4,
  },
  thirdElement: {
    backgroundColor: '#85BA55',
    padding: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default styles;
