import { useContext } from 'react';
import { Contexto } from '../contexts/Contexto';

function ComponentFilho() {
    const { mensagem, setMensagem } = useContext(Contexto);

    return (
        <div>
            <p>{mensagem}</p>
            <button onClick={() => setMensagem("Nova mensagem")}>Alterar mesagem</button>
        </div>
    );
}

export default ComponentFilho;