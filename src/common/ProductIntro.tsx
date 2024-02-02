import React from 'react'
import Styles from './ProductIntro.module.scss'
import Image from 'next/image'


function ProductIntro() {
  return (
    <section className={Styles.container}>
        <div className={Styles.box}>
            <div className={Styles.imagebox}>
            <Image
      src={'/productimage.png'}
      width={500}
      height={500}
      alt="Company Logo"
    /></div>
            <div className={Styles.right}>
                <h3>Pharma Granulation</h3>
                <p>Dorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                    amet Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed adiam nonumy eirmod tempor invidunt
                </p>
            </div>
        </div>
    </section>
  )
}

export default ProductIntro