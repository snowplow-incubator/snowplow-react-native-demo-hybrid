import { createTracker } from '@snowplow/react-native-tracker';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

let tracker = createTracker("ns1", { endpoint: "http://192.168.100.2:9090" });

export default function App() {
  useEffect(() => {
    tracker.trackScreenViewEvent({ name: "Home" })
  });
  return (
    <View style={styles.container}>
      <Text>A screen view event was tracked from React Native. The native code is periodically tracking a structured event.</Text>
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
