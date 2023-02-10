import './stylessPrograma.css';
import { Switch,useDisclosure,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,Button,Image} from '@chakra-ui/react'
import clouse from './../../assets/imageClouse.svg'
import { useEffect,useRef, useState } from 'react';
import programaSvg1 from './../../assets/programaSvg1.svg'
import programaSvg2 from './../../assets/programaSvg2.svg'
import programaSvg3 from './../../assets/programaSvg3.svg'
import programaSvg4 from './../../assets/programaSvg4.svg'
import programaSvg5 from './../../assets/programaSvg5.svg'
import {FormattedMessage} from 'react-intl'

const  Programa: React.FC=()=> {
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
        }else if(nameS==='cons'){
          setDisWhere('cons')
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
             <h1 className='tituloInicioPrograma'><FormattedMessage id='program1'/></h1>

        </section>
      <div className='bigContainer'>
          <div className='containerTextos'>
          <section className='img programa1Mobile'>
              <Image className='programaSvg11' src={programaSvg1} alt='concha y toro'></Image>
          </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg11Mov' src={programaSvg1} alt='concha y toro'></Image>
        <p className='textoArriba'><FormattedMessage id='program2'/></p><p className='textoBajo'><span className='gris'><FormattedMessage id='program3'/></span><br/><br/><FormattedMessage id='program4'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program5'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program6'/>  </p><button onClick={()=>handleOpen('industria')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section   className='img programa1Mobile programa2Mobile'>
           <Image className='programaSvg11' src={programaSvg2} alt='concha y toro'></Image>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg21Mov' src={programaSvg2} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='program7'/></p><p className='textoBajo'><span className='gris'><FormattedMessage id='program8'/> </span><br/><br/><FormattedMessage id='program9'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program10'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span><FormattedMessage id='program11'/>   </p><button onClick={()=>handleOpen('susten')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section   className='img programa1Mobile programa3Mobile'>
        <Image className='programaSvg11' src={programaSvg3} alt='concha y toro'></Image>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg11Mov' src={programaSvg3} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='program12'/></p><p className='textoBajo'><span className='gris'> <FormattedMessage id='program13'/></span><br/><br/><FormattedMessage id='program14'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program15'/><span className='noMobi'>+</span><span className='siMobi'><br/></span><FormattedMessage id='program16'/>  </p><button onClick={()=>handleOpen('recu')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section   className='img programa1Mobile programa4Mobile'>
        <Image className='programaSvg11' src={programaSvg4} alt='concha y toro'></Image>
        </section  >
        <section  className='text'><Image className='programaSvg11 programaSvg11Mov' src={programaSvg4} alt='concha y toro'></Image><p className='textoArriba'><FormattedMessage id='program17'/></p><p className='textoBajo'> <span className='gris'><FormattedMessage id='program18'/></span><br/><br/><FormattedMessage id='program19'/><span className='noMobi'>+</span><span className='siMobi'><br/></span><FormattedMessage id='program20'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program21'/> </p><button onClick={()=>handleOpen('clim')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
        <section  className='img programa1Mobile programa5Mobile'>
        <Image className='programaSvg11' src={programaSvg5} alt='concha y toro'></Image>
        </section  >
        <section  className='text'><p className='textoArriba'><FormattedMessage id='program22'/></p><p className='textoBajo'> <span className='gris'><FormattedMessage id='program23'/></span><br/><br/><FormattedMessage id='program24'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program25'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span> <FormattedMessage id='program26'/> <span className='noMobi'>+</span><span className='siMobi'><br/></span><FormattedMessage id='program27'/> </p><button onClick={()=>handleOpen('cons')} className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></button></section  >
    </div>
    <div className='containerImages'>
        <section ref={first}  className='img programa1'>
        </section  >
        <section   className='img programa2'>
        </section  >
        <section   className='img programa3'>
        </section  >
        <section   className='img programa4'>
        </section  >
        <section  ref={latest} className='img programa5'>
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
          <DrawerBody className='containMenuDrawerText'> 
                {
                  disWhere==='industria'?<>
                  <div className='programMobiMarg'></div>
                  <h3><FormattedMessage id='program2'/> </h3>
                      <p><FormattedMessage id='program28'/> </p>
                      <div className='xxx'>
                          < button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                          <button onClick={()=>setDisWhere('industria2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>

                          </div>
                      </>
                       :disWhere==='industria2'?
                       <>
                        <h3><FormattedMessage id='program2'/></h3>
                       <p><FormattedMessage id='program29'/></p>
                        <div className='xxx'>
                        <button onClick={()=>setDisWhere('industria')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
                          < button onClick={()=>setDisWhere('industria3')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>
                          </div>
                         </>
                       :disWhere==='industria3'?
                       <>
                       <h6><FormattedMessage id='innoAccion'/></h6> 
                       <p><FormattedMessage id='program30'/></p>
                        <p><FormattedMessage id='program31'/></p>
                        <div className='xxx'>
                        <button onClick={()=>setDisWhere('industria2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
                          < button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                          </div>
                         </>
                         
              
              :disWhere==='susten'?<><h3><FormattedMessage id='program7'/></h3>
              <p>
              <FormattedMessage id='program32'/> </p>
              <div className='xxx'>
                 <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                 <button onClick={()=>setDisWhere('susten2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>
                 </div>
              </>:disWhere==='susten2'?<><h3> <FormattedMessage id='program7'/></h3>
              <p> <FormattedMessage id='program33'/></p>
              <div className='xxx'>
                 <button onClick={()=>setDisWhere('susten')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
                 <button onClick={()=>setDisWhere('susten3')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>

                 </div>
              </>
              :disWhere==='susten3'?<>
              <h6><FormattedMessage id='innoAccion'/> </h6> 
              <p><FormattedMessage id='program34'/></p>
              <p><FormattedMessage id='program35'/></p> 
              <p><FormattedMessage id='program36'/></p> 
              <div className='xxx'>
              <button onClick={()=>setDisWhere('susten2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
                 <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                 </div>
              </>    :disWhere==='recu'?
              <><h3><FormattedMessage id='program12'/></h3>
              <p><FormattedMessage id='program37'/></p>
              <div className='xxx'>
              <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>

              <button onClick={()=>setDisWhere('recu2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>
                 </div>
              </>
               :disWhere==='recu2'?
               <><h3><FormattedMessage id='program12'/></h3>
               <p><FormattedMessage id='program38'/></p>
               <div className='xxx'>
                                  <button onClick={()=>setDisWhere('recu')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
               <button onClick={()=>setDisWhere('recu3')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>
                  </div>
               </>:disWhere==='recu3'?<>
              <h6><FormattedMessage id='innoAccion'/> </h6> 
              <p><FormattedMessage id='program39'/></p>
              <p><FormattedMessage id='program40'/></p> 
              <p><FormattedMessage id='program41'/></p> 
              <p><FormattedMessage id='program42'/></p> 
              <p><FormattedMessage id='program43'/></p> 
              <div className='xxx'>
                  <button onClick={()=>setDisWhere('recu2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
                 <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                 </div>
              </>
              :disWhere==='clim'?
                 <><h3><FormattedMessage id='program17'/></h3>
                 <p><FormattedMessage id='program44'/> </p>
                 <div className='xxx'>
                 <button onClick={()=>setDisWhere('clim2')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='siguiente'/></span></button>
                 <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                 </div>
                 </>
                 :disWhere==='clim2'?<>
                                  <p><FormattedMessage id='program45'/> </p>
                 <h6><FormattedMessage id='innoAccion'/> </h6> 
                 <p><FormattedMessage id='program46'/></p>
                 <div className='xxx'>
                 <button onClick={()=>setDisWhere('clim')} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='atras'/></span></button>
                 <button onClick={()=>onClose()} className='buton efect mobiProg'><span className='verMenos'><FormattedMessage id='verMenos'/></span></button>
                 </div>
                 </>
                 :disWhere==='cons'?
                 <><h3><FormattedMessage id='program22'/></h3>
                 <p><FormattedMessage id='program47'/></p>
                 </>:''
       }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
        ) 
}
export default Programa;