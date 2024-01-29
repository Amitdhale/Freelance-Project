import React from 'react'
import Styles from './Form.module.scss'

function Form() {
  return (
    <section className={Styles.container}>
        <h3>Contact Us</h3>
        <form>
            <div className={Styles.inputcontainer}>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
            </div>
            <div className={Styles.inputcontainer}>
                <input type='text' placeholder='Subject'/>
                <input type='text' placeholder='Phone'/>
            </div>
            <textarea placeholder='How can we help you ?'/>
            <div className={Styles.buttoncontainer}>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default Form