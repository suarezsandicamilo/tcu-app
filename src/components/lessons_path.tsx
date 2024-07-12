//

import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';

import { IconButton } from './icon_button';

const styles = StyleSheet.create({
  button: {
    margin: 16,
  },
  container: {
    alignItems: 'center',
  },
});

export const LessonsPath = () => {
  const router = useRouter();

  return (
    <ScrollView
      style={{
        width: Dimensions.get('screen').width,
      }}
    >
      <View style={styles.container}>
        <IconButton
          style={styles.button}
          onPress={() => {
            router.navigate(`/lesson?id=1`);
          }}
        />
        <IconButton
          style={styles.button}
          onPress={() => {
            router.navigate(`/lesson?id=2`);
          }}
        />
      </View>
    </ScrollView>
  );
};
