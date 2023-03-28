import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 20,
  },
  img: {
    height: 80,
    width: 60,
    marginRight: 15,
  },
  mainContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 10,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingBottom: 10,
    fontSize: 18,
  },
  descriptionText: {
    fontWeight: '500',
  },
  positionText: {
    color: COLORS.grey,
  },
  onlineText: {
    color: COLORS.red,
  },
});

export default styles;
