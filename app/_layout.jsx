import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="details"
        options={({ route }) => ({
          title: route.params?.username
            ? `Details for ${route.params.username}`
            : 'Details',
        })}
      />
    </Stack>
  );
}
