import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo a página inicial</Text>
            <Button title="Ir para a outra página" onPress={() => navigation.navigate("Página 2")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
});