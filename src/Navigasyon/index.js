import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './stacks/Stack';
import {connect, useSelector} from 'react-redux';
import {TabNavigation} from './tab/Tab';
import {Loader} from '../Screens/Start';

const mapDispatchToProps = dispatch => {
  return {dispatch};
};
const Navigation = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const state = useSelector(state => state.app);

  return useMemo(() => (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  ));
});

export {Navigation};
