import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(1);
    
    return( <div>
                <p>Você clicou {count} vezes.</p>
                <button onClick={() => setCount(count + 1)}>Click</button>
            </div> );
}

export default Counter;