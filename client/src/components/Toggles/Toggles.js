import React, { useState } from 'react';
import Form from '../Form/Form';
import './styles.css';
import '../../index.css';

const ToggleForm = (currentId, setCurrentId) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <i class="far fa-envelope fa-7x" onClick={() => setShowForm(!showForm)}></i>
      {showForm && <Form currentId={currentId} setCurrentId={setCurrentId}/>}
    </>
  )
}

const ToggleDM = () => {
  const [showDM, setShowDM] = useState(false);

  return (
    <>
      <i class="far fa-comments fa-7x" onClick={() => setShowDM(!showDM)}></i>
      {showDM && <h1>DM</h1>}
    </>
  )
}

export { ToggleForm, ToggleDM} ;