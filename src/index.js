/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import OneSignal from 'react-native-onesignal';
import CodePush from 'react-native-code-push';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

class Index extends Component {
  constructor(props) {
    super(props);

    OneSignal.setNotificationOpenedHandler(
      'f0b7630b-9813-4969-a58c-956b71a4af37',
    );
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
