import React from "react";
import {  } from "react-native";

export default function ProfileScreen( ) {
    return (
        <View style={styles.container}>
            <Image >

            </Image>
            <Text style={styles.title}>Bem vindo ao meu perfil</Text>
            <Text style={styles.subtitle}>Nome: Anna Beatriz</Text>
            <Text style={styles.subtitle}>Idade: 17 anos</Text>
            <Text style={styles.subtitle}>Cidade: Valinhos</Text>
            <Text style={styles.subtitle}>E-mail: annabeatriz@gmail.com</Text>
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
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    },
});