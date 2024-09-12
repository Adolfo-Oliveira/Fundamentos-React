import React from "react"; // Importa o módulo React

// Define um componente funcional ParOuImpar que recebe props como parâmetro
const ParOuImpar = (props) => {
  // Determina se o número recebido como propriedade é par ou ímpar
  const isPar = props.numero % 2 === 0;

  // Retorna o JSX que representa a estrutura do componente
  return (
    <div>
      {/* Exibe "Par" se o número for par, senão exibe "Ímpar" */}
      {isPar ? <span>Par</span> : <span>Ímpar</span>}
    </div>
  );
};

export default ParOuImpar; // Exporta o componente ParOuImpar como o valor padrão deste módulo
