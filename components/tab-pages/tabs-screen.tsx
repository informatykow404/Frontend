import { useContext } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import MyUniversity from "./my-university/my-university";
import MyClubs from "./my-clubs/my-clubs";
import Home from "./home/home";
import { TabContext } from "@/contexts/tab-context";
import { styles } from "./styles";

export default function TabsScreen() {
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
