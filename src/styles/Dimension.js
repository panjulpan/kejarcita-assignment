import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Dimension = {
  height: height,
  width: width,
  dimTotal: height + width,
};

export default Dimension;
