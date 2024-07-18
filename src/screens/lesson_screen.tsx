//

import { useEffect, useState } from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import { Button, ProgressBar } from '@/components';

import { Lesson, LessonsController, Task } from '@/controllers';

import { TaskFactory } from '@/tasks';

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

  const [lesson, setLesson] = useState<Lesson>(undefined);

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fn = async () => {
      try {
        const controller = new LessonsController();

        setLesson(await controller.get(params.id));
      } catch (error) {
        console.error(error);
      }
    };

    fn();
  }, []);

  useEffect(() => {
    const fn = async () => {
      try {
        const controller = new LessonsController();

        if (lesson != undefined) {
          const tasks = await controller.getTasks(lesson.id);

          setTasks(tasks);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fn();
  }, [lesson]);

  const [progress, setProgress] = useState(0);

  return (
    <SafeAreaView style={styles.container_1}>
      <View style={styles.container_2}>
        <Button
          icon='arrow-left'
          style={{
            height: 40,
            width: 40,
          }}
          onPress={() => {
            router.back();
          }}
        />
        <Button
          icon='question'
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
      <View style={styles.container_3}>
        <ProgressBar value={0.25} />
      </View>
      <View style={styles.container_4}>
        {TaskFactory.create(tasks[progress], () => {
          setProgress((p) => p + 1);
        })}
      </View>
    </SafeAreaView>
  );
};
