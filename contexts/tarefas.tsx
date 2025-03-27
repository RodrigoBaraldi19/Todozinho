import { Children, createContext, useContext, useState } from "react";

interface ITarefaContext {
    tarefas: ITarefa[];
    adicionarTarefas(tarefa: ITarefa): void;
}

export interface ITarefa {
    titulo: string;
    tipo: "casa" | "escola" | "trabalho" | "outro";
}

const TarefasContext = createContext<ITarefaContext>({} as ITarefaContext);

export const TarefasProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([
        { tipo: "casa", titulo: "arrumar cama" },
        { tipo: "escola", titulo: "dever geografia" },
        { tipo: "casa", titulo: "escovar os dentes" },
        { tipo: "casa", titulo: "tirar pó" },
    ]);
    function adicionarTarefas(tarefa: ITarefa) {
        setTarefas((tarefas) => [...tarefas, tarefa]);
    }
    return (
        <TarefasContext.Provider
            value={{ tarefas: tarefas, adicionarTarefas: adicionarTarefas }}
        >
            {children}
        </TarefasContext.Provider>
    );
};

export const useTarefas = () => {
    return useContext(TarefasContext);
};

export default TarefasContext;
