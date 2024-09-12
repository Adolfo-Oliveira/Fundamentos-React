import React from 'react';
import './Modal.css';

const EditModal = ({
  show,
  handleClose,
  handleSave,
  name,
  age,
  estCivil,
  handleNameChange,
  handleAgeChange,
  handleNerdChange,
  ageError
}) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Editar Informações</h2>
        <label>
          Nome:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Idade:
          <input type="number" value={age} onChange={handleAgeChange} />
          {ageError && <span style={{ color: 'red' }}>{ageError}</span>}
        </label>
        <br />
        <label>
          Estado Civil:
          <select value={estCivil} onChange={handleNerdChange}>
            <option value="">Selecione</option>
            <option value="Solteiro(a)">Solteiro</option>
            <option value="Casado(a)">Casado</option>
            <option value="Divorciado(a)">Divorciado</option>
            <option value="Viúvo(a)">Viúvo</option>
          </select>
        </label>
        <br />
        <button onClick={handleSave}>Salvar</button>
        <button onClick={handleClose}>Fechar</button>
      </div>
    </div>
  );
};

export default EditModal;
