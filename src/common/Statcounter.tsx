import React from 'react'
import Styles from './Statcounter.module.scss'
import Image from 'next/image'

function Statcounter() {
  return (
    <section className={Styles.container}>
        <div className={Styles.box}>
        <div className={Styles.contents}>
            <span>100+</span>
            <p>Tests Conducted</p>
        </div>
        <div className={Styles.contents}>
            <span>1000+</span>
            <p>Happy Clients</p>
        </div>
        <div className={Styles.contents}>
            <span>50+</span>
            <p>Team Members</p>
        </div>
        </div>
    </section>
  )
}

export default Statcounter