/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/state/store';
import {Navigator} from './src/navigation/Navigator';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={configureStore().store}>
      <Navigator />
    </Provider>
  );
};

export default App;
