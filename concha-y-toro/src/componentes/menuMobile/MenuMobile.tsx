import React,{useContext, useEffect, useState} from 'react'
import { DrawerFooter, Text } from '@chakra-ui/react'
import {FormattedMessage} from 'react-intl'
import { LenguajeContext} from '../../context/LenguajeContext'
import { Switch,useDisclosure,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,Button,Image} from '@chakra-ui/react'
import './menuMobilesStyles.css'
import clouse from './../../assets/imageClouse.svg'
import logo from './../../assets/logo.svg'
import menu from './../../assets/menu.svg'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import white from'./../../assets/white.svg'
import logoBlanco from './../../assets/logoBlanco.svg'
import viña from './../../assets/nombre.svg'
import viña2 from './../../assets/nombreBlack.svg'
import logoNegro from './../../assets/logoblack.svg'
import viñaBlack from './../../assets/nombreBlack.svg'
import logoMobi from './../../assets/logoMobileWhite.svg'
import logoMobile from './../../assets/logoMobile.svg'
import Swal from 'sweetalert2'

interface ListLink{
  href:string,
  id:string
}
const LINKS: ListLink[]=[
  {
    href:'/programas',
    id:'seccion.uno'
  },
  {
    href:'/innovacion',
    id:'seccion.dos'
  },
  {
    href:'/infraestructura',
    id:'seccion.tres'
  },
  {
    href:'/quienes-somos',
    id:'seccion.cuatro'
  }, 
 
  {
    href:'/equipo',
    id:'equipo'
  },
   {
    href:'/news',
    id:'alizan'
  },
  {
    href:'/contacto',
    id:'seccion.cinco'
  }
]

