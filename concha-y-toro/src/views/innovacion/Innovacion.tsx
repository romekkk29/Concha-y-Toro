import './stylessInnovacion.css';
import './../programas/stylessPrograma.css';
import { useEffect,useRef, useState } from 'react';
import {FormattedMessage} from 'react-intl'
import { Image} from '@chakra-ui/react'

import programaSvg1 from './../../assets/programaSvg1.svg'
import programaSvg2 from './../../assets/programaSvg2.svg'
import programaSvg3 from './../../assets/programaSvg3.svg'
import programaSvg4 from './../../assets/programaSvg4.svg'
import programaSvg5 from './../../assets/programaSvg5.svg'
const  Innovacion: React.FC=()=> {
    const first=useRef<any>(null)
    const latest=useRef<any>(null)
  
    useEffect(()=>{
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },[])
    useEffect(()=>{
      
      window.addEventListener('scroll',()=>{
          
        let offset = window.pageYOffset;
        let heightWindow= window.innerHeight;
      
        if(offset>=(heightWindow/2+250)){
              first.current.style.backgroundAttachment='fixed';
        }else{
               first.current.style.backgroundAttachment='scroll';
        }
        if(offset>=(heightWindow/2+500*4+250)){
          latest.current.style.backgroundAttachment='scroll';
           }else{
           latest.current.style.backgroundAttachment='fixed';
    }
      }
      )
    })
   
    return (
        <>
       <section className='pantallaInicial pantallaInicialPrograma'>
             <h1 className='tituloInicioPrograma'><FormattedMessage id='inno1'/></h1>

        </section>
      <div className='bigContainer'>
          <div className='containerTextos'>
          <section className='img innovacion1Mobile'>
          </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg51Mov' src={programaSvg1} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='inno2'/></p><p className='textoBajo'><br/><FormattedMessage id='inno3'/> </p></section  >
        <section   className='img innovacion1Mobile innovacion2Mobile'>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg52Mov' src={programaSvg2} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='inno4'/></p><p className='textoBajo'><br/><FormattedMessage id='inno5'/> </p></section  >
        <section   className='img innovacion1Mobile innovacion3Mobile'>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg53Mov' src={programaSvg3} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='inno6'/></p><p className='textoBajo'><br/><FormattedMessage id='inno7'/></p></section  >
        <section   className='img innovacion1Mobile innovacion4Mobile'>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg54Mov' src={programaSvg4} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='inno8'/></p><p className='textoBajo'><br/><FormattedMessage id='inno9'/></p></section  >
        <section  className='img innovacion1Mobile innovacion5Mobile'>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg55Mov' src={programaSvg5} alt='concha y toro'></Image><p className='textoArriba'>Tubes</p><p className='textoBajo'><br/><FormattedMessage id='inno10'/></p></section  >
    </div>
    <div className='containerImages'>
        <section ref={first}  className='img innovacion1'>
        </section  >
        <section   className='img innovacion2'>
        </section  >
        <section   className='img innovacion3'>
        </section  >
        <section   className='img innovacion4'>
        </section>
        <section  ref={latest} className='img innovacion5'>
        </section  >

    </div>
</div>
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
<br></br>
<br></br>
<br></br>
<br></br>

        </>
        ) 
}
export default Innovacion;