//

import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: string;
  icon?: keyof (typeof Icon)['glyphMap'];
  size?: number;
  onPress?: () => unknown;
};

export const Button = (props: Props) => {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Icon
        name={props.icon ?? 'star'}
        color={props.color ?? '#ffffff'}
        size={props.size}
      />
    </Pressable>
  );
};
