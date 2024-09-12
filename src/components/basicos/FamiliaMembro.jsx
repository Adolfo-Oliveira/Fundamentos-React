import React from "react";

// Define um componente funcional chamado FamiliaMembro que recebe props
const FamiliaMembro = (props) => {
  // Renderiza o componente
  return (
    <div>
      {/* Exibe o nome seguido pelo sobrenome em negrito */}
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
};

// Exporta o componente FamiliaMembro para que possa ser utilizado em outros arquivos
export default FamiliaMembro;
