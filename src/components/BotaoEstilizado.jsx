import React from 'react'

function BotaoEstilizado() {
  
  const estiloBotao = {
    backgroundColor: "#333",
    color: "#FFF",
    padding: "15px 32px",
    cursor: "pointer"
  };

  return (
    <button style={estiloBotao}> Clique em mim! </button>
  )
}

export default BotaoEstilizado