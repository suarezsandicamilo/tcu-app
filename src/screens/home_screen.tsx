//

import { SafeAreaView, StyleSheet } from 'react-native';

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
  return (
    <SafeAreaView style={styles.container}>
      <LessonsPath />
    </SafeAreaView>
  );
};
