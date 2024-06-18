//

import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  text: {
    color: '#ffffff',
  },
});

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  text?: string;
  onPress?: () => unknown;
};

export const TextButton = (props: Props) => {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={styles.text}>{props.text ?? ''}</Text>
    </Pressable>
  );
};
