import React from 'react'
import Styles from './ProductCard.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router';

function ProductCard(props:any) {
  const {className} = props;
  const router = useRouter();
  return (
    <div className={`${Styles.container} ${className}`}>
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

export default ProductCard