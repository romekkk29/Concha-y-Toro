import './stylessInfraestructura.css';
import './../programas/stylessPrograma.css';
import { useDisclosure,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,Image} from '@chakra-ui/react'
import clouse from './../../assets/imageClouse.svg'
import { useEffect,useRef, useState } from 'react';
import {FormattedMessage} from 'react-intl'


const  Infraestructura: React.FC=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [disWhere,setDisWhere]=useState('industria')
    const first=useRef<any>(null)
    const latest=useRef<any>(null)
    const handleOpen=(nameS:String)=>{
        if(nameS==='industria'){
            setDisWhere('industria')
        }else if(nameS==='susten'){
          setDisWhere('susten')
        }else if(nameS==='recu'){
          setDisWhere('recu')
        }else if(nameS==='clim'){
          setDisWhere('clim')
        }
        onOpen()
    }
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
        console.log(offset)
        console.log(heightWindow/2)
        if(offset>=(heightWindow/2+250)){
              first.current.style.backgroundAttachment='fixed';
        }else{
               first.current.style.backgroundAttachment='scroll';
        }
        if(offset>=(heightWindow/2+500*4-250)){
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
             <h1 className='tituloInicioPrograma'><FormattedMessage id='infra1'/></h1>
              <p className='tituloInfraee'><FormattedMessage id='infra2'/></p>
        </section>
      <div className='bigContainer'>
          <div className='containerTextos'>
          <section className='img inno1Mobile'>
          </section  >
        <section  className='text'><p className='textoArriba'><FormattedMessage id='infra3'/> <br/><FormattedMessage id='infra4'/></p><p className='textoBajo'><br/><FormattedMessage id='infra5'/></p><button onClick={()=>handleOpen('industria')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section   className='img inno1Mobile inno2Mobile'>
        </section  >
        <section  className='text'><p className='textoArriba'><FormattedMessage id='infra6'/></p><p className='textoBajo'><br/><FormattedMessage id='infra7'/></p><button onClick={()=>handleOpen('susten')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section   className='img inno1Mobile inno3Mobile'>
        </section  >
        <section  className='text'><p className='textoArriba'><FormattedMessage id='infra8'/> <br/><FormattedMessage id='infra9'/></p><p className='textoBajo'><br/><FormattedMessage id='infra10'/> </p><button onClick={()=>handleOpen('recu')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section   className='img inno1Mobile inno4Mobile'>
        </section  >
        <section  className='text'><p className='textoArriba'><FormattedMessage id='infra11'/>  <br/><FormattedMessage id='infra12'/></p><p className='textoBajo'><br/><FormattedMessage id='infra13'/></p><button onClick={()=>handleOpen('clim')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
       
    </div>
    <div className='containerImages'>
        <section ref={first}  className='img inno1'>
        </section  >
        <section   className='img inno2'>
        </section  >
        <section   className='img inno3'>
        </section  >
        <section ref={latest}  className='img inno4'>
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
    <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className='headerDrawer headerDrawer22'>
            <Image className='cerrarMenu' onClick={onClose} src={clouse} alt='cerrar concha y toro' />
            </DrawerHeader>
          <DrawerBody className='containMenuDrawerTextInfra'> 
                {
                  disWhere==='industria'?<>
                  <div className='programMobiMarg'></div>
                  <h3><FormattedMessage id='infra3'/>{' '}<FormattedMessage id='infra4'/></h3>
            <p><FormattedMessage id='infra14'/></p>
            </>
              :disWhere==='susten'?<><h3><FormattedMessage id='infra6'/>
              </h3>
              <p><FormattedMessage id='infra15'/></p>

              </>    :disWhere==='recu'?
              <><h3><FormattedMessage id='infra8'/>{' '}<FormattedMessage id='infra9'/></h3>
              <p><FormattedMessage id='infra16'/></p>
              <p><FormattedMessage id='infra17'/></p>
              </>:disWhere==='clim'?
                 <><h3><FormattedMessage id='infra11'/>{' '}<FormattedMessage id='infra12'/></h3>
                 <p><FormattedMessage id='infra18'/> </p>
                  <p><FormattedMessage id='infra19'/></p>
                 </>
                 :''
       }
            
            <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
        ) 
}
export default Infraestructura;