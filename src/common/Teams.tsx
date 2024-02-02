import React from 'react'
import Styles from './Teams.module.scss'
import Teamcard from './Teamcard'

function Teams() {
    const data = [
        {
            name:"MR. MAHENDRA YADAV",
            dp:"/emp1.png",
            department:"Sales Support",
            number:"9426858389",
            email:"sales@nishaengg.com"
        },
        {
            name:"MR. MAHENDRA YADAV",
            dp:"/emp2.png",
            department:"Sales Support",
            number:"9426858389",
            email:"sales@nishaengg.com"
        },
        {
            name:"MR. AVISEK CHAKRAVERTY",
            dp:"/emp2.png",
            department:"MARKETING REPRESENTATIVE",
            number:"9426858389",
            email:"sales@nishaengg.com"
        },

    ]
  return (
    <div className={Styles.container}>
        <h3>Our Team</h3>
        <div className={Styles.box}>
        {
            data.map((d)=>{
                return (
                    <Teamcard name={d.name} image={d.dp} dep={d.department} number={d.number} email={d.email}/>
                )
            })
        }
        </div>

    </div>
  )
}

export default Teams