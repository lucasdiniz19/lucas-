import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./app/assets/images/logo.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.title}>20 caracteres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
