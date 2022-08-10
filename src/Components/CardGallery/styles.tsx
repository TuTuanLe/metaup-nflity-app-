import {StyleSheet} from 'react-native';

import {Theme} from '../../common/theme';
import {WidthScreen} from '@common/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,
    position: 'relative',
  },
  button: {
    marginHorizontal: 30,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    width: 50,
    borderRadius: 25,
  },
  image: {
    borderRadius: 5,
  },
  title: {
    fontSize: 8,
    marginLeft: 5,
    lineHeight: 10,
    fontWeight: '400',
    color: Theme.colors.primary,
  },
  inline: {
    marginHorizontal: 30,
    marginTop: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAccount: {
    color: Theme.colors.textGray,
    fontSize: 8,
    lineHeight: 10,
    fontWeight: '400',
    marginRight: 3,
  },
  description: {
    marginHorizontal: 30,
    fontWeight: '700',
    fontSize: 12,
    color: Theme.colors.lBlack,
    marginTop: 3,
    lineHeight: 15,
  },
  inlineLink: {
    marginHorizontal: 30,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  link: {
    marginRight: 5,
    fontSize: 8,
  },
  value: {
    marginLeft: 10,
    color: Theme.colors.lBlack,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
  information: {
    flex: 1,
  },
  detail: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  des: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginHorizontal: 20,
  },
  txtDes: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDesCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Theme.colors.gray,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 12,
    color: Theme.colors.gray,
  },
  values: {
    fontFamily: Theme.fontFamily.SFPro,
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
    fontStyle: 'normal',
  },
  heart: {
    position: 'absolute',
    right: 0,
    margin: 12,
  },
});

export default styles;
