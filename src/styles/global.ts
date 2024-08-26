import { StyleSheet } from "react-native";

import { fontFamily } from "./fontFamily";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  header: {
    fontFamily: fontFamily.montserratBd,
    fontSize: 24,
    color: colors.blue[700],
  },
  text: {
    fontFamily: fontFamily.interReg,
    fontSize: 16,
    color: colors.blue[600],
  },
  btnText: {
    fontFamily: fontFamily.interBd,
    fontSize: 16,
    color: colors.offWhite,
    textAlign: "center",
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.blue[500],
    borderRadius: 8,
  },
});
