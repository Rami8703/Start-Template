import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  wrapper: {
    marginLeft: 20,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  subTitleTect: {
    color: '#9C8E9F',
  },
  boldText: {
    fontWeight: '600',
  },
  setctionNameText: {
    color: '#C2C2C2',
  },
  lastChildSection: {
    paddingTop: 10,
  },
});

export default styles;
