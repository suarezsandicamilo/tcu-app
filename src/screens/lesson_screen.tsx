//

import { useEffect, useState } from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import { IconButton, ProgressBar } from './../components';

import { Lesson, LessonsController } from './../controllers';

import { TaskFactory } from './../tasks';

const styles = StyleSheet.create({
  container_1: {
    flex: 1,
    marginTop: 40,
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  container_3: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container_4: {
    alignItems: 'center',
    flex: 14,
    justifyContent: 'space-evenly',
  },
});

export const LessonScreen = () => {
  const router = useRouter();

  const params = useLocalSearchParams<Record<string, string>>();

  const [lesson, setLesson] = useState<Lesson | undefined>(undefined);

  useEffect(() => {
    const fn = async () => {
      try {
        const id = parseInt(params.id);

        setLesson(await LessonsController.get(id));
      } catch (error) {
        console.error(error);
      }
    };

    fn();
  }, []);

  const [progress, setProgress] = useState(0);

  const currentTask = lesson?.tasks[progress];

  const length = lesson?.tasks.length ?? 1;

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
        <IconButton
          name='question'
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
      <View style={styles.container_3}>
        <ProgressBar value={progress / length} />
      </View>
      <View style={styles.container_4}>
        {currentTask != undefined ? (
          TaskFactory.create(currentTask, () => {
            setProgress((p) => p + 1);
          })
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};
