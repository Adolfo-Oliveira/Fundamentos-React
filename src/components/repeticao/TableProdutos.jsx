import React from "react"; // Importa o módulo React
import produtos from "../../data/produtos"; // Importa o array de produtos do arquivo de dados "../../data/produtos"
import "./TableProdutos.css"; // Importa estilos CSS do arquivo TableProdutos.css local

const TabelaProdutos = (props) => {
  // Função que retorna um array de linhas (<tr>) com informações de cada produto
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td> {/* Renderiza o ID do produto */}
          <td>{produto.nome}</td> {/* Renderiza o nome do produto */}
          <td>R$ {produto.preco.toFixed(2)}</td>{" "}
          {/* Renderiza o preço formatado do produto */}
        </tr>
      );
    });
  }

  // Retorna o JSX que representa a estrutura do componente TabelaProdutos
  return (
    <div className="TableProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th> {/* Cabeçalho da coluna ID */}
            <th>Nome</th> {/* Cabeçalho da coluna Nome */}
            <th>Preço</th> {/* Cabeçalho da coluna Preço */}
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>{" "}
        {/* Renderiza as linhas de produtos obtidas pela função getLinhas() */}
      </table>
    </div>
  );
};

export default TabelaProdutos; // Exporta o componente TabelaProdutos como o valor padrão deste módulo
