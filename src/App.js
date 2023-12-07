import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Prevencion from './paginas/Prevencion';
import QueEsNasu from './paginas/QueEsNasu';
import PlanesdeSalud from './paginas/PlanesdeSalud';
import SuscribirPlan from './paginas/SuscribirPlan';
import Faqs from './paginas/Faqs';
import Contactenos from './paginas/Contactenos';
import Login from './paginas/InicioSesion';
import Header from './componentes/Header/Header.jsx'
import Footer from './componentes/Footer/Footer.jsx';
import "./App.css";
import RecuperarC from './paginas/RecuperarC.jsx';
import ElegirPlan from './paginas/ElegirPlan.jsx';
import PlanFormulario from './paginas/PlanFormulario.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  { /* Header */}
  <Header />
        <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/prevencion_para_tu_mascota' element={<Prevencion />} />
        <Route path='/que_es_nasu' element={<QueEsNasu />} />
        <Route path='/planes_de_salud' element={<PlanesdeSalud />} />
        <Route path='/suscribir_un_plan' element={<SuscribirPlan />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/contactenos' element={<Contactenos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recuperar' element={<RecuperarC />} />
        <Route path='/elegir_plan' element={<ElegirPlan />} />
        <Route path='/plan_formulario' element={<PlanFormulario />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
