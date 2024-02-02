import React from 'react'
import Image from 'next/image'
import Styles from './Pdcard.module.scss'


function Pdcard(props:any) {
  return (
    <div className={`${Styles.container} ${props.hide ? Styles.hide:""}`}>
        <div className={Styles.box}>
        <div className={Styles.image}>
            <Image
      src={props.image}
      width={500}
      height={500}
      alt="Company Logo"
    />
            </div>
            <h4>{props.heading}</h4>
            <div className={Styles.detailsbtn}>
            <button>see details</button>
            </div>
            </div> 
    </div>
  )
}

export default Pdcard