import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useState } from "react";

import Casa from "@/assets/images/casa.svg";
import CasaFeito from "@/assets/images/casaFeito.svg";

import Escola from "@/assets/images/escola.svg";
import EscolaFeito from "@/assets/images/escolaFeito.svg";

import Trabalho from "@/assets/images/trabalho.svg";
import TrabalhoFeito from "@/assets/images/trabalhoFeito.svg";

import Outros from "@/assets/images/outros.svg";
import OutrosFeito from "@/assets/images/outrosFeito.svg";

export interface ITarefa {
    titulo: string;
    tipo: "casa" | "escola" | "trabalho" | "outro";
}

export default function Tarefa({ titulo, tipo }: ITarefa) {
    const [feito, setFeito] = useState<boolean>(false);

    console.log(feito);
    function handleFeito() {
        setFeito((feito) => !feito);
    }

    const icones = {
        casa: Casa,
        escola: Escola,
        trabalho: Trabalho,
        outro: Outros,
    };

    const iconesFeitos = {
        casa: CasaFeito,
        escola: EscolaFeito,
        trabalho: TrabalhoFeito,
        outro: OutrosFeito,
    };

    const IconeAtual = icones[tipo];
    const IconeAtualFeito = iconesFeitos[tipo];

    return (
        <View>
            <TouchableOpacity
                style={styles.botaoquadrado}
                onPress={handleFeito}
            >
                {!feito ? (
                    <IconeAtual style={styles.quadrado} />
                ) : (
                    <IconeAtualFeito style={styles.quadrado} />
                )}
                <Text style={styles.textquadrado}> {titulo} </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.botaotriangulo}>
                <Image style={styles.triangulo} />
                <Text style={styles.texttriangulo}>
                    Texte da Tarefa Tarbalho
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoestrela}>
                <Image style={styles.estrela} />
                <Text style={styles.textestrela}> Texte da Tarefa Outros</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    botaoquadrado: {
        flexDirection: "row",
        gap: 10,
    },
    quadrado: {
        width: 24,
        height: 24,
    },
    textquadrado: {
        fontFamily: "LexendRegular",
        fontSize: 17,
    },
    botaocirculo: {
        flexDirection: "row",
        gap: 10,
    },
    circulo: {
        width: 24,
        height: 24,
    },
    textcirculo: {
        fontFamily: "LexendRegular",
        fontSize: 17,
    },
    botaotriangulo: {
        flexDirection: "row",
        gap: 10,
    },
    triangulo: {
        width: 24,
        height: 24,
    },
    texttriangulo: {
        fontFamily: "LexendRegular",
        fontSize: 17,
    },
    botaoestrela: {
        flexDirection: "row",
        gap: 10,
    },
    estrela: {
        width: 30,
        height: 30,
    },
    textestrela: {
        fontFamily: "LexendRegular",
        fontSize: 17,
    },
});
