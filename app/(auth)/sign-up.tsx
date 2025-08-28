import React from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";
import {style} from "dom-helpers";

export default function SignUp() {
    return (
        <View style={{height: '100%', backgroundColor: "white"}}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Zarejestruj Się</Text>
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder={"Imię"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Nazwisko"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Email"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Nick"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Hasło"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Powtórz Hasło"}></TextInput>
            </View>
            <View style={styles.button}><Text style={{fontSize: 23, fontWeight: "500"}}>ZAREJESTRUJ</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        marginBottom: 20,
        padding: 20,
    },
    headerText: {
        fontSize: 40,
        fontWeight: "700",
        textAlign: "center",
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 120,
    },
    button: {
        backgroundColor: "green",
        padding: 20,
        marginHorizontal: 30,
        marginTop: 10,
        borderRadius: 120,
        alignItems: "center",
    }
})