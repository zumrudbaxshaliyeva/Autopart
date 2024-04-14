import React from 'react'
import '../../assets/css/footer.css'
import { FaHome } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import Image from '../../Image';
const Footer = () => {
  return (
    <div className='footer '>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <h3 className='footer-title'>About our store</h3>
            <ul>
              <li><FaHome className='footer-icon' />
                <a className='footer-link'>907, Avenue Anatole France, Paris</a>
              </li>
              <li>
                <BsEnvelopeFill className='footer-icon' />
                <a className='footer-link'>Magentech@domain.com</a>
              </li>
              <li>
                <FaPhone className='footer-icon' />
                <a className='footer-link-number'>1-888-345-6789</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-4'>
                <h3 className='footer-title'>Information</h3>
                <ul>
                  <li><a className='footer-link footer-link-hover'>Shipping Policy</a></li>
                  <li><a className='footer-link footer-link-hover'>Compensation First</a></li>
                  <li><a className='footer-link footer-link-hover'>My account</a></li>
                  <li><a className='footer-link footer-link-hover'>Return Policy</a></li>
                  <li><a className='footer-link footer-link-hover'>Checkouts</a></li>
                  <li><a className='footer-link footer-link-hover'>Customer Feedback</a></li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h3 className='footer-title'>custom service</h3>
                <ul>
                  <li><a className='footer-link footer-link-hover'>Terms & Conditions</a></li>
                  <li><a className='footer-link footer-link-hover'>Payment Methods</a></li>
                  <li><a className='footer-link footer-link-hover'>Shipping and Returns</a></li>
                  <li><a className='footer-link footer-link-hover'>Locations We Ship to</a></li>
                  <li><a className='footer-link footer-link-hover'>Estimated Delivery Time</a></li>
                  <li><a className='footer-link footer-link-hover'>Help Center</a></li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h3 className='footer-title'>contact us</h3>
                <ul>
                  <li><a className='footer-link footer-link-hover'>About Us</a></li>
                  <li><a className='footer-link footer-link-hover'>Contact Us</a></li>
                  <li><a className='footer-link footer-link-hover'>Privacy Policy</a></li>
                  <li><a className='footer-link footer-link-hover'>Site Map</a></li>
                  <li><a className='footer-link footer-link-hover'>Terms & conditions</a></li>
                  <li><a className='footer-link footer-link-hover'>Faqs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <h3 className='footer-title'>custom assistance</h3>
            <div className='footer-img'>

              <div> <a><img className='footer-image' src={Image.footer_img_1} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_2} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_3} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_4} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_5} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_6} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_7} /></a></div>
              <div> <a><img className='footer-image' src={Image.footer_img_8} /></a></div>
              <div className='footer-img-hover'>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
            <div> <a><img className='footer-image-hover' src={Image.instagram_icon} /></a></div>
          </div>
            </div>
            
          </div>
         
        </div>
      </div>
      <div className='sign d-flex align-items-center mt-5'>
        <div className='container d-flex flex-row align-items-center'>
          <div className='news-letter col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <div className='footer-newsletter'>
              <h3>Sign up for our exclusive Newsletter</h3>
              <div className='footer-block-content'>
                <div className='newsletter'>
                  <form>
                    <div className='mail-section'>
                      <input placeholder='Email address'></input>
                      <button className='email-btn'><FaPaperPlane className='paper-plane' />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='socials-wraps col-lg-4 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-end'>
            <ul className='social-list'>
              <li><a className='social-link'><FaPinterest className='social-icon' />
              </a></li>
              <li><a className='social-link'><FaInstagram className='social-icon' />
              </a></li>
              <li><a className='social-link'><FaTwitter className='social-icon' />
              </a></li>
              <li><a className='social-link'><FaFacebookF className='social-icon' />
              </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-7'>
                <span className='footer-bottom-link'> ©2018 Ss AutoParts. All Rights Reserved. Designed by
                  <a className='footer-bottom-link-diff'>SmartAddons.Com</a>
                </span>
              </div>
              <div className='col-sm-5 d-flex paypal'>
                <a><img src={Image.paypal} /></a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer