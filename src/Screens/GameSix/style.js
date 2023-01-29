import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import color from '../../Themes/color';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imagebg: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  player: {
    color: color.white,
    height: '17%',
    width: '25%',
  },
  currentPlayer: {
    borderColor: 'white',
    width: '25%',
    height: '12%',
    alignItems: 'center',
  },
  one: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  button: {
    borderWidth: 2,
    flex: 1,
    borderColor: color.darkpink,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    elevation: 2,
  },
  main: {
    width: '95%',
    flex: 1 / 1.5,
    padding: 5,
    borderRadius: 7,
    backgroundColor: 'transparent',
    marginTop: '10%',
  },
  title: {
    color: color.white,
    fontSize: 32,
    fontWeight: '700',
  },
  replayView: {
    alignSelf: 'flex-end',
  },
  replay: {
    borderWidth: 2,
    borderColor: 'white',
    marginRight: '5%',
    borderRadius: 5,
    backgroundColor: color.rgbablack,
    padding: 8,
  },
  back: {
    left: 10,
    position: 'absolute',
  },
  textPlayer: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    width: width / 1.5,
  },
});
