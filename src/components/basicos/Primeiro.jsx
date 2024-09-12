import React from "react"; // Importa o módulo React

// Declara um componente funcional chamado Primeiro
export default function Primeiro() {
  const msg = "Seja bem vindo(a)!"; // Define uma constante com a mensagem

  // Retorna o JSX que representa a estrutura do componente
  return (
    <div>
      <h2>Primeiro Componente</h2> {/* Um cabeçalho h2 */}
      <p>{msg}</p>{" "}
      {/* Um parágrafo que exibe a mensagem definida na constante */}
    </div>
  );
}
