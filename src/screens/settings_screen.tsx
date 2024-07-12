//

import { SafeAreaView, StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';

import { IconButton } from './../components';

import {
  Lesson,
  LessonsController,
  Task,
  TasksController,
} from './../controllers';

const styles = StyleSheet.create({
  container_1: {
    flex: 1,
    marginTop: 40,
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
  },
  container_3: {
    alignItems: 'center',
    flex: 15,
    justifyContent: 'space-evenly',
  },
});

export const SettingsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container_1}>
      <View style={styles.container_2}>
        <IconButton
          name='arrow-left'
          style={{
            height: 40,
            width: 40,
          }}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.container_3}>
        <IconButton
          name='database'
          onPress={async () => {
            try {
              const controllers = [
                new LessonsController(),
                new TasksController(),
              ];

              for (const controller of controllers) {
                await controller.sync();
              }

              console.log('Sync!');
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
