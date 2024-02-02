import React from 'react'
import Image from 'next/image'
import Styles from './Pdcard.module.scss'
import { useRouter } from 'next/router';



function Pdcard(props:any) {
  const router = useRouter();
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
            <button onClick={()=>{router.push("/product")}}>see details</button>
            </div>
            </div> 
    </div>
  )
}

export default Pdcard