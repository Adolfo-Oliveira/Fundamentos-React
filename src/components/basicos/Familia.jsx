import React, { cloneElement } from "react";
// import FamiliaMembro from './FamiliaMembro';

// Define um componente funcional chamado Familia que recebe props
const Familia = (props) => {
  return (
    <div>
      {/* Mapeia cada elemento filho passado como children */}
      {props.children.map((child, i) => {
        // Clona cada elemento filho, passando todas as props do componente Familia e uma key única
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

export default Familia;
