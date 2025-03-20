import { createContext, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { bottomBarStyles as styles } from "@/styles/components/TabLayoutStyles";

export const TabContext = createContext({
  tab: 1,
  setTab: (index: number) => {},
  pagerRef: { current: null } as React.RefObject<PagerView>,
});

export default function BottomBar({
  pagerRef,
}: {
  pagerRef: React.RefObject<PagerView>;
}) {
  const { tab, setTab } = useContext(TabContext);

  const handlePress = (index: number) => {
    setTab(index);
    pagerRef.current?.setPage(index);
  };

  return (
    <View style={styles.bottomBar}>
      {["Uczelnia", "Home", "Moje Koła"].map((title, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[styles.tab, tab === index && styles.activeTab]}
        >
          <Text>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
