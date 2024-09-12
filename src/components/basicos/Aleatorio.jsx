import React from "react";
import "./Aleatorio.css";

// Definimos um componente funcional chamado Aleatorio que recebe as props min e max
export default function Aleatorio({ min, max }) {
  // Função para gerar números aleatórios dentro de um intervalo
  const gerarNumerosAleatorios = (min, max, quantidade) => {
    const numeros = []; // Array para armazenar os números aleatórios
    for (let i = 0; i < quantidade; i++) {
      // Gera um número aleatório entre min e max (incluindo ambos)
      const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.push(numeroAleatorio); // Adiciona o número gerado ao array
    }
    return numeros; // Retorna o array com os números aleatórios
  };

  // Gera um array de 6 números aleatórios usando a função definida acima
  const numerosAleatorios = gerarNumerosAleatorios(min, max, 6);

  // Renderiza o componente
  return (
    <div>
      <h2>Números Aleatórios</h2>
      <p>Número mínimo: {min}</p>
      <p>Número máximo: {max}</p>
      <ul className="no-bullets">
        {/* Mapeia os números aleatórios gerados para elementos <li>, usando o índice como chave */}
        {numerosAleatorios.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}
