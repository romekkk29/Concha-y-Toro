import './stylessNews.css';
import './../programas/stylessPrograma.css';
import { useEffect,useRef, useState } from 'react';
import {FormattedMessage} from 'react-intl'
import { Image,Box} from '@chakra-ui/react';
import alianzas1 from './../../assets/alianza1.jpg'
import alianzas2 from './../../assets/alianza2.jpg'
import alianzas3 from './../../assets/alianza3.jpg'
import alianzas4 from './../../assets/alianza4.jpg'
import alianzas5 from './../../assets/alianza5.jpg'
import alianzas6 from './../../assets/alianza6.jpg'

const  News: React.FC=()=> {
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
             <h1 className='tituloInicioPrograma'><FormattedMessage id='alianzas'/></h1>

        </section>
   
        <section className='new1'>
          <div className='newDisplay'>
            <div className='newText'>
                <h2><FormattedMessage id='alianzas2'/></h2>
                <p><FormattedMessage id='alianzas3'/></p>
            </div>
            <div className='newIma'>
              <Image src={alianzas1}></Image>
            </div>
          </div>
          <div className='newDisplay'>
            <div className='newText'>
                <h2><FormattedMessage id='alianzas4'/></h2>
                <p><FormattedMessage id='alianzas5'/></p>
            </div>
            <div className='newIma'>
              <Image src={alianzas2}></Image>
            </div>
          </div>
          {/* <div className='newDisplay'>
            <div className='newText'>
                <h2><FormattedMessage id='alianzas6'/></h2>
                <p><FormattedMessage id='alianzas7'/></p>
            </div>
            <div className='newIma'>
              <Image src={alianzas3}></Image>
            </div>
          </div> */}
          <div className='newDisplay'>
            <div className='newText'>
                <h2><FormattedMessage id='alianzas8'/></h2>
                <p><FormattedMessage id='alianzas9'/></p>
            </div>
            <div className='newIma'>
              <Image src={alianzas4}></Image>
            </div>
          </div>
          <div className='newDisplay'>
            <div className='newText'>
                <h2><FormattedMessage id='alianzas10'/></h2>
                <p><FormattedMessage id='alianzas11'/></p>
            </div>
            <div className='newIma'>
              <Image src={alianzas5}></Image>
            </div>
          </div>
          <div className='newDisplay'>
            <div className='newText'>
                <h2><FormattedMessage id='alianzas12'/></h2>
                <p><FormattedMessage id='alianzas13'/></p>
            </div>
            <div className='newIma'>
              <Image src={alianzas6}></Image>
            </div>
          </div>
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
<br></br>
<br></br>
<br></br>
<br></br>

        </>
        ) 
}
export default News;