import './App.css';
import ComponentFilho from './componentsHooks/ComponentFilho';
import Timer from './componentsHooks/Timer';
import UseEffect from './componentsHooks/UseEffect';
import ValorContexto from './componentsHooks/ValorContexto';
import { ContextoProvider } from './contexts/Contexto';

function AppHooks(){
    return <>
        {/* UseEffect*/}
        <UseEffect />
        <Timer />

        {/* UseContext 
            Aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes*/}
        <ContextoProvider>
            <ComponentFilho />
            <ValorContexto />
        </ContextoProvider>
    </>;
}

export default AppHooks;