import React from "react"; // Importa o módulo React
import If from "./If"; // Importa o componente If do arquivo "./If"

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {}; // Extrai o objeto usuario das props, ou inicializa como um objeto vazio se não estiver definido

  return (
    <div>
      {/* Componente If para renderizar condicionalmente baseado na existência do nome de usuário */}
      <If test={usuario && usuario.nome}>
        {/* Se o usuário e o nome do usuário existirem, renderiza esta mensagem */}
        Seja bem vindo <strong>{usuario.nome}</strong>!
      </If>
      {/* Componente If para renderizar condicionalmente caso não haja usuário ou não haja nome */}
      <If test={!usuario || !usuario.nome}>
        {/* Se não houver usuário ou não houver nome de usuário, renderiza esta mensagem */}
        Seja bem vindo <strong>Amigão</strong>!
      </If>
    </div>
  );
};

export default UsuarioInfo; // Exporta o componente UsuarioInfo como o valor padrão deste módulo
