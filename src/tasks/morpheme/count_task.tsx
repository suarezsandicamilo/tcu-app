//

import { StyleSheet, View } from 'react-native';

import { Button, SpeechCard } from '@/components';

import { speak } from './../../speech';

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type Props = {
  instruction?: string;
  image?: string;
  sentence?: string;
  words?: string[];
  next?: () => void;
};

export const MorphemeCountTask = (props: Props) => {
  speak(props.instruction)();

  return (
    <View>
      <View style={styles.cardContainer}>
        <SpeechCard
          highlightColor='#c8e6c9ff'
          image={props.image}
          sentence={props.sentence}
          onPress={speak('')}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {props.words.map((word) => {
          return <Button key={word} icon='volume-up' />;
        })}
      </View>
    </View>
  );
};
