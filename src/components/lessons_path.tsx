//

import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Button } from './button';

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
        <Button
          style={styles.button}
          onPress={() => {
            router.navigate(`/lesson?id=1`);
          }}
        />
        <Button
          style={styles.button}
          onPress={() => {
            router.navigate(`/lesson?id=2`);
          }}
        />
        <Button
          icon='gear'
          style={styles.button}
          onPress={() => {
            router.navigate(`/settings`);
          }}
        />
        <Button
          icon='book'
          style={styles.button}
          onPress={() => {
            router.navigate(`/credits`);
          }}
        />
      </View>
    </ScrollView>
  );
};
