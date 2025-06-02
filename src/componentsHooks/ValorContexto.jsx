import { useContext } from 'react';
import { Contexto } from '../contexts/Contexto';

function ValorContexto() {
    const {mensagem} = useContext(Contexto);

    return (
        <div>O valor do contexto é: {mensagem}</div>
    );
}

export default ValorContexto;