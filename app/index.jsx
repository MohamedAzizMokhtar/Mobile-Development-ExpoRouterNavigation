import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Index() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    router.push({
      pathname: '/details',
      params: { username },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Link
        href={{
          pathname: '/details',
          params: { username },
        }}
        style={styles.link}
      >
        Go to Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  link: {
    color: 'blue',
    marginTop: 20,
  },
});
