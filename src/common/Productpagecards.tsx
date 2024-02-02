import React from 'react'
import Pdcard from './Pdcard'
import Styles from './Productpagecards.module.scss'

function Productpagecards() {
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
            hide:false
                },
                {
                    name:"Pharma Granulation",
                    img:"/productimage1.png",
            hide:false
                },
                
    ]
  return (
    <div className={Styles.container}>
        <div className={Styles.box}>
            {data.map((d)=>{
                return <Pdcard heading={d.name} image={d.img} hide={d.hide}/>
            })}
        </div>
    </div>
  )
}

export default Productpagecards