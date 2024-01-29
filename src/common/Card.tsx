import React from 'react'
import Styles from "./Card.module.scss";

function Card() {
  return (
    <section className={Styles.container}>
        <div>
        <div className={Styles.contains}>
            <h2>Welcome to</h2>
            <h1>Nisha Engineering</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam.
            </p>
        </div>
        <div className={Styles.buttons}>
            <button className={Styles.btn1}>Explore More</button>
            <button className={Styles.btn2}>Get In Touch</button>
        </div>
        </div>
    </section>
  )
}

export default Card