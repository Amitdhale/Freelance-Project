import React from 'react'
import Image from 'next/image'
import Styles from './ImageWhoweare.module.scss'


function ImageWhoweare() {
  return (
    <div>
        <div className={Styles.images}>
        <Image
        src={`/image1.png`}
        width={500}
        height={500}
        alt=""
        />
        <Image
        src={`/Dots.png`}
        width={500}
        height={500}
        alt=""
        className={Styles.Dots}
        />
        <Image
        src={`/image1bg.png`}
        width={500}
        height={500}
        alt=""
        className={Styles.bg}
        />
        </div>
    </div>
  )
}

export default ImageWhoweare