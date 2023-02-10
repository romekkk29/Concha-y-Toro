import './stylesHome.css'
import {FormattedMessage} from 'react-intl'
import { Link } from 'react-router-dom';
import { useEffect,useRef, useMemo} from 'react';
import { Image,Box} from '@chakra-ui/react';
import alianza1 from './../../assets/alianza1.jpg'
import alianza2 from './../../assets/alianza2.jpg'
import alianza3 from './../../assets/alianza3.jpg'
import alianza4 from './../../assets/alianza4.jpg'
import alianza5 from './../../assets/alianza5.jpg'
import alianza6 from './../../assets/alianza6.jpg'
import ImageGallery from 'react-image-gallery';
import home22 from './../../assets/home22.jpg'
import home33 from './../../assets/home33.jpg'
import home from './../../assets/home.jpg'
import news from './../../assets/NEWS.svg'
import "react-image-gallery/styles/css/image-gallery.css";
const  Home: React.FC=()=> {
    const first=useRef<any>(null)
    const latest=useRef<any>(null)
    const logos=useRef<any>(null)
    const logos2=useRef<any>(null)

    const images = [
      {
        original: home22,
        thumbnail: home22,
      },
      {
        original: home,
        thumbnail: home,
      },
      {
        original: home33,
        thumbnail: home33,
      },
    ];
    
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
          let width2= window.innerWidth;
          if(offset>=(heightWindow/2+450)){
                first.current.style.backgroundAttachment='fixed';
          }else{
                 first.current.style.backgroundAttachment='scroll';
          }
          if(offset>=(heightWindow/2+486*4)){
            latest.current.style.backgroundAttachment='scroll';
             }else{
             latest.current.style.backgroundAttachment='fixed';
            }
          if(width2>1300){
            if(offset>=(heightWindow/2+2400)){
              logos.current.style.marginLeft='0%';
            }else{
              logos.current.style.marginLeft='-100%';
            } 
            if(offset>=(heightWindow/2+2700)){
              logos2.current.style.marginLeft='5%';
            }else{
              logos2.current.style.marginLeft='-100%';
            }   
          }else{
            logos.current.style.flexDirection='column';
            logos2.current.style.marginTop='70px';
            logos2.current.style.flexDirection='column';
            console.log(offset)
            if(offset>=(heightWindow/2+3500)){
              logos.current.style.marginLeft='0%';
            }else{
              logos.current.style.marginLeft='-100%';
            } 
            if(offset>=(heightWindow/2+3800)){
              logos2.current.style.marginLeft='0%';
            }else{
              logos2.current.style.marginLeft='-100%';
            }   
          }
         
      
        }
        )
      })
    return (
        <>
            <section className='pantallaInicial'>
          
              <div className='fi'><div className='pa'>
              <p className='tituloPrincipal55'><FormattedMessage id='centro11'/></p>
              <h1 className='tituloPrincipal'><FormattedMessage id='home1'/></h1>
              <Link  to="/innovacion" className='botonPrincipal botonPrincipalEfect botonPrincipalEfect34'><span><FormattedMessage id='homeDescubrir'/></span></Link>
              </div>
              <div className='fa'>
              <ImageGallery slideInterval={4000} slideDuration={700} autoPlay={true} showPlayButton={false} showFullscreenButton={false} lazyLoad={true} showThumbnails={false} showNav={false} items={images} />
              </div>
              </div> 
              </section> 
           
            <div className='bigContainer'>
                <div className='containerTextos'>
                    <section  className='text'><p><FormattedMessage id='home3'/></p><div className='imgMob imgMob1'></div><Link to='/programas' className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></Link></section  >
                    <section   className='text'><p><FormattedMessage id='home4'/></p><div className='imgMob imgMob2'></div><Link  to="/innovacion" className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></Link></section  >
                    <section   className='text'><p><FormattedMessage id='home5'/></p><div className='imgMob imgMob3'></div><div className='containButtonIn'><Link  to='/infraestructura' className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></Link><a  href='https://www.ecnology.org/tour-virtual-cii-light' target='_blanck' className='buton efect'><span><FormattedMessage id='home360'/></span></a></div></section  >
                    <section   className='text'><p><FormattedMessage id='home6'/></p><div className='imgMob imgMob4'></div><div className='containButtonIn'><Link  to="/equipo" className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></Link>{/* <Link  to='/unite' className='buton efect'><span><FormattedMessage id='homeUnete'/></span></Link> */}</div></section>
                </div>
                <div className='containerImages'>
                    <section ref={first} className='img prueba1'></section >
                    <section   className='img prueba2'></section  >
                    <section   className='img prueba3'></section  >
                    <section  ref={latest} className='img prueba4'></section  >
                </div>
            </div>
          
           

            <Box className='alianzass' display='flex' flexWrap='wrap' justifyContent='center' alignItems='center'><h3><FormattedMessage id='alianzas'/></h3> </Box>
            <Box marginBottom='30px' transition='all 2s ease' marginLeft='-100%' ref={logos} display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' padding='0px 80px' gap='120px'>
              <Image transform='scale(0.7)' src={alianza1} alt='' />
              <Image transform='scale(0.7)' src={alianza2} alt='' />
{/*               <Image transform='scale(0.7)' src={alianza3} alt='' />
 */}            </Box>
            <Box  transition='all 2s ease' marginLeft='-100%' ref={logos2} display='flex'  justifyContent='center' alignItems='center' padding='0px 80px' gap='50px'>
              <Image transform='scale(0.6)' src={alianza4} alt='' />
              <Image transform='scale(0.6) ' src={alianza6} alt='' />
              <Image transform='scale(0.6) ' src={alianza5} alt='' />
             
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <div className='containButtonIn alianze'><Link  to="/news" className='buton efect'><span><FormattedMessage id='homeDescubrir'/></span></Link></div>
            
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
export default Home;