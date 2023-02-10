import logo from './../../assets/logo.svg'
import {Box, Image} from '@chakra-ui/react'

import './stylessInicio.css'
import { useEffect, useState } from 'react'
import animacion from './animacion.mp4'

const  Inicio: React.FC=()=> {
    const [see,dontSee]=useState(true)
    const [see2,dontSee2]=useState(true)
    const [see3,dontSee3]=useState(true)

    useEffect(()=>{
            setTimeout(()=>{
                dontSee(false)
            },6500)
            setTimeout(()=>{
                dontSee2(false)
            },6500)
            setTimeout(()=>{
                dontSee3(false)
            },8000)
    },[])
    return (
        <>         
                    <Box  display={see3?'':'none'} className='section' transition='all 1.5s ease' backgroundColor={see2?'':'rgba(0,0,0,0)'} >
                    {see?<video  autoPlay loop muted playsInline  onContextMenu={()=>false}  preload="auto"  id="miVideo"   src={animacion} >
                    </video>:''}
                    </Box>
        </>
        )
}

export default Inicio