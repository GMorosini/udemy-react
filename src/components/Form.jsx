import {useState} from 'react';

function Form(){

    const [value, setValue] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Formulário enviado: ", value);
    }


    return( <form onSubmit={handleSubmit}> 
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Preencha o campo"/>
                <button type="submit">Enviar</button>
            </form> );
}

export default Form;