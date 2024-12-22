import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Details() {
  const router = useRouter();
  const { username } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {username || 'Guest'}!</Text>
      <Button title="Go Home" onPress={() => router.push('/')} />
    </View>
  );
}
