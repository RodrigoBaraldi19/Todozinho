import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
} from "react-native";
import Tarefa, { ITarefa } from "@/components/Tarefa";
import { useState } from "react";
import { useTarefas } from "@/contexts/tarefas";

export default function TabOneScreen() {
    const { tarefas } = useTarefas();

    function handleOpenCriar() {
        router.push("/criar");
    }
    return (
        <>
            <View style={styles.pagina}>
                <Image
                    style={styles.logocolorlight}
                    source={require("@/assets/images/logo_light_color.png")}
                />
                <View style={styles.areatarefas}>
                    <View style={styles.suastarefas}>
                        <Text style={styles.textsuastarefas}>Suas Tarefas</Text>
                        <MaterialIcons size={26} name="book" />
                    </View>
                    <FlatList
                        contentContainerStyle={styles.flat}
                        data={tarefas}
                        renderItem={({ item }) => (
                            <Tarefa titulo={item.titulo} tipo={item.tipo} />
                        )}
                    />
                </View>
            </View>

            <Image
                style={styles.logoempe}
                source={require("@/assets/images/ornitorrico.png")}
            />
            <TouchableOpacity style={styles.criar} onPress={handleOpenCriar}>
                <MaterialIcons size={40} color={"#FFF"} name="add" />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    pagina: {
        padding: 18,
    },
    logocolorlight: {
        width: 229,
        height: 42.54,
        marginTop: 50,
    },
    logoempe: {
        width: 280,
        height: 280,
        position: "absolute",
        bottom: 0,
        zIndex: -1,
    },
    criar: {
        width: 69,
        height: 69,
        borderRadius: 19,
        backgroundColor: "#4169E1",
        position: "absolute",
        left: 300,
        top: 680,
        justifyContent: "center",
        alignItems: "center",
    },
    suastarefas: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        gap: 7,
        marginBottom: 30,
    },
    textsuastarefas: {
        fontFamily: "LexendRegular",
        fontSize: 24,
    },
    areatarefas: {
        marginLeft: 15,
    },
    flat: {
        gap: 20,
    },
});
