import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "#f8f8f8",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    tab: { padding: 10 },
    activeTab: { borderBottomWidth: 2, borderBottomColor: "black" },
})