const  MenuMobile: React.FC=()=> {

    const {pathname}=useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [lenguajeState,setLenguajeState]=useState('es')
    const [ isCheck, setIsCheck] =useState(false)
    const [mobile,setMobile]=useState(false)
    const navigate=useNavigate();
    const [isHome,setIsHome]=useState(true)
  
  const handleClick = () => {
      onOpen()
    }
  const [whiteNo,setWhiteNo]=useState(false)
  const idioma= useContext(LenguajeContext)
  const handleClickIdioma=()=>{
    if(isCheck){
      setIsCheck(false)
    }else{
      setIsCheck(true)
    }
    idioma.cambiarLenguaje();
  }
  const handleClickIdioma2=(param:string)=>{
    if(param===lenguajeState){

    }else if(param!==lenguajeState){
      setLenguajeState(param)
      idioma.cambiarLenguaje();
    }
    
  }
  const handleClickLogoHome=()=>{
        navigate('/');
        onClose();
  }

  useEffect(()=>{
    if(pathname==='/'){
      setIsHome(true)
    }else{
      setIsHome(false)
    }
    let ancho=innerWidth
    if(ancho>1300){
        setMobile(false)
    }else{
        setMobile(true)
    }
    window.addEventListener('scroll',()=>{
        
      let offset = window.pageYOffset;
      let heightWindow= window.innerHeight;
      if(offset>=(heightWindow)){
            setWhiteNo(true)
      }else{
             setWhiteNo(false)
      }
     
    }
    )
  })
  
  return (
    <>      
          <header className='headerRo'></header>
           { whiteNo || !isHome?<Link  className='login' to='/'><Image  src={mobile?logoMobile:logoNegro} alt='concha y toro'></Image></Link>
          :<Link  className='login' to='/'><Image  src={mobile?logoMobi:logoBlanco} alt='concha y toro'></Image></Link>}
          <Link  className='menuNav viña' to='/'><Image  src={isHome?viña:viña2} alt='concha y toro'></Image></Link>
          
          <div className='contenedorImagen'>
          { whiteNo || !isHome? <Image  className='menuNav'   onClick={() => handleClick()}  src={menu}  alt='menu concha y toro' /> 
               :<Image   className='menuNav' onClick={() => handleClick()} src={white} alt='cerrar concha y toro' />}
             
          </div>
          <footer className='foot'>
            <div className='foot1'>
                <Link  to="/sumate" className='botonPrincipal negroEfect botonPrincipalEfect'><span><FormattedMessage id='menu1'/></span></Link>
                <Link  className='footIma' to='/'><Image  src={logoNegro} alt='concha y toro'></Image></Link>
                <a  target='_blanck'  href='https://www.google.com/maps/dir//Ruta+k-650+km+10,+Pencahue,+Maule,+Chile/@-35.4407948,-71.9040051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9665dbc7fd9d4015:0xe9dcd2b79e295e37!2m2!1d-71.833965!2d-35.440815' className='botonPrincipal negroEfect botonPrincipalEfect'><span><FormattedMessage id='menu2'/></span></a>
            </div>
            <div className='foot2'>
                  <div>
                        <Link to='/'>Home</Link>
                        <Link to='/innovacion'><FormattedMessage id='menu3'/></Link>
                        <Link to='/infraestructura'><FormattedMessage id='menu4'/></Link>
                  </div>
                  <div>
                        <Link to='/quienes-somos'><FormattedMessage id='menu5'/></Link>
                        <Link to='/equipo'><FormattedMessage id='menu6'/></Link>
                        <Link to='/contacto'><FormattedMessage id='menu7'/></Link>
                  </div>
                  <div>
                        <Link to='/news'><FormattedMessage id='alizan'/></Link>
                        <a href='https://vinacyt.com/c/innovacion/'><FormattedMessage id='new'/></a>
                        <Link to='/'><FormattedMessage id='menu8'/></Link>
                  </div>
                  <div>
                        <Link to='/unite'><FormattedMessage id='homeUnete'/></Link>
                        <Link to='/sumate'>Newsletter</Link>

                  </div>
                  
            </div>
            <div className='foot3'>
              <p><FormattedMessage id='menu10'/></p>
              <Image src={viña} alt={'concha toro'}></Image>
            </div>

          </footer>
          <footer className='footMobi'>
                <div className='foot1 foot1Mob'>
                    <Link  to="/sumate" className='botonPrincipal negroEfect botonPrincipalEfect'><span><FormattedMessage id='menu1'/></span></Link>
                    <a target='_blanck'  href='https://www.google.com/maps/dir//Ruta+k-650+km+10,+Pencahue,+Maule,+Chile/@-35.4407948,-71.9040051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9665dbc7fd9d4015:0xe9dcd2b79e295e37!2m2!1d-71.833965!2d-35.440815' className='botonPrincipal negroEfect botonPrincipalEfect'><span><FormattedMessage id='menu2'/></span></a>
                    <Link  className='footIma' to='/'><Image  src={viña2} alt='concha y toro'></Image></Link>
               </div>
               <div className='foot2 foot2Mob'>
                        <Link to='/'>Home</Link>
                        <Link to='/innovacion'><FormattedMessage id='menu3'/></Link>
                        <Link to='/infraestructura'><FormattedMessage id='menu4'/></Link>
                        <Link to='/quienes-somos'><FormattedMessage id='menu5'/></Link>
                        <Link to='/equipo'><FormattedMessage id='menu6'/></Link>
                        <Link to='/contacto'><FormattedMessage id='menu7'/></Link>
                        <a target='_blanck' href='https://vinacyt.com/c/innovacion/'>News</a>
                        <a target='_blanck' href="https://accounts.google.com/o/saml2/idp?idpid=C04l02k3a&SAMLRequest=fVLLbtswELz7KwLe9VacmLAcqHYfBlzbiN0eegkoamMTpbgql2qSvy8ltUlToFmAh53dGcwsOCfR6JaXnTubW%2FjRAbnJha%2FHRhviw7BgnTUcBSniRjRA3El%2BKD9veBrGvLXoUKJm%2F9DeZgkisE6hGWnrVcF22%2Feb3cf19u4KRFwldV5lU5heppDHSVZdV7MM8mxaQzaTl%2FLq%2FhpG6lew5HUK5mXZZFQj6mBtyAnjPB6naZAkQTo7xjHPpzxPv43UlQ%2BrjHAD%2FexcSzyKhJTYGUfhCfGkIZTYRBj1idJI1e2Nf6oulnGu4%2FR7Jkal%2Fe8jvFOmVub0dvZqXCL%2B6XjcB%2Fvd4TiKlH9uskRDXQP2APankvDldvNiTyrlLRl5Fk8OLQ72HtpA40mZsD23N73TOyGJLQbRed%2Fz4SJ24edB38%2Bjv9GXvZZvvdv1ao9ayacB7%2BsD2ka4%2F4dKwmRAVB3cD6scGqF0WdcWiNizTqk1PiwtCAcFc7YDdhEtJqOZ119w8Qs%3D&RelayState=%2Fprogramas-transferencia-tecnologica%2F" className='boton22 botonPrincipal botonPrincipalEfect'><span><FormattedMessage id='menu8'/></span></a>
            </div>
              <div className='foot3 foot3Mobi'>
              <p><FormattedMessage id='menu10'/> </p>
          
             </div>
          </footer>
      <Drawer   onClose={onClose} isOpen={isOpen} size={'full'}>
        <DrawerOverlay />
        <DrawerContent className='deslizante'>
          <DrawerHeader className='headerDrawer'>
            <Image  className='logo' onClick={handleClickLogoHome}  src={logo}  alt='logo concha y toro' />
           <Image className='cerrarMenu' onClick={onClose} src={clouse} alt='cerrar concha y toro' />
           

            </DrawerHeader>
          <DrawerBody className='containMenu'> 
           {LINKS.map((link)=>(
            <><Link onClick={()=>onClose()} to={link.href} key={link.id}>
              <Text color={pathname===link.href?'black':'#BCBCBC'} className='menus'> 
              <FormattedMessage id={link.id}/>
               </Text>
               </Link>
            </>
           ))}
              <a onClick={()=>onClose()} href='https://vinacyt.com/c/innovacion/' key={'ss'}>
              <Text  className='menus'> 
              <FormattedMessage id='new'/>
               </Text>
               </a>
                    <div> <a target='_blanck' href="https://accounts.google.com/o/saml2/idp?idpid=C04l02k3a&SAMLRequest=fVLLbtswELz7KwLe9VacmLAcqHYfBlzbiN0eegkoamMTpbgql2qSvy8ltUlToFmAh53dGcwsOCfR6JaXnTubW%2FjRAbnJha%2FHRhviw7BgnTUcBSniRjRA3El%2BKD9veBrGvLXoUKJm%2F9DeZgkisE6hGWnrVcF22%2Feb3cf19u4KRFwldV5lU5heppDHSVZdV7MM8mxaQzaTl%2FLq%2FhpG6lew5HUK5mXZZFQj6mBtyAnjPB6naZAkQTo7xjHPpzxPv43UlQ%2BrjHAD%2FexcSzyKhJTYGUfhCfGkIZTYRBj1idJI1e2Nf6oulnGu4%2FR7Jkal%2Fe8jvFOmVub0dvZqXCL%2B6XjcB%2Fvd4TiKlH9uskRDXQP2APankvDldvNiTyrlLRl5Fk8OLQ72HtpA40mZsD23N73TOyGJLQbRed%2Fz4SJ24edB38%2Bjv9GXvZZvvdv1ao9ayacB7%2BsD2ka4%2F4dKwmRAVB3cD6scGqF0WdcWiNizTqk1PiwtCAcFc7YDdhEtJqOZ119w8Qs%3D&RelayState=%2Fprogramas-transferencia-tecnologica%2F" className='boton22 botonPrincipal botonPrincipalEfect'><span><FormattedMessage id='menu8'/></span></a></div>
          </DrawerBody>
            <DrawerFooter className='containLenguajeF'>
{/*             <div className='containLenguaje'><span className='lenguaje'>ESP</span><Switch  colorScheme={'#EBEBE7'} size='lg' id='email-alerts' isChecked={isCheck} onChange={handleClickIdioma} /> <span className='lenguaje'>ENG</span></div>
 <div className='lenguajeDisplay'>
                <p onClick={()=>handleClickIdioma2("es")} className={lenguajeState==='es'?'colorLenguaje':''}>Español</p>
                <p onClick={()=>handleClickIdioma2("en")} className={lenguajeState==='en'?'colorLenguaje':''}>Ingles</p>
            </div>
           */}            
            </DrawerFooter>
        </DrawerContent>
        

      </Drawer>
    </>
  )
}

export default MenuMobile