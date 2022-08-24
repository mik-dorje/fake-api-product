import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
      <div className='footer-box'>
            
      <div className="footer">
          <div className='footer-title customer'>
              <h3 className="footer-item-title">CUSTOMER CARE</h3>
              <p>Amount</p>
              <p>My Orders</p>
              <p>Wishlist</p>
              <p>FAQs</p>
              <p>Support</p>
          </div>
          <div className='about'>
              <h3 className="footer-item-title">ABOUT</h3>
              <p>Company info</p>
              <p>Interior Works</p>
              
          </div>
          <div className='users'>
              <h3 className="footer-item-title">USERS POLICY</h3>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Data Policy</p>
              <p>Cookies Policy</p>
              <p>Refund Policy</p>
              <p>Return Policy</p>
          </div>
          <div className='connect'>
              <h3 className="footer-item-title">CONNECT WITH US</h3>
              <p>Amount</p>
              <p>My Orders</p>
              <p>Wishlist</p>
              <p>FAQs</p>
              <p>Support</p>
          </div>
          <div className='stay'>
              <h3 className="footer-item-title">STAY CONNECTED</h3>
              <p>Baneshwor, Kathmandu, Nepal</p>
              <p>+977-9100000000</p>
              <p>Wishlist</p>
           
          </div>
            </div>
            <div className='subscription'>
                <p>Subscribe to get amazing offers</p>
                <input placeholder=' Enter your email'></input>
            </div>
      </div>
  )
}

export default Footer