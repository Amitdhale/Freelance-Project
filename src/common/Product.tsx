import React from 'react'
import Styles from "./Product.module.scss";
import ProductCard from './ProductCard';

function Product() {
  return (
    <section className={Styles.container}>
        <h3>Our Products</h3>
        <div className={Styles.cardcontainer}>
            <ProductCard heading={"Pharma Granulation"} image={`/Porductimage.png`}/>
            <ProductCard heading={"Pharma Granulation"} image={`/Porductimage.png`}/>
            <ProductCard className={Styles.hideCard} heading={"Pharma Granulation"} image={`/Porductimage.png`}/>
            <ProductCard className={Styles.hideCard}  heading={"Pharma Granulation"} image={`/Porductimage.png`}/>
            
        </div>
        <div className={Styles.btncontainer}>
        <button>View More</button> 
        </div>
    </section>
  )
}

export default Product