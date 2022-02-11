/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {Responsive, statusbarHeight} from '../layouts/Layout';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginTop: statusbarHeight,
  },
  headerText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 30,
  },
  h1Text: {
    fontSize: SIZES.h1,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  h2Text: {
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontWeight: '500',
  },
  h3Text: {
    color: COLORS.black,
    fontSize: SIZES.h3,
  },
  h4Text: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: '500',
  },
  h4TextWhite: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: '500',
  },
  h5Text: {
    color: COLORS.black,
    fontSize: SIZES.h5,
  },
  headerIcons: {
    width: Responsive.width(30),
    height: Responsive.height(30),
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  shadow: {
    elevation: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  backButtonContainer: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
  },
});

export default commonStyles;
