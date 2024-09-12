import React from "react"; // Importa o módulo React, necessário para escrever componentes React

// Define um componente funcional DiretaFilho que recebe props como parâmetro
const DiretaFilho = (props) => {
  return (
    <div>
      <span>{props.nome} </span> {/* Exibe o valor da propriedade 'nome' */}
      <span>{props.idade} </span> {/* Exibe o valor da propriedade 'idade' */}
      <span>{props.nerd ? "Verdadeiro" : "Falso"} </span>{" "}
      {/* Exibe 'Verdadeiro' se a propriedade 'nerd' for true, senão 'Falso' */}
    </div>
  );
};

export default DiretaFilho; // Exporta o componente DiretaFilho como o valor padrão deste módulo
