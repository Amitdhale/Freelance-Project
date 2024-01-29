import React from 'react'
import Image from 'next/image'
import Styles from './Client.module.scss'
function Client() {
  return (
    <section className={Styles.container}>
        <div className={Styles.left}>
            <div className={Styles.contents}>
            <h3>Our Clients</h3>
            <p>Forming two comfort invited. Yet she income 
effect edward. Entire desire way design few. Mrs sentiments led 
solicitude estimating friendship fat. Meant those event
</p>
</div>
        </div>
        <div className={Styles.right}>
            <div className={Styles.image}>
            <Image
                src={`/companylogo1.png`}
                width={500}
                height={500}
                alt="Company Logo"
                />
            </div>
            <div className={Styles.image}>
            <Image
                src={`/companylogo1.png`}
                width={500}
                height={500}
                alt="Company Logo"
                />
            </div>
            <div className={Styles.image}>
            <Image
                src={`/companylogo1.png`}
                width={500}
                height={500}
                alt="Company Logo"
                />
            </div>
       </div>  
    </section>
  )
}

export default Client