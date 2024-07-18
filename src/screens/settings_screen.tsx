//

import { useState } from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Button, Modal } from '@/components';

import { LessonsController, TasksController } from '@/controllers';

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
});

export const SettingsScreen = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container_1}>
      <Modal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Text>Database Synchronized!</Text>
      </Modal>
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
        <Button
          icon='database'
          onPress={async () => {
            try {
              const controllers = [
                new LessonsController(),
                new TasksController(),
              ];

              for (const controller of controllers) {
                await controller.sync();
              }

              setVisible(true);
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
