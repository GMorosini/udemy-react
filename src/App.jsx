import './App.css';

import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';
import Button from './components/button';
import PaiFunction from './components/PaiFunction';
import Form from './components/Form';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';

function App() {
  return( <>
            {/* Criação de Componente */}
            <Welcome />

            {/* Expressões do JSX */}
            <BomDia />

            {/* Hierarquia de Componentes */}
            <Pai />

            {/* Props */}
            <Descricao nome="Gabriel" idade={23}/> 

            {/* Desestruturação de props */}
            <Cachorro nome="Fúria" raca="Pitbull"/>

            {/* UseState -> Hook */}
            <Counter />

            {/* Múltiplos Estados */}
            <UserInfoForm />

            {/* Eventos */}
            <Button />

            {/* Funções de eventos como props */}
            <PaiFunction />

            {/* Eventos de form */}
            <Form />

            {/* Renderização condicional */}
            <RenderCondicional user="Gabriel"/>

            {/* Ternário */}
            <LoginButton loggedIn={1} />
          </> 
  );
}

export default App;