import React from 'react'
import Link from 'next/link';
import Styles from './Pageheading.module.scss'

function Pageheading(props:any) {
    const {data,pagename,backgroundimg} = props

  return (
    <section className={Styles.container} style={{background:`url(${backgroundimg})`}}>
        <div className={Styles.box}>
            <h3>{pagename}</h3>
            <div className={Styles.HomeLink}>
                <Link href={"/"}>Home</Link>
                {data.map((d: { Linkaddr: string; LinkName: string })=>{
                    return (
                        <div className={Styles.navlink}>
                            <span>/</span>
                            <Link href={d.Linkaddr}>{d.LinkName}</Link>
                        </div>
                    )
                })}
                

            </div>
        </div>
    </section>
  )
}

export default Pageheading