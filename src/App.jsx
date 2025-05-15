import './App.css';

import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';

function App() {
  return( <>
            <Welcome />
            <BomDia />
            <Pai />
            <Descricao nome="Gabriel" idade={23}/>
            <Cachorro nome="Fúria" raca="Pitbull"/>
            <Counter />
            <UserInfoForm />
          </> 
  );
}

export default App;