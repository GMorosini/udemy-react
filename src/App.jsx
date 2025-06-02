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
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import BotaoEstilizado from './components/BotaoEstilizado';
import BotaoAzul from './components/BotaoAzul';
import Greeting from './components/Greeting';
import CounterExerc from './components/CounterExerc';
import TaskList from './components/TaskList';

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
            <LoginButton loggedIn={0} />

            {/* Render Nulo */}
            <Warning warning={1}/>
            <Warning warning={0}/>

            {/* Listas Chaves*/}
            <NumberList numbers={[1, 2, 3, 4, 5]} />

            {/* Estilos por atributo */}
            <BotaoEstilizado />

            {/* Estilos Globais */}
            <BotaoAzul />

            {/* Exercícios */}

            {/* Exercício 1: Componente Funcional Básico
                Crie um componente funcional chamado Greeting que aceita uma prop name e renderiza uma mensagem de boas vindas. Por exemplo, se a
                prop name for "João", o componente deve renderizar "Olá, João!"*/}
                <Greeting name="Gabriel" />

            {/* Exercício 2: Manipulação de Eventos
                Crie um componente chamado Counter que renderiza um botão e um texto indicando o número de vezes que o botão foi clicado. Acrescente
                um botaão de decremento */}
                <CounterExerc />
            
            {/* Exercício 3: Renderização Condicional e Listas
                Crie um componente chamado TaskList que aceita uma prop tasks, que é um array de objetos com id e text. Renderize uma lista ordenada
                de tarefas, mostrando o texto de cada tarefa. Se não houver tarefas, exiba a mensagem "Não há tarefas a mostrar".*/}
                <TaskList tasks={[{ id: 1, text: "Criar"},
                                  { id: 2, text: "Atualizar"},
                                  { id: 3, text: "Ler"},
                                  { id: 4, text: "Excluir"}
                ]}/>
                <TaskList tasks={null}/>
          </> 
  );
}

export default App;