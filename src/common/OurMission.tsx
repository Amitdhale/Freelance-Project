import React from 'react'
import Image from 'next/image'
import Styles from './Mission.module.scss'

function OurMission(props:any) {
  return (
    <section className={Styles.container}>
      <div className={Styles.box}>
        <div className={Styles.left}>
          <div className={Styles.imagecontainer}>
            <div className={Styles.imageBoth}>
                  <Image
                src={`/Mission.png`}
                width={400}
                height={400}
                className={Styles.image}
                alt=""
              />  

               <Image
          src={`/mission1.png`}
          width={300}
          height={300}
          className={Styles.overlap}
          alt=""
        />      
           </div>
           
    </div>
        </div> 
        <div className={Styles.right}>
            <h3>Our Mission</h3>
            <p>We’re passionate about serving our clients to  the fullest, while continuously growing, 
                learning, and innovating. With competencies across multiple industries, we offer our customers
                 a more reliable supply chain and confidence in the long life of their program.
Bring to the table win-win survival strategies to ensure proactive 
domination. At the end of the day, going forward, a new normal that has evolved from generation 
X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will 
have multiple touchpoints for offshoring.</p>
        {props.button && <button>View More</button>}
        </div>
      </div>
    </section> 
  )
}

export default OurMission