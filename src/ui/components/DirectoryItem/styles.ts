import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '600',
  },
  rowImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  labelRow: {
    backgroundColor: '#F0F3E9',
    padding: 5,
    borderRadius: 16,
    marginRight: 10,
    marginBottom: 10,
  },
  bouncyChecbokInconStyle: {
    borderColor: 'yellow',
    borderWidth: 1,
  },
  icon: {
    fontWeight: '600',
    fontSize: 18,
  },
  textColor: {
    color: '#826F75',
  },
});

export default styles;
