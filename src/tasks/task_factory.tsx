//

import { MorphemeTapCardTask } from './morpheme';

import { Task } from './task';

export class TaskFactory {
  static create(task: Task, next?: () => void): JSX.Element {
    switch (task.type) {
      case 'morpheme/tap_card':
        return <MorphemeTapCardTask next={next} {...task} />;
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }
}
