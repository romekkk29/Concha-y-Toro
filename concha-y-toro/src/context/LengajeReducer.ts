import { TextosState } from "./interface"
import MensajesIngles from '../lang/en-US.json'
import MensajesEspañol from '../lang/es-AR.json'
type LenguajeAction=
 | {type: 'es'}
 | {type: 'en'};

export const LenguajeReducer=( state:TextosState,action: LenguajeAction):TextosState=>{
    
    switch(action.type){
        case 'es':
            return {    lenguaje:'es',
                        textos:MensajesEspañol};
            break;
        case 'en':
            return {    lenguaje:'en',
                        textos:MensajesIngles};
            break;
        default:
            return state;
            break;

    }

}