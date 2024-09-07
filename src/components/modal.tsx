import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import Modal from "react-native-modal";

import { colors } from "@/styles/colors";

export default function CustomModal({ isVisible, onClose }: any) {
  const handleConfirm = () => {
    Linking.openURL("https://github.com/brunoglvm");
    onClose();
  };

  return (
    <Modal
      animationIn={"zoomIn"}
      animationOut={"fadeOut"}
      backdropOpacity={0.8}
      backdropColor={colors.offblack}
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          Do you want to open my GitHub page?
        </Text>
        <Pressable style={styles.modalButton} onPress={handleConfirm}>
          <Text style={styles.modalButtonText}>Open</Text>
        </Pressable>
        <Pressable style={styles.modalButton} onPress={onClose}>
          <Text style={styles.modalButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.offWhite,
    padding: 12,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: colors.blue[500],
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  modalButtonText: {
    color: colors.offWhite,
    fontSize: 16,
  },
});
