import { Image } from '@chakra-ui/react';
import './stylessSomos.css';
import imgSomos from './../../assets/somosP.jpg'
import somos1 from './../../assets/home5.jpg'
import somos2 from './../../assets/vision.png'
import { useEffect } from 'react';
import {FormattedMessage} from 'react-intl'
import Swal from 'sweetalert2'

const  QuienesSomos: React.FC=()=> {
    useEffect(()=>{
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      },[])
      const funcionTi=()=>{
        Swal.fire({
          title: 'La implementación no se encuentra disponible en este momento',
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(2000)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        
      }
    return (
        <>
         <section className='pantallaInicial pantallaInicialQuienes'>
             <h1 className='tituloInicio'><FormattedMessage id='quienes1'/></h1>
            <p className='tituloPQuienes'><FormattedMessage id='quienes2'/></p>
            <button onClick={funcionTi} className='butonPlan'><FormattedMessage id='quienes3'/></button>

        </section>
        <section className='completoSomos'>
        <Image className='imgSomos' src={imgSomos} alt='concha y toro'></Image>
        <h2 className='subtituloSomos'><FormattedMessage id='quienes4'/></h2>
        <p className='pSomos'><FormattedMessage id='quienes5'/></p>
        <h2 className='subtituloSomos'><FormattedMessage id='quienes6'/></h2>
        <p className='pSomos'><FormattedMessage id='quienes7'/> </p>
        <p className='pSomos'><FormattedMessage id='quienes8'/></p>
        <div className='containImagesSomos'>
            <Image src={somos1} alt='concha y toro'></Image>
            <Image src={somos2} alt='concha y toro'></Image>
        </div>
        <h3 className='h3Somos'>01</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes9'/></p>
        <h3 className='h3Somos'>02</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes10'/></p>

        <h3 className='h3Somos'>03</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes11'/></p>

        <h3 className='h3Somos'>04</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes12'/></p>
        <h3 className='h3Somos'>05</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes13'/></p>
        <h3 className='h3Somos'>06</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes14'/> </p>
        <h3 className='h3Somos'>07</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes15'/></p>
        <h3 className='h3Somos'>08</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes16'/></p>
        <h3 className='h3Somos'>09</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes17'/></p>
        <h3 className='h3Somos'>10</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes18'/></p>
        <h3 className='h3Somos'>11</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes19'/></p>
        <h3 className='h3Somos'>12</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes20'/></p>
        <h3 className='h3Somos'>13</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes21'/></p>
        <h3 className='h3Somos'>14</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes22'/> </p>
        <h3 className='h3Somos'>15</h3>
        <p className='pasosSomos'><FormattedMessage id='quienes23'/> </p>
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
export default QuienesSomos;