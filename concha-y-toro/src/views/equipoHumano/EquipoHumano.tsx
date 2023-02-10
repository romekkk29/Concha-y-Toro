import './../quienesSomos/stylessSomos.css';
import { Image, Link } from '@chakra-ui/react';
import imgSomos from './../../assets/grupoo.jpg'
import somos1 from './../../assets/home4.jpg'
import somos2 from './../../assets/home2.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {FormattedMessage} from 'react-intl'

const  EquipoHumano: React.FC=()=> {
    const navigate= useNavigate()
    useEffect(()=>{
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      },[])
    return (
        <>
         <section className='pantallaInicial pantallaInicialQuienes'>
             <h1 className='tituloInicio'><FormattedMessage id='equipo1'/></h1>
            <p className='tituloPQuienes'><FormattedMessage id='equipo2'/></p>
{/*             <button onClick={()=>navigate('/unite')} className="butonPlan"><FormattedMessage id='equipo3'/></button>
 */}            
        </section>
        <section className='completoSomos'>
        <Image className='imgSomos' src={imgSomos} alt='concha y toro'></Image>
        <p className='pSomos equipoMargin'> <FormattedMessage id='equipo4'/></p>
        <p className='pSomos'><FormattedMessage id='equipo5'/></p>
        <div className='containImagesSomos'>
            <Image src={somos1} alt='concha y toro'></Image>
            <Image src={somos2} alt='concha y toro'></Image>

        </div>
        <p className='pSomos equipoMargin'><FormattedMessage id='equipo6'/> </p>

        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
        ) 
}
export default EquipoHumano;