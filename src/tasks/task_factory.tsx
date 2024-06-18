//

import { SpeechCardTask } from './speech_card_task';

import { Task } from './task';

export class TaskFactory {
  static create(task: Task, next?: () => void): JSX.Element {
    switch (task.type) {
      case 'speech_card':
        return <SpeechCardTask next={next} {...task} />;
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }
}
