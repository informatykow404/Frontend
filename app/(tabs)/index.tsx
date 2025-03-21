import { useContext } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";

import MyUniversity from "../../components/tab-pages/my-university";
import MyClubs from "../../components/tab-pages/my-clubs";
import Home from "../../components/tab-pages/home";

import { TabContext } from "@/app/(tabs)/_layout";

import { tabsIndexStyles as styles } from "@/styles/TabLayoutStyles";

export default function TabScreen() {
  const { tab, setTab, pagerRef } = useContext(TabContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PagerView
          ref={pagerRef}
          style={styles.pagerView}
          initialPage={tab}
          onPageSelected={(e) => setTab(e.nativeEvent.position)}
        >
          <View key="0" style={styles.page}>
            <MyUniversity />
          </View>
          <View key="1" style={styles.page}>
            <Home />
          </View>
          <View key="2" style={styles.page}>
            <MyClubs />
          </View>
        </PagerView>
      </View>
    </View>
  );
}
