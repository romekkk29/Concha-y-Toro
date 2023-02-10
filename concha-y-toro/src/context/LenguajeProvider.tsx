import { useReducer, useState} from "react";
import MensajesEspañol from '../lang/es-AR.json'
import {IntlProvider} from 'react-intl'
import {LenguajeContext} from './LenguajeContext'
import { TextosState } from "./interface";
import { LenguajeReducer } from "./LengajeReducer";

const INITIAL_STATE: TextosState={    lenguaje:'es',
                                      textos:MensajesEspañol};

 interface props{
   children:JSX.Element | JSX.Element[]
 }

export const LenguajeProvider=({ children } : props )=>{

   const [lenguajeState, dispatch]=useReducer(LenguajeReducer,INITIAL_STATE);
   const cambiarLenguaje=()=>{
      if(lenguajeState.lenguaje==='es'){
         dispatch({type:'en'})
      }else if(lenguajeState.lenguaje==='en'){
         dispatch({type:'es'})
      }
         
   }
   return (
        <LenguajeContext.Provider value={{
         lenguajeState,
         cambiarLenguaje}}>
           <IntlProvider locale={lenguajeState.lenguaje} messages={lenguajeState.textos}>
                  {children}
            </IntlProvider>   
        </LenguajeContext.Provider>
   )

}

/*  


const [mensajes,setMensajes]=useState(MensajesEspañol);
const [locale,setLocale]=useState('es-AR');
 const lenguaje=(lang:string)=>{
   if(lang==='es'){
      setMensajes(MensajesEspañol)
      setLocale('es-AR')
   }else if(lang==='en'){
      setMensajes(MensajesIngles)
      setLocale('en-US')
   }else{
      setMensajes(MensajesEspañol)
      setLocale('es-AR')
   }
} */
/* <TodoContext.Provider value={{lenguaje:lenguaje}}>
<IntlProvider locale={locale} messages={mensajes}>
     {children}
</IntlProvider>

</TodoContext.Provider> */