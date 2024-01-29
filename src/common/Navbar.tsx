"use client"; 

import React, { useState } from 'react'
import Styles from "./Navbar.module.scss";
import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className={Styles.container}>
        <div className={Styles.Logo}>
            <span>
            <Image
      src={`/Logo.png`}
      width={200}
      height={200}
      alt="Company Logo"
    />
            </span>
        </div>
        <div className={Styles.NavigationLinks}>
            <div className={Styles.Links}>
                <Link href='/'>Home</Link>
                <Link href='/'>About Us</Link>
                <Link href='/'>Our Products</Link>
                <Link href='/'>Our Client</Link>
                <Link href='/'>Gallery</Link>
                <Link href='/'>Contact Us</Link>
            </div>
            <Link href='/' className={Styles.DownloadButton}>Download Brochure</Link>
            <div className={Styles.Hamburger} onClick={()=>{
              setshowmenu(!showmenu)
            }} >
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 14.1667H18V17H0V14.1667ZM0 7.08333H18V9.91667H0V7.08333ZM0 0H18V2.83333H0V0Z" fill="black"/>
</svg>
            </div>
        </div>
        <div className={`${Styles.slideMenu} ${showmenu? Styles.open : Styles.closed}`}>
            <div className={Styles.Crossbox} onClick={()=>{
              setshowmenu(false)
            }}>
                <span className={Styles.Cross} >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#212121"/>
</svg>

                </span>
            </div>
            <div  className={Styles.Sociallink}>
                <Link href='/'>Home</Link>
                <Link href='/'>About Us</Link>
                <Link href='/'>Our Products</Link>
                <Link href='/'>Our Client</Link>
                <Link href='/'>Gallery</Link>
                <Link href='/'>Contact Us</Link>
                <hr/>
                <div className={Styles.contactdetail}>
          <span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z" fill="#021D3E"/>
</svg>

</span>
          <span>+91 94268 58389</span>
        </div>
        <div className={Styles.contactdetail}  >
          <span>
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25611 10.8889C0.898333 10.8889 0.599667 10.7691 0.360111 10.5296C0.120037 10.2895 0 9.99056 0 9.63278V1.25611C0 0.898333 0.120037 0.599667 0.360111 0.360111C0.599667 0.120037 0.898333 0 1.25611 0H12.7439C13.1017 0 13.4003 0.120037 13.6399 0.360111C13.88 0.599667 14 0.898333 14 1.25611V9.63278C14 9.99056 13.8802 10.2892 13.6407 10.5288C13.4006 10.7689 13.1017 10.8889 12.7439 10.8889H1.25611ZM7 5.53389L13.2222 1.46611L12.9827 0.777778L7 4.66667L1.01733 0.777778L0.777778 1.46611L7 5.53389Z" fill="#021D3E"/>
</svg>


</span>
          <span>sales@nishaengg.com</span>
        </div>

            </div>
          </div> 
    </nav>
  )
}

export default Navbar