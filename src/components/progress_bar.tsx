//

import { Dimensions, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container_1: {
    backgroundColor: '#bfbfbf',
    borderRadius: 4,
    height: 8,
  },
  container_2: {
    backgroundColor: '#000000',
    borderRadius: 4,
    height: 8,
  },
});

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

type Props = {
  value?: number;
};

export const ProgressBar = (props: Props) => {
  const width_1 = Dimensions.get('screen').width - 64;

  const width_2 = width_1 * clamp(props.value ?? 0, 0, 1);

  return (
    <View
      style={[
        styles.container_1,
        {
          width: width_1,
        },
      ]}
    >
      <View
        style={[
          styles.container_2,
          {
            width: width_2,
          },
        ]}
      ></View>
    </View>
  );
};
