import React from "react"; // Importa o módulo React
import "./Card.css"; // Importa estilos CSS do arquivo Card.css local

const Card = (props) => {
  // Define um objeto JavaScript cardStyle para estilizar o componente com base na cor recebida como prop
  const cardStyle = {
    backgroundColor: props.color || "#f00", // Define a cor de fundo com base na prop color; padrão é vermelho (#f00) se não especificada
    borderColor: props.color || "#f00", // Define a cor da borda com base na prop color; padrão é vermelho (#f00) se não especificada
  };

  // Retorna o JSX que representa a estrutura do componente Card
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>{" "}
      {/* Renderiza o título recebido como prop */}
      <div className="Content">{props.children}</div>{" "}
      {/* Renderiza o conteúdo interno recebido como children */}
    </div>
  );
};

export default Card; // Exporta o componente Card como o valor padrão deste módulo
