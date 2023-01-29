import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {Navigation} from './Navigasyon';
import store from './Redux';
import {Provider} from 'react-redux';

const App = props => {
  return useMemo(() => (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  ));
};

export default App;
