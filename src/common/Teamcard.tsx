import React from 'react'
import Styles from './Teamcard.module.scss'
import Image from 'next/image'


function Teamcard(props:any) {
  const {name,image,dep,number,email} = props;
  return (
    <div className={Styles.container}>
        <Image
      src={image}
      width={500}
      height={500}
      alt="Company Logo"
    />
        <div className={Styles.details}>
            <h4>{name}</h4>
            <p>{dep}</p>
            <div className={Styles.contactdetails}>
                <div className={Styles.contact}>
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="white"/>
</svg>
</span>
                    <div>{number}</div>
                </div>
                <div className={Styles.contact}>
                    <span><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.615 14C1.155 14 0.771 13.846 0.463 13.538C0.154333 13.2293 0 12.845 0 12.385V1.615C0 1.155 0.154333 0.771 0.463 0.463C0.771 0.154333 1.155 0 1.615 0H16.385C16.845 0 17.229 0.154333 17.537 0.463C17.8457 0.771 18 1.155 18 1.615V12.385C18 12.845 17.846 13.229 17.538 13.537C17.2293 13.8457 16.845 14 16.385 14H1.615ZM9 7.115L17 1.885L16.692 1L9 6L1.308 1L1 1.885L9 7.115Z" fill="white"/>
</svg>

</span>
                    <div>{email}</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Teamcard