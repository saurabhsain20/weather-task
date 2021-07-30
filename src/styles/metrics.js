import { Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const metrics = {
  spacing: {
    spacing0x: 2,
    spacing1x: 4,
    spacing2x: 8,
    spacing3x: 12,
    spacing4x: 16,
    spacing6x: 24,
    spacing8x: 32,
    spacing12x: 48,
    spacing14x: 56,
    spacing18x: 72,
    spacing24x: 96,
  },
  elevation: {
    elevation0: 0,
    elevation1: 1,
    elevation2: 2,
    elevation4: 4,
    elevation6: 6,
    elevation8: 8,
    elevation12: 12,
    elevation16: 16,
    elevation24: 24,
  },
  borderRadius: {
    S: 2,
    N: 4,
    L: 8,
    XL: 16,
  },
  dimensions: {
    width: WIDTH,
    height: HEIGHT,
  },
};
export default metrics;
