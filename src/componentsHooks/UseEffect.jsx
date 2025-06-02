import { useEffect, useState } from 'react'

function UseEffect() {
  // Executar algo, baseado em algo
  // A mudança de um valor, carregamento da página
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title =  `Você clicou ${count} vezes`;
  })

  return (
    <button onClick={() => setCount(count + 1)}> Click </button>
  );
}

export default UseEffect