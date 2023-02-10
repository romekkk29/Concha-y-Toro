import { Image, Box } from '@chakra-ui/react';
import './stylessContacto.css';
import imgContacto from './../../assets/unete.jpg'
import {useState,useEffect} from 'react'
import {FormattedMessage} from 'react-intl'
import { useIntl } from 'react-intl';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import spinner from './../../assets/spinner.gif'

const  Unite: React.FC=()=> {
    const intl = useIntl();

    const [nombre,setNombre]=useState('')
    const [mail,setMail]=useState('')
    const [area,setArea]=useState('')
    const [respuesta,setRespuesta]=useState('false')
    const [spinnerSee,setSpinnerSee]=useState(false)
    useEffect(()=>{
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      },[])
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            setSpinnerSee(true)
            emailjs.sendForm('service_io7f0e2','template_kp3jbv3',e.currentTarget,'JkE3gZq4tbRszaYME')
            .then((result) => {
                setSpinnerSee(false)
/*                 setRespuesta('Se envio el correo con exito')
 */             Swal.fire(
                     {
                          title:'Gracias por interesarte en nuestro equipo. Te estaremos contactando',
                          confirmButtonText: 'Volver',
                            }
                        )
                 }, (error) => {
                setSpinnerSee(false)
/*                 setRespuesta('El email no se envio, por favor intentar en otro momento')
 */
            });
    }       
    return (
        <>
        <section className='pantallaInicial pantallaInicialContacto'>
            <h1 className='tituloInicio'><FormattedMessage id='unite2'/></h1>
        </section>
        <section className='sectionFormContacto'>
                <form  onSubmit={handleSubmit} className='formContacto'>
                    <h2><FormattedMessage id='unite1'/></h2>
                    <input type='text' name='user_name' value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder={ intl.formatMessage({ id: 'contactoNombre' })}></input>
                    <input type='text' name='user_email'  value={mail} onChange={(e)=>setMail(e.target.value)} placeholder={ intl.formatMessage({ id: 'contactoMail' })}></input>
                    <textarea value={area} name='user_message' onChange={(e)=>setArea(e.target.value)} placeholder={ intl.formatMessage({ id: 'uniteCV' })}></textarea>
                    {respuesta==='false'?'':<p className='respuesta'>{respuesta}</p>}
                    {spinnerSee?<Box display='flex' marginLeft='25px' width='100%'><Image textAlign='center' src={spinner}/></Box>:''}
                    <button value='Send' type='submit'><FormattedMessage id='contacto3'/></button>
                </form>
                <div className='imageContacto'>
                    <Image src={imgContacto} alt='contacto'></Image>
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


        </>
        ) 
}
export default Unite;