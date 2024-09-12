import React from "react"; // Importa o módulo React
import alunos from "../../data/alunos"; // Importa o array de alunos do arquivo de dados "../../data/alunos"

const ListaAlunos = () => {
  // Mapeia o array de alunos para criar uma lista de elementos <li> com informações de cada aluno
  const alunoLI = alunos.map((aluno) => {
    const status = aluno.nota >= 7 ? "Aprovado" : "Recuperação";
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - Nota = {aluno.nota} - {status}{" "}
        {/* Exibe o ID, nome e nota do aluno */}
      </li>
    );
  });

  // Retorna o JSX que representa a estrutura do componente ListaAlunos
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{alunoLI}</ul>{" "}
      {/* Renderiza a lista de alunos dentro de uma <ul> sem estilo de lista */}
    </div>
  );
};

export default ListaAlunos; // Exporta o componente ListaAlunos como o valor padrão deste módulo
