import { StyleSheet, View } from 'react-native';
import CustomComponent from './src/screens/customComponent';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store.js';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomComponent />
      </PersistGate>
    </Provider>
  );
}
