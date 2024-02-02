import React from 'react'
import Styles from './Productnav.module.scss'
function Productnav() {
  return (
    <section className={Styles.container}>
        <div className={Styles.box}>
            <h6 className={Styles.active}>Description</h6>
            <h6>Benefits</h6>
            <h6>Where to use</h6>
        </div>
    </section>
  )
}

export default Productnav