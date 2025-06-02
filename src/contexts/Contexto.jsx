/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from 'react';

export const Contexto = createContext()

export const ContextoProvider = ({children}) => {
    const [mensagem, setMensagem] = useState("Mensagem inicial!");

    const valorContexto = {
        mensagem,
        setMensagem,
    };

    return <Contexto.Provider value={valorContexto}>
                {children}
            </Contexto.Provider>;
};