import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
export const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Lottie source={require('../../Themes/loader.json')} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 3,
    height: '100%',
  },
});
