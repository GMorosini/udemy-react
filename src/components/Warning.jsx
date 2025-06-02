import React from 'react'

function Warning({warning}) {
  if(!warning){
    return null;
  }
  
  return (
    <div>Aviso!</div>
  )
}

export default Warning