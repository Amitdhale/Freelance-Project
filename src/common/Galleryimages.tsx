import React from 'react'
import Image from 'next/image'
import Styles from './Galleryimages.module.scss'


function Galleryimages() {
    const data = ["/galleryimg1.png","/galleryimg2.png","/galleryimg3.png",
    "/galleryimg4.png","/galleryimg5.png","/galleryimg6.png","/galleryimg7.png",
    "/galleryimg8.png","/galleryimg3.png", "/galleryimg4.png","/galleryimg5.png","/galleryimg6.png"]
  return (
    <div className={Styles.container}>
        <div className={Styles.box}>
            {
                data.map((s)=>{
                    return (
                        <Image
                            src={s}
                            width={500}
                            height={500}
                            alt="Company Logo"
                            /> 
                    )
                })
            }
        </div>
        {/* <Image
      src={}
      width={500}
      height={500}
      alt="Company Logo"
    /> */}
    </div>
  )
}

export default Galleryimages