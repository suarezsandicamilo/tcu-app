//

import { StyleSheet, View } from 'react-native';

import { SpeechCard } from '@/components';

import { shuffle, speak } from './../../util';

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
  picture?: string;
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
            picture={option.picture}
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
