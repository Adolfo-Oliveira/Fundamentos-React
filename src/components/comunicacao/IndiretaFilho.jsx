import React, { useState } from "react"; // Importa o módulo React e o hook useState, necessário para criar estados locais
import Modal from "./Modal"; // Importa o componente Modal do arquivo "./Modal"
import EditModal from "./EditModal"; // Importa o componente EditModal do arquivo "./EditModal"
import "./Modal.css"; // Importa estilos CSS do arquivo Modal.css local
import { FaTrash, FaEdit } from "react-icons/fa";

// Define um componente funcional IndiretaFilho que recebe props como parâmetro
const IndiretaFilho = (props) => {
  // Estados locais para gerenciar os dados do formulário e a exibição dos modais
  const [nameUsuario, setNameUsuario] = useState(""); // Estado para o nome do usuário
  const [estCivil, setestCivil] = useState(""); // Estado para saber o estado civil
  const [age, setAge] = useState(""); // Estado para a idade
  const [ageError, setAgeError] = useState(""); // Estado para mensagem de erro de idade
  const [showAddModal, setShowAddModal] = useState(false); // Estado para exibir ou ocultar o modal de adição de dados
  const [showEditModal, setShowEditModal] = useState(false); // Estado para exibir ou ocultar o modal de edição de dados
  const [data, setData] = useState([]); // Estado para armazenar os dados fornecidos
  const [isListVisible, setIsListVisible] = useState(false); // Estado para controlar a visibilidade da lista
  const [editIndex, setEditIndex] = useState(null); // Estado para armazenar o índice do item sendo editado
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de busca na lista

  // Função para exibir o modal de adição de dados
  const showAddModalFunc = () => {
    setShowAddModal(true);
  };

  // Função para ocultar o modal de adição de dados e resetar o formulário
  const hideAddModal = () => {
    setShowAddModal(false);
    resetForm();
  };

  // Função para exibir o modal de edição de dados
  const showEditModalFunc = (index) => {
    const item = data[index];
    setNameUsuario(item.nameUsuario);
    setAge(item.age);
    setestCivil(item.estCivil);
    setEditIndex(index);
    setShowEditModal(true);
  };

  // Função para ocultar o modal de edição de dados e resetar o formulário
  const hideEditModal = () => {
    setShowEditModal(false);
    resetForm();
  };

  // Função para resetar o formulário (limpar os estados do formulário)
  const resetForm = () => {
    setNameUsuario("");
    setAge("");
    setestCivil("");
    setEditIndex(null);
  };

  // Função para atualizar o estado do nome do usuário conforme o usuário digita
  const handleChange = (event) => {
    setNameUsuario(event.target.value);
  };

  // Função para tratar mudanças no campo de idade
  const handleAgeChange = (event) => {
    const newAge = event.target.value;
    if (newAge < 0) {
      setAgeError("A idade não pode ser negativa.");
    } else {
      setAgeError("");
      setAge(newAge);
    }
  };

  // Função para tratar mudanças no campo de estado civil
  const handleNerdChange = (event) => {
    setestCivil(event.target.value);
  };

  // Função para determinar a categoria de idade
  const getAgeCategory = (age) => {
    if (age >= 0 && age <= 5) {
      return "Bebê";
    } else if (age >= 6 && age <= 11) {
      return "Criança";
    } else if (age >= 12 && age <= 17) {
      return "Adolescente";
    } else if (age >= 18) {
      return "Adulto";
    } else {
      return "";
    }
  };

  // Função para adicionar novos dados
  const handleAddData = () => {
    if (nameUsuario && age && !ageError && estCivil) {
      const newData = { nameUsuario, age, estCivil };
      setData([...data, newData]);
      hideAddModal();
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  };

  // Função para salvar dados editados
  const handleSaveEditData = () => {
    if (nameUsuario && age && !ageError && estCivil) {
      const newData = { nameUsuario, age, estCivil };
      const updatedData = [...data];
      updatedData[editIndex] = newData;
      setData(updatedData);
      hideEditModal();
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  };

  // Função para excluir um item da lista
  const handleDeleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  // Função para alternar a visibilidade da lista
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  // Função para atualizar o termo de busca na lista
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtra os dados com base no termo de busca
  const filteredData = data.filter((item) =>
    item.nameUsuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Renderiza o JSX que representa a estrutura do componente
  return (
    <div>
      <h3>CRUD</h3>
      {/* Campos de entrada para nome, idade e "é nerd?" */}
      <label>
        <span style={{ marginRight: "10px" }}>Nome:</span>
        <input type="text" value={nameUsuario} onChange={handleChange} />
      </label>
      <br />
      <label>
        <span style={{ marginRight: "10px" }}>Idade:</span>
        <input type="number" value={age} onChange={handleAgeChange} />
        {ageError && (
          <span style={{ color: "red", marginLeft: "10px" }}>{ageError}</span>
        )}
      </label>
      <br />
      <label>
        <span style={{ marginRight: "10px" }}>Estado Civil:</span>
        <select value={estCivil} onChange={handleNerdChange}>
          <option value="">Selecione</option>
          <option value="Solteiro(a)">Solteiro</option>
          <option value="Casado(a)">Casado</option>
          <option value="Divorciado(a)">Divorciado</option>
          <option value="Viúvo(a)">Viuvo</option>
        </select>
      </label>

      {/* Botão e modal para fornecer informações */}
      <div className="App">
        <button onClick={showAddModalFunc}>Confirmar Informações</button>
        <Modal
          show={showAddModal}
          handleClose={hideAddModal}
          handleAdd={handleAddData}
          nome={nameUsuario}
          idade={age && !ageError && `Idade: ${age} (${getAgeCategory(age)})`}
          estCivil={estCivil}
        />
      </div>

      {/* Botão e lista para exibir/ocultar lista de dados */}
      <div>
        <button onClick={toggleListVisibility}>
          {isListVisible ? "Ocultar Lista" : "Exibir Lista"}
        </button>
        {isListVisible && (
          <div className="Tabela">
            {/* Campo de busca */}
            <input
              type="text"
              placeholder="Buscar por nome"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ marginBottom: "10px" }}
            />

            {/* Tabela de dados */}
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Categoria</th>
                  <th>Estado Civil</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapeia os dados filtrados para exibir na tabela */}
                {filteredData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "Par" : "Impar"}>
                    <td>{item.nameUsuario}</td>
                    <td>{item.age}</td>
                    <td>{getAgeCategory(item.age)}</td>
                    <td>{item.estCivil}</td>
                    <td>
                      <button onClick={() => handleDeleteItem(index)}>
                        <FaTrash />
                      </button>
                      <button onClick={() => showEditModalFunc(index)}>
                        <FaEdit/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal de edição de dados */}
      <EditModal
        show={showEditModal}
        handleClose={hideEditModal}
        handleSave={handleSaveEditData}
        name={nameUsuario}
        age={age}
        estCivil={estCivil}
        handleNameChange={handleChange}
        handleAgeChange={handleAgeChange}
        handleNerdChange={handleNerdChange}
        ageError={ageError}
      />
    </div>
  );
};

export default IndiretaFilho;
