import React from "react"; // Importa o módulo React

import IndiretaFilho from "./IndiretaFilho"; // Importa o componente IndiretaFilho do arquivo "./IndiretaFilho"

const IndiretaPai = (props) => {
  // Função local que será passada como callback para o componente filho
  function fornecerInformacoes(nome, idade, nerd) {
    // Esta função ainda não está implementada no exemplo fornecido
    // Geralmente, seria utilizada para processar as informações recebidas do filho
  }

  return (
    <div>
      {/* Componente IndiretaFilho que recebe a função fornecerInformacoes como prop 'quandoClicar' */}
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai; // Exporta o componente IndiretaPai como o valor padrão deste módulo
