
import React from 'react'
import Styles from './ChooseUs.module.scss'
import Image from 'next/image'
 
function ChooseUs(props:any) {
  return (
    <section className={Styles.container}>
        <div className={Styles.contents}>
            <h3>Why You Choose Us</h3>
            <p>Nisha Engineering stand among the leading organizations of this 
                domain due to our streamlined business operations and ability to 
                fulfill varied needs of the clients.</p>
            {props.button &&<button>View More</button>}
        </div>
        <div>
          <div className={Styles.rightside}>
          <Image
      src={`/Chooseus.png`}
      width={500}
      height={500}
      alt="Company Logo"
    />
            <div className={Styles.OrangesquareB}></div>
            <div className={Styles.bluesquareB}></div>
            <div className={Styles.whitesquareB}></div>

            <div className={Styles.OrangesquareT}></div>
            <div className={Styles.bluesquareT}></div>
            <div className={Styles.whitesquareT}></div>
          </div>
        </div>
    </section>
  )
}

export default ChooseUs