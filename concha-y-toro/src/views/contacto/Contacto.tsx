import { Image, Box } from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl'
import { useIntl } from 'react-intl';

import './stylessContacto.css';
import imgContacto from './../../assets/imgContacto.jpg'
import {useState,useEffect} from 'react'
import emailjs from '@emailjs/browser';
import spinner from './../../assets/spinner.gif'
import Swal from 'sweetalert2'
const  Contacto: React.FC=()=> {
    const [nombre,setNombre]=useState('')
    const intl = useIntl();
    const [mail,setMail]=useState('')
    const [spinnerSee,setSpinnerSee]=useState(false)
    const [area,setArea]=useState('')
    const [respuesta,setRespuesta]=useState('false')
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
/*                 setRespuesta('Se envio el correo con exito')
 */                setSpinnerSee(false)
                Swal.fire(
                    {
                        title:'Gracias por contactarnos. Pronto recibiras una respuesta',
                        confirmButtonText: 'Volver',
                }
                    )
            }, (error) => {
/*                 setRespuesta('El email no se envio, por favor intentar en otro momento')
 */                setSpinnerSee(false)

            });
    }  
/*     const handleSubmit2  =(e:React.FormEvent<HTMLFormElement>)=>{ 
        e.preventDefault()

    fetch("https://formsubmit.co/romegomez29@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data =>  setRespuesta('Se envio el correo con exito'))
    .catch(error =>    setRespuesta('El email no se envio, por favor intentar en otro momento'));} */
    return (
        <>
        <section className='pantallaInicial pantallaInicialContacto'>
            <h1 className='tituloInicio'><FormattedMessage id='contacto1'/></h1>
        </section>
        <section className='sectionFormContacto'>
                <form  onSubmit={handleSubmit}  className='formContacto'>
                    <h2><FormattedMessage id='contacto2'/></h2>
                    <input type='text' name='user_name' value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder={ intl.formatMessage({ id: 'contactoNombre' })}></input>
                    <input type='text' name='user_email'  value={mail} onChange={(e)=>setMail(e.target.value)} placeholder={ intl.formatMessage({ id: 'contactoMail' })}></input>
                    <textarea value={area} name='user_message' onChange={(e)=>setArea(e.target.value)} placeholder={ intl.formatMessage({ id: 'contactoAcerca' })}></textarea>
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
export default Contacto;