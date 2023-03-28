import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

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
  tabContainer: {
    height: 50,
    backgroundColor: COLORS.grey2,
  },
  tabStyle: {
    backgroundColor: COLORS.grey2,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  activeTab: {
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10,
  },
  tabText: {
    color: '#444444',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#888888',
  },
});

export default styles;
