import React from "react"; // Importa o módulo React, necessário para escrever componentes React
import DiretaFilho from "./DiretaFilho"; // Importa o componente DiretaFilho do arquivo "./DiretaFilho"

// Define um componente funcional DiretaPai que recebe props como parâmetro
const DiretaPai = (props) => {
  return (
    <div>
      {/* Renderiza dois componentes DiretaFilho com diferentes props */}
      <DiretaFilho nome="Junior" idade={32} nerd={true} />
      <DiretaFilho nome="Gabriel" idade={30} nerd={false} />
    </div>
  );
};

export default DiretaPai; // Exporta o componente DiretaPai como o valor padrão deste módulo
