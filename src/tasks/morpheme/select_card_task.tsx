//

import { StyleSheet, View } from 'react-native';

import { SpeechCard } from '@/components';

import { shuffle } from './../../util';

import { speak } from './../../speech';

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 120,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

type Option = {
  id: string;
  correct?: boolean;
  image?: string;
  sentence?: string;
};

type Props = {
  instruction?: string;
  options?: Option[];
  next?: () => void;
};

export const MorphemeSelectCardTask = (props: Props) => {
  const options = shuffle(props.options ?? []);

  speak(props.instruction)();

  return (
    <View style={styles.container}>
      {options.map((option) => {
        return (
          <SpeechCard
            key={option.id}
            highlightColor={option.correct ? '#c8e6c9ff' : '#ffcdd2ff'}
            image={option.image}
            sentence={option.sentence}
            style={styles.card}
            onPress={() => {
              if (option.correct) {
                speak('', props.next)();
              }
            }}
          />
        );
      })}
    </View>
  );
};
