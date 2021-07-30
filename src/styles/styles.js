import { StyleSheet } from 'react-native';
import colors from './colors';

const appStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
});

export default appStyles;
