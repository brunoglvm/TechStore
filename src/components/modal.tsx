import { StyleSheet, View, Text, Linking } from "react-native";
import Modal from "react-native-modal";

import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";
import { Button } from "./button";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export default function CustomModal({ isVisible, onClose }: Props) {
  function handleConfirm() {
    Linking.openURL("https://github.com/brunoglvm");
    onClose();
  }

  return (
    <Modal
      animationIn={"zoomIn"}
      animationOut={"fadeOut"}
      backdropOpacity={0.8}
      backdropColor={colors.offblack}
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <View style={styles.modalContent}>
        <Text
          style={[
            globalStyles.highlightedText,
            { color: colors.blue[700], marginBottom: 20 },
          ]}
        >
          Do you want to open my GitHub page?
        </Text>

        <View style={styles.btnContainer}>
          <Button title={"Open"} onPress={handleConfirm} />
          <Button
            title={"Close"}
            onPress={onClose}
            style={{ backgroundColor: colors.gray[300] }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.offWhite,
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 12,
    paddingHorizontal: 32,
  },
});
