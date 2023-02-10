import React from 'react'
import './styles.css'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './views/home/home';
import Programa from './views/programas/Programa';
import Innovacion from './views/innovacion/Innovacion';
import Infraestructura from './views/infraestructura/Infraestructura';
import QuienesSomos from './views/quienesSomos/QuienesSomos';
import Contacto from './views/contacto/Contacto';
import Sumate from './views/contacto/Sumate';
import Unite from './views/contacto/Unite';
import News from './views/news/News';
import MenuMobile from './componentes/menuMobile/MenuMobile';
import Inicio from './componentes/inicio/inicio';
import EquipoHumano from './views/equipoHumano/EquipoHumano';
import ImageGallery from 'react-image-gallery';
import home22 from './assets/home22.jpg'
import home33 from './assets/home33.jpg'
import home from './assets/home.jpg'

const  App: React.FC=()=> {
  
  return (
    <>

           <BrowserRouter>
          
                     <Inicio></Inicio>
                     <MenuMobile></MenuMobile>
                    <Routes>
                        
                        <Route path="/" element={<Home></Home>}/>
                        <Route path="/programas" element={<Programa></Programa>}/>
                        <Route path="/innovacion" element={<Innovacion></Innovacion>}/>
                        <Route path="/infraestructura" element={<Infraestructura></Infraestructura>}/>
                        <Route path="/quienes-somos" element={<QuienesSomos></QuienesSomos>}/>
                        <Route path="/equipo" element={<EquipoHumano></EquipoHumano>}/>
                        <Route path="/contacto" element={<Contacto></Contacto>}/>
                        <Route path="/sumate" element={<Sumate></Sumate>}/>
                        <Route path="/unite" element={<Unite></Unite>}/>
                        <Route path="/news" element={<News></News>}/>
                        <Route path="*" element={<Navigate to='/'></Navigate>}/>
                    </Routes>
            </BrowserRouter>
       
    </>
  )
}

export default App
