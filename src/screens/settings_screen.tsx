//

import { useState } from 'react';

import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';

import { IconButton } from '@/components';

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
  modal_1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal_2: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    elevation: 2,
    height: 175,
    justifyContent: 'center',
    width: 350,
  },
});

export const SettingsScreen = () => {
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container_1}>
      <Modal transparent={true} visible={isModalVisible}>
        <Pressable
          style={styles.modal_1}
          onPress={() => {
            setIsModalVisible(false);
          }}
        >
          <Pressable style={styles.modal_2} onPress={() => {}}>
            <Text>
              Database Synchronized!
            </Text>
          </Pressable>
        </Pressable>
      </Modal>
      <View style={styles.container_2}>
        <IconButton
          name='arrow-left'
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
        <IconButton
          name='database'
          onPress={async () => {
            try {
              const controllers = [
                new LessonsController(),
                new TasksController(),
              ];

              for (const controller of controllers) {
                await controller.sync();
              }

              setIsModalVisible(true);
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
