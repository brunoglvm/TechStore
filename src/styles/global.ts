import { StyleSheet } from "react-native";
import { fontFamily } from "./fontFamily";

export const globalStyles = StyleSheet.create({
  header: {
    fontFamily: fontFamily.montserratBd,
    fontSize: 24,
    color: "#061422",
  },
  text: {
    fontFamily: fontFamily.interReg,
    fontSize: 16,
    color: "#081929",
  },
  btnText: {
    fontFamily: fontFamily.interBd,
    fontSize: 16,
    color: "#F4F8FB",
    textAlign: "center",
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#3E6D94",
    borderRadius: 8,
  },
});
