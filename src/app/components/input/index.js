'use client'

import styles from './styles.module.css'
import {XCircle} from '@phosphor-icons/react'

export default function Input({placeholder}){
    return(
       
        <div className={styles.input_wrapper}>
             <input
                className={styles.input}
                placeholder={placeholder}
            />
            <XCircle
            className={styles.XCircle}
            weight='duotone'
            />
        </div>
    )
}