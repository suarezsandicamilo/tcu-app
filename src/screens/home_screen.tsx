//

import { SafeAreaView, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import { LessonsPath } from '@/components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 40,
  },
});

export const HomeScreen = () => {
  const router = useRouter();

  const gesture = Gesture.Pan().onEnd(() => {
    router.navigate('/settings');
  });

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <GestureDetector gesture={gesture}>
          <LessonsPath />
        </GestureDetector>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
