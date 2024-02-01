import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Review (122)</div>

            </div>
            <div className='descriptionbox-description'>
                <p>
                    An e-commerce website is an online plaform that facilitates the buying and selling of products or services over the internet
                </p>
                <p>
                    E-commenrce websites typically display products or services along with detaied descriptions, images, prices, and any available variations (e.g., size, color).
                </p>

            </div>
    </div>
  )
}

export default DescriptionBox