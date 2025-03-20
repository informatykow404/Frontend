import { useState, useRef } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";

import MyUniversity from "../../components/tab-pages/my-university";
import MyClubs from "../../components/tab-pages/my-clubs";
import Home from "../../components/tab-pages/home";
import BottomBar from "@/components/tab-layout-components/bottom-bar";
import TopBar from "@/components/tab-layout-components/top-bar";

import { TabContext } from "@/components/tab-layout-components/bottom-bar";

import { tabsIndexStyles as styles } from "@/styles/components/TabLayoutStyles";

export default function TabScreen() {
  const [tab, setTab] = useState(1);
  const pagerRef = useRef<PagerView>(null);

  return (
    <TabContext.Provider value={{ tab, setTab, pagerRef }}>
      <View style={styles.container}>
        <TopBar />
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
        <BottomBar pagerRef={pagerRef} />
      </View>
    </TabContext.Provider>
  );
}
