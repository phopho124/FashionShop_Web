import React, { useContext } from 'react'
import './ProducDislay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProducDislay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='producttdislay'>
        <div className='productdislay-left'>
            <div className='productdislay-img-list'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className='productdislay-img'>
                <img src={product.image} alt="" className='productdislay-main-img'/>

            </div>
        </div>
        <div className='producdislay-right'>
            <h1>{product.name}</h1>
            <div className='producdislay-right-star'>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
            </div>
            <div className='producdislay-right-prices'>
                <div className='producdislay-right-price-old'>
                        ${product.old_price}
                </div>
                <div className='producdislay-right-price-new'>
                        ${product.new_price}
                </div>
            </div>
            <div className='producdislay-right-description'>
                A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, warn as an undershirt or outer garment.

            </div>
            <div className='producdislay-right-size'>
                <h1>Select Size</h1>
                <div className='producdislay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='producdislay-right-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='producdislay-right-category'><span>Tags: </span>Moders, Latest</p>

        </div>

    </div>
  )
}

export default ProducDislay