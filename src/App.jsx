import { useState } from 'react'
import { Navbar } from './component/Navbar'
import { BarreRechercher } from './component/BarreRecherche'

import './style.css';
import { TableTask } from './element/TableTask';
import { FormTache } from './component/FormTache';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <TableTask title={'sdsd'} />
        <FormTache></FormTache>
      </div>
    </>
  )
}

export default App
