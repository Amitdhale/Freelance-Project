import React from 'react'
import Styles from './Extraproduct.module.scss'
import Pdcard from './Pdcard'


function Extraproduct() {
    const data = [
        {
        name:"Pharma Granulation",
        img:"/productimage.png",
        hide:false
        },
        {
            name:"Pharma Granulation",
            img:"/productimage1.png",
            hide:false
        },
        {
            name:"Pharma Granulation",
            img:"/productimage2.png",
            hide:false
        },
        {
            name:"Pharma Granulation",
            img:"/productimage.png",
            hide:true
            },
    ]
  return (
    <section className={Styles.container}>
        <h3>Our Products</h3>
        <div className={Styles.cards}>
        {data.map((d)=>{
                return <Pdcard heading={d.name} image={d.img} hide={d.hide}/>
            })}
        </div>
    </section>
  )
}

export default Extraproduct