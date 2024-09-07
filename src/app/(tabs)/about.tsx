import { useState } from "react";
import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";
import CustomModal from "@/components/modal";

export default function About() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={toggleModal}
          style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
        >
          <Image
            source={require("@/assets/avatar.jpg")}
            resizeMode="cover"
            style={styles.img}
          />
          <View style={styles.overlay}>
            <Ionicons
              name={"logo-github"}
              size={32}
              color={colors.offWhite}
              style={styles.overlayIcon}
            />
            <Text style={styles.overlayText}>GitHub</Text>
          </View>
        </Pressable>
        <Text
          style={[
            globalStyles.header,
            { color: colors.blue[700], marginBottom: 4 },
          ]}
        >
          /brunoglvm
        </Text>
        <Text
          style={[
            globalStyles.text,
            { color: colors.gray[400], textAlign: "center" },
          ]}
        >
          I'm a{" "}
          <Text style={globalStyles.highlightedText}>
            Front-end/Mobile Developer
          </Text>{" "}
          and <Text style={globalStyles.highlightedText}>UX/UI Designer</Text>{" "}
          specializing in creating intuitive and engaging digital experiences
          for both web and mobile platforms. I focus on building user-friendly
          interfaces and ensuring seamless interactions.
        </Text>

        <CustomModal isVisible={isModalVisible} onClose={toggleModal} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: colors.offWhite,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 12,
    backgroundColor: colors.gray[300],
  },
  overlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 200,
    marginVertical: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlayText: {
    ...globalStyles.text,
    color: colors.offWhite,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  overlayIcon: {
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
