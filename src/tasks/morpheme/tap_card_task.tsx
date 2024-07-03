//

import { SpeechCard } from './../../components';

import { speak } from './../../util';

type Props = {
  instruction?: string;
  picture?: string;
  sentence?: string;
  next?: () => void;
};

export const MorphemeTapCardTask = (props: Props) => {
  speak(props.instruction)();

  return (
    <SpeechCard
      picture={props.picture}
      sentence={props.sentence}
      onPress={speak('', props.next)}
    />
  );
};
