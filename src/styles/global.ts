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
  highlightedText: {
    fontFamily: fontFamily.interMd,
    fontSize: 16,
    color: colors.blue[400],
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
  productTitle: {
    fontFamily: fontFamily.interSb,
    fontSize: 16,
    color: colors.blue[700],
  },
  productDesc: {
    fontFamily: fontFamily.interReg,
    fontSize: 12,
    color: colors.gray[400],
  },
  productPrice: {
    fontFamily: fontFamily.interSb,
    fontSize: 16,
    color: colors.blue[400],
  },
});
