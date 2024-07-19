//

import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Button } from '@/components';

const styles = StyleSheet.create({
  container_1: {
    flex: 1,
    marginTop: 40,
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
  },
  container_3: {
    alignItems: 'center',
    flex: 15,
    justifyContent: 'space-evenly',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  paragraph: {
    flexDirection: 'row',
  },
});

export const CreditsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container_1}>
      <View style={styles.container_2}>
        <Button
          icon='arrow-left'
          style={{
            height: 40,
            width: 40,
          }}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.container_3}>
        <View style={styles.paragraph}>
          <Text>Icons made by </Text>
          <Text
            style={styles.link}
            onPress={() => {
              Linking.openURL('https://www.freepik.com/');
            }}
          >
            Freepik
          </Text>
          <Text> from </Text>
          <Text
            style={styles.link}
            onPress={() => {
              Linking.openURL('https://www.flaticon.com/');
            }}
          >
            Flaticon
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
