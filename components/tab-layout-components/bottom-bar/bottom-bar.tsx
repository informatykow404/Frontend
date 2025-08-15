import { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TabContext } from "@/contexts/tab-context";
import { styles } from "./styles"

export default function BottomBar() {
  const { tab, setTab, pagerRef } = useContext(TabContext);

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
