import { useEffect } from 'react'

import './App.css'

function App() {
  
useEffect(() => {
    const contador = setTimeout(() => {
      console.log('componente foi atualizado ');
    }, 2000);
  // Limpar o contador quando o componente for desmontado
    return () => limparcontador(contador);
  }, []);
  return (
    <>
     <button onClick={()=> alert("pedido foi cancelado")} >Cancelar Pedido</button>
    </>
  )
}

export default App
