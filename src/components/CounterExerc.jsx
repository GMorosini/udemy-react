import { useState } from 'react';

function CounterExerc() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => Math.max(prev - 1, 0));
    }

    return (
        <div>
            <p>Você clicou {count} vezes!</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default CounterExerc;
