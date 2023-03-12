import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavbarDirection from '../src/composants/NavbarDirection';
import NavbarAdmin from '../src/composants/NavbarAdmin';
import NavbarScolarite from '../src/composants/NavbarScolarite';
import Home from '../src/pages/Home';
import Authentication from '../src/pages/Authentification';
import AddUser from '../src/pages/AddUser';
import AjoutSortant from '../src/pages/AjoutSortant';
import DetailEtudiant from '../src/pages/DetailEtudiant';
import Inscription from '../src/pages/Inscription';
import ListeSortant from '../src/pages/ListeSortant';
import ListUser from '../src/pages/ListUser';
import Reinscription from '../src/pages/Reinscription';
import UpdateUser from '../src/pages/UpdateUser';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';
axios.defaults.withCredentials = true;

const App = () => {
  const { direction, scolarite, admin } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {admin && <NavbarAdmin />}
      {direction && <NavbarDirection />}
      {scolarite && <NavbarScolarite />}
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailEtudiant />} />

        {/* route pour admin */}
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
        <Route path="/listeuser" element={<ListUser />} />

        {/* route pour direction */}
        <Route path="/addsortant" element={<AjoutSortant />} />
        <Route path="/listesortant" element={<ListeSortant />} />

        {/* route pour scolarite */}
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/reinscription" element={<Reinscription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
