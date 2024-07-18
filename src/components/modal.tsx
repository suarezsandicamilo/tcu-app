//

import { Modal as ReactNativeModal, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    zIndex: 1000,
  },
  container_2: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    elevation: 2,
    height: 175,
    justifyContent: 'center',
    width: 350,
  },
});

type Props = {
  children?: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
};

export const Modal = (props: Props) => {
  return (
    <ReactNativeModal transparent={true} visible={props.visible}>
      <Pressable style={styles.container_1} onPress={props.onClose}>
        <Pressable style={styles.container_2} onPress={() => {}}>
          {props.children}
        </Pressable>
      </Pressable>
    </ReactNativeModal>
  );
};
