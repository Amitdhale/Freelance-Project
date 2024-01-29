import React from 'react'
import Styles from './WhoAreWe.module.scss'
import Image from 'next/image'

function WhoAreWe() {
  return (
    <section className={Styles.container}>
            <div className={Styles.image}>
            <Image
        src={`/WhoAreWe.png`}
        width={400}
        height={300}
        alt=""
        />
            </div>
            <div className={Styles.content}>
                <h3>Who Are We</h3>
                <p>We, “ Nisha Engineering ” Is An ISO 9001:2008 based Certified Company.Is Established in the year 
                    of 2007 With 19+ years Experaiance.We are among the leading organizations involved in manufacturing 
                    and supplying Pharmaceutical and Chemical Machinery.Our product range include Double Cone Blender, 
                    Fluid Bed Dryer (F.B.D), Rapid Mixer Granulator, Storage Tank, Rotocone Vacuum Dryer, Lifting & Tilting Device, 
                    Bucket Filter, Distillation Column. Our machinery is rugged and has gained appreciation for easy to use controls, 
                    low maintenance requirements and durability.
                </p>
                <button className={Styles.btn}>Learn more</button>
                
            </div>
        <div className={Styles.background}>
           <Image
        src={`/croppedbg.png`}
        width={500}
        height={500}
        alt=""
        />
        </div>
    </section>
  )
}

export default WhoAreWe