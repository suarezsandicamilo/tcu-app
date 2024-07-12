//

import * as z from 'zod';

import { Controller } from './controller';

import { Tasks } from './../../data';

export const TaskSchema = z.object({
  id: z.string(),
  type: z.string(),
  data: z.record(z.unknown()),
});

export type Task = z.infer<typeof TaskSchema>;

export class TasksController extends Controller<Task> {
  constructor() {
    super('tasks', TaskSchema);
  }

  async sync(): Promise<void> {
    await this.clear();

    const entries = [];

    for (const task of Tasks) {
      entries.push([task.id.toString(), task]);
    }

    await this.setMany(entries);
  }
}
