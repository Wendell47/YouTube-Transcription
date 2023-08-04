'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import {CopySimple,CheckCircle} from '@phosphor-icons/react'
export default function CopyButton(){

    const[active, setActive]=useState(false)
    const[show,setShow]=useState(false)

    return(
        <button className={styles.button}
        onClick={()=>{ setActive(true)}}
        >
           
            <CheckCircle
            weight='duotone'
            className={!active && styles.hide}
            /> 
            <CopySimple
            weight='duotone'
            className={active && styles.hide}
            />
            {active && <span>copied</span>}
        </button>
    )
}