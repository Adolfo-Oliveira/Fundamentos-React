import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TableProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="Comunicação Indireta / CRUD" color="#8bad39">
        <IndiretaPai />
      </Card>
      <Card titulo="Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>
      <Card titulo="Rendereização Condicional" color="#982395">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Adolfo" }} />
        <UsuarioInfo usuario={{}} />
        <UsuarioInfo />
      </Card>
      <Card titulo="Desafio Tabelas de produtos" color="#3A9AD9">
        <TabelaProdutos />
      </Card>
      <Card titulo="Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>
      <Card titulo="Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Oliveira">
          <FamiliaMembro nome="Adolfo" />
          <FamiliaMembro nome="Maria" />
          <FamiliaMembro nome="Ana" />
        </Familia>
      </Card>
      <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Segundo Componente"
          aluno="Adolfo Oliveira"
          nota={9.3}
        />
      </Card>
      <Card titulo="Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;
