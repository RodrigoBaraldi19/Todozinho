import { MaterialIcons } from "@expo/vector-icons";
import { useTarefas } from "@/contexts/tarefas";

import Casa from "@/assets/images/criarCasa.svg";
import CasaSelecionado from "@/assets/images/criarCasaSelecionado.svg";

import Escola from "@/assets/images/criarEscola.svg";
import EscolaSelecionado from "@/assets/images/criarEscolaSelecionado.svg";

import Trabalho from "@/assets/images/criarTrampo.svg";
import TrabalhoSelecionado from "@/assets/images/criarTrampoSelecionado.svg";

import Outros from "@/assets/images/criarOutros.svg";
import OutrosSelecionado from "@/assets/images/criarOutrosSelecionado.svg";

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Criar() {
    const { adicionarTarefas } = useTarefas();

    const [nomeTarefa, setNomeTarefa] = useState<string>("");
    const [tipo, setTipo] = useState<
        "casa" | "escola" | "trabalho" | "outro" | undefined
    >();

    function criarTarefa() {
        if (tipo != undefined) {
            adicionarTarefas({ tipo: tipo, titulo: nomeTarefa });
            router.back();
        } else {
            // ALERTA
        }
    }

    return (
        <>
            <View style={styles.tarefas}>
                <Text style={styles.nometarefa}>Qual o Nome?</Text>
                <TextInput
                    style={styles.digitartarefa}
                    placeholder="Digite o Nome da Tarefa"
                    onChangeText={(newText) => setNomeTarefa(newText)}
                ></TextInput>
            </View>
            <View style={styles.areatotal}>
                <Text style={styles.nometarefa}>Qual o Tipo?</Text>
                <View style={styles.areadosbotoes}>
                    <TouchableOpacity
                        onPress={() => setTipo("casa")}
                        style={styles.botao}
                    >
                        {tipo == "casa" ? <CasaSelecionado /> : <Casa />}
                        <Text style={styles.text}>Casa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setTipo("escola")}
                        style={styles.botao}
                    >
                        {tipo == "escola" ? <EscolaSelecionado /> : <Escola />}
                        <Text style={styles.text}>Escola</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setTipo("trabalho")}
                        style={styles.botao}
                    >
                        {tipo == "trabalho" ? (
                            <TrabalhoSelecionado />
                        ) : (
                            <Trabalho />
                        )}

                        <Text style={styles.text}>Trabalho</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setTipo("outro")}
                        style={styles.botao}
                    >
                        {tipo == "outro" ? <OutrosSelecionado /> : <Outros />}

                        <Text style={styles.text}>Outros</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.pagina}>
                <Image
                    style={styles.reverse}
                    source={require("@/assets/images/reverse.png")}
                />
                <View></View>
                <TouchableOpacity
                    onPress={criarTarefa}
                    style={styles.buttoncriar}
                >
                    <Text style={styles.textbutton}>Criar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    pagina: {
        paddingHorizontal: 18,
        paddingTop: 70,
        paddingBottom: 30,
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
    },
    reverse: {
        width: 300,
        height: 300,
        position: "absolute",
        left: 85,
        top: 10,
    },
    textbutton: {
        fontFamily: "LexendRegular",
        color: "#FFF",
    },
    buttoncriar: {
        width: 318,
        height: 50,
        borderRadius: 18,
        fontSize: 16,
        backgroundColor: "#4169E1",
        justifyContent: "center",
        alignItems: "center",
    },
    nometarefa: {
        fontFamily: "LexendRegular",
        fontSize: 24,
    },
    digitartarefa: {
        width: 343,
        height: 50,
        backgroundColor: "#FFF",
        marginTop: 10,
        borderRadius: 6,
    },
    tarefas: {
        padding: 18,
        marginTop: 60,
    },
    areatotal: {
        padding: 18,
    },
    areadosbotoes: {
        width: 343,
        height: 100,
        borderRadius: 6,
        marginTop: 10,
        flexDirection: "row",
        gap: 32,
        justifyContent: "center",
        paddingTop: 10,
    },
    circulo: {
        width: 53,
        height: 53,
        borderRadius: 100,
        borderWidth: 2.3,
        borderColor: "#4169E1",
    },
    quadrado: {
        width: 53,
        height: 53,
        borderRadius: 4.6,
        borderWidth: 2.3,
        borderColor: "#4169E1",
    },
    triangulo: {
        width: 53,
        height: 53,
        borderRadius: 100,
        borderWidth: 2.3,
        borderColor: "#4169E1",
    },
    estrela: {
        width: 53,
        height: 53,
        borderRadius: 4.6,
        borderWidth: 2.3,
        borderColor: "#4169E1",
    },
    text: {
        marginTop: 5,
        fontFamily: "LexendLight",
        fontSize: 16,
    },
    botao: {
        alignItems: "center",
    },
    quadradoprench: {
        width: 53,
        height: 53,
        borderRadius: 4.6,
        borderWidth: 2.3,
        borderColor: "#4169E1",
        backgroundColor: "#4169E1",
    },
    circuloprench: {
        width: 53,
        height: 53,
        borderRadius: 100,
        borderWidth: 2.3,
        borderColor: "#4169E1",
        backgroundColor: "#4169E1",
    },
    trianguloprench: {
        width: 53,
        height: 53,
        borderRadius: 100,
        borderWidth: 2.3,
        borderColor: "#4169E1",
        backgroundColor: "#4169E1",
    },
    estrelaprench: {
        width: 53,
        height: 53,
        borderRadius: 4.6,
        borderWidth: 2.3,
        borderColor: "#4169E1",
        backgroundColor: "#4169E1",
    },
});
