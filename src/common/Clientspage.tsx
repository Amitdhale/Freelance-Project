import React from 'react'
import Image from 'next/image'
import Styles from './Clientspage.module.scss'

function Clientspage() {
    const data = ["/companylogo1.png","/companylogo2.png","/companylogo3.png","/companylogo2.png","/companylogo3.png",
    "/companylogo1.png","/companylogo2.png","/companylogo3.png","/companylogo2.png","/companylogo3.png",
    "/companylogo1.png","/companylogo2.png","/companylogo3.png","/companylogo2.png","/companylogo3.png",
    "/companylogo1.png","/companylogo2.png","/companylogo3.png","/companylogo2.png","/companylogo3.png",
    "/companylogo1.png","/companylogo2.png","/companylogo3.png","/companylogo2.png","/companylogo3.png",
]
  return (
    <section className={Styles.container}>
        <div className={Styles.pagenav}>
            <h4>Domestic</h4>
            <h4 className={Styles.active}>International</h4>
        </div>
        <div className={Styles.images}>
            {data.map((d)=>{
                return (
                    <div className={Styles.logo}>
            <Image
                src={d}
                width={200}
                height={200}
                alt="Company Logo"
                />
            </div>
                )
            })}
            
        </div>
    </section>
  )
}

export default Clientspage