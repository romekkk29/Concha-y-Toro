import { createContext } from "react";
import {TextosState} from './interface';
export type LenguajeContextProps = {
    lenguajeState: TextosState,
    cambiarLenguaje: ()=>void
}
export const LenguajeContext = createContext<LenguajeContextProps>({} as LenguajeContextProps);