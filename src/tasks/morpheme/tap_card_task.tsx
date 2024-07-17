//

import { SpeechCard } from '@/components';

import { speak } from './../../speech';

type Props = {
  instruction?: string;
  image?: string;
  sentence?: string;
  next?: () => void;
};

export const MorphemeTapCardTask = (props: Props) => {
  speak(props.instruction)();

  return (
    <SpeechCard
      highlightColor='#c8e6c9ff'
      image={props.image}
      sentence={props.sentence}
      onPress={speak('', props.next)}
    />
  );
};
