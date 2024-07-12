//

import { MorphemeSelectCardTask, MorphemeTapCardTask } from './morpheme';

import { Task } from './../controllers';

export class TaskFactory {
  static create(task?: Task, next?: () => void): JSX.Element {
    if (!task) {
      return <></>;
    }

    switch (task.type) {
      case 'morpheme/select_card':
        return <MorphemeSelectCardTask next={next} {...task.data} />;
      case 'morpheme/tap_card':
        return <MorphemeTapCardTask next={next} {...task.data} />;
      default:
        return <></>;
    }
  }
}
