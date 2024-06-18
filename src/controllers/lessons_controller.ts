//

import z from 'zod';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Lessons } from './../../data/lessons';

import { TaskSchema } from './../tasks/task';

export const LessonSchema = z.object({
  id: z.number(),
  progress: z.number(),
  tasks: z.array(TaskSchema),
});

export type Lesson = z.infer<typeof LessonSchema>;

export class LessonsController {
  static readonly prefix = 'lesson:';

  static async sync() {
    const keys = await this.keys();

    for (const key of keys) {
      await AsyncStorage.removeItem(key);
    }

    for (const lesson of Lessons) {
      LessonSchema.parse(lesson);

      AsyncStorage.setItem(this.prefix + lesson.id, JSON.stringify(lesson));
    }
  }

  static async set(lesson: Lesson) {
    LessonSchema.parse(lesson);

    await AsyncStorage.setItem(this.prefix + lesson.id, JSON.stringify(lesson));
  }

  static async get(id: number): Promise<Lesson> {
    const json = (await AsyncStorage.getItem(this.prefix + id)) ?? '{}';

    const object = JSON.parse(json);

    LessonSchema.parse(object);

    return object;
  }

  static async delete(id: number) {
    await AsyncStorage.removeItem(this.prefix + id);
  }

  static async keys(): Promise<string[]> {
    const keys = await AsyncStorage.getAllKeys();

    return keys.filter((key) => key.startsWith(this.prefix));
  }
}
