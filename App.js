import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/customComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomComponent />
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
