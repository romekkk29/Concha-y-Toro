import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import {LenguajeProvider} from './context/LenguajeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
        <LenguajeProvider>
            
                    <ChakraProvider theme={theme} >  
                        <App />
                    </ChakraProvider>
         
        </LenguajeProvider>
  </React.StrictMode>
)
