//

import { Tabs } from 'expo-router';

import Icon from '@expo/vector-icons/FontAwesome';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name='star' color={color} size={24} />;
          },
        }}
      />
      <Tabs.Screen
        name='lesson'
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name='gear' color={color} size={24} />;
          },
        }}
      />
      <Tabs.Screen
        name='credits'
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name='file' color={color} size={24} />;
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
