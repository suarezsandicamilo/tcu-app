//

import * as z from 'zod';

import { Controller } from './controller';

import { Task, TasksController } from './tasks_controller';

import { Lessons } from './../../data';

export const LessonSchema = z.object({
  id: z.string(),
  progress: z.number(),
  taskIds: z.array(z.string()),
});

export type Lesson = z.infer<typeof LessonSchema>;

export class LessonsController extends Controller<Lesson> {
  constructor() {
    super('lessons', LessonSchema);
  }

  async sync(): Promise<void> {
    this.clear();

    const entries = [];

    for (const lesson of Lessons) {
      entries.push([lesson.id.toString(), lesson]);
    }

    this.setMany(entries);
  }

  async getTasks(key: string): Promise<Task[]> {
    const lesson = await this.get(key);

    const controller = new TasksController();

    const tasks = lesson.taskIds.map((taskId) =>
      controller.get(taskId.toString())
    );

    return Promise.all(tasks);
  }
}
