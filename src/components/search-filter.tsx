import { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";

export function SearchFilter() {
  const [search, setSearch] = useState("");

  return (
    <SearchBar
      onChangeText={(text) => setSearch(text)}
      value={search}
      searchIcon={
        <Ionicons name={"search"} color={colors.gray[300]} size={20} />
      }
      clearIcon={{ color: colors.gray[300], size: 20 }}
      placeholder="Search"
      placeholderTextColor={colors.gray[300]}
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={globalStyles.searchBarInput}
      inputStyle={globalStyles.searchBarText}
    />
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
});
