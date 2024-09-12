import React from "react";

// Definimos um componente funcional chamado ComParametro que recebe props
export default function ComParametro(props) {
  // Define a variável status baseada na nota: "Aprovado" se nota >= 7, senão "Recuperação"
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";

  // Arredonda a nota para cima usando Math.ceil
  const notaInt = Math.ceil(props.nota);

  // Renderiza o componente
  return (
    <div>
      {/* Exibe o título passado pelas props */}
      <h2>{props.titulo}</h2>
      <p>
        {/* Exibe o nome do aluno */}
        <strong>{props.aluno} </strong>
        tem nota
        {/* Exibe a nota arredondada */}
        <strong> {notaInt} </strong>e foi
        {/* Exibe o status (Aprovado ou Recuperação) */}
        <strong> {status} </strong>!
      </p>
    </div>
  );
}
