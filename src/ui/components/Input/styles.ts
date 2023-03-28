import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: COLORS.grey2,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 5,
  },
});

export default styles;
