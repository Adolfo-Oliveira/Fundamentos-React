import React from "react";

// Define um componente funcional chamado Fragmento que recebe props
export default function Fragmento(props) {
  // Renderiza o componente usando React Fragment (<> </>)
  return (
    <>
      {/* Exibe um título */}
      <h2>Fragmento</h2>
      {/* Exibe um parágrafo com uma mensagem */}
      <p>Cuidado com esse erro!</p>
    </>
  );
}
