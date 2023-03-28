import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 5,
    // paddingLeft: 20,
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  positionText: {
    color: COLORS.grey,
  },
  icon: {
    fontWeight: '600',
    fontSize: 18,
    paddingRight: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingRight: 10,
  },
});

export default styles;
