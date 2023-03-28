import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    // height: 48,
    // backgroundColor: COLORS.purple,
  },
  headerContainer: {
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.purple,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 30,
    justifyContent: 'space-between',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  campaignText: {
    paddingTop: 20,
    paddingLeft: 60,
  },
  rightContainer: {
    width: '90%',
  },
  committee: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 60,
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
