//

import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='settings' />
      <Stack.Screen name='credits' />
      <Stack.Screen name='lesson' />
    </Stack>
  );
};

export default Layout;
