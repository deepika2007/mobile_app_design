import { StyleSheet, View } from 'react-native';
import CustomComponent from './src/screens/customComponent';
import NavigateContainer from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigateContainer />
      {/* <CustomComponent /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
