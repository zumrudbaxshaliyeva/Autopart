import React from 'react'
import '../../assets/css/menu.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from '../../Image';
const Menu = () => {
  return (
    <>
      <div className='submenu'>
        <div className='container-xl'>
          <div className='header-main d-flex flex-row justify-content-between align-content-center' >
            <div className='`header-top-left`'>
              <span className='phone-section'>
              <FaPhoneAlt />
              Free phone :
              </span>
           
              <a className='phone-num'>1-888-345-6789</a>
            </div>
            <div className='header-top-right'>
              <ul className='sub-list'>
                <li>
                  <Dropdown className='dropdown-item'>
                  
                    <Dropdown.Toggle className='dropdown-toggle' variant="transparent" id="dropdown-basic">
                    <IoSearch>
                  ::before
                  </IoSearch>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-menu'>
                      <Dropdown.Item className='dropdown-menu-item' href="#/action-1">Login</Dropdown.Item>
                      <Dropdown.Item className='dropdown-menu-item '  href="#/action-2">My Wishlist</Dropdown.Item>
                      <Dropdown.Item className='dropdown-menu-item '  href="#/action-3">Order History</Dropdown.Item>
                      <Dropdown.Item className='dropdown-menu-item'  href="#/action-4">Checkout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
               
                </li>
                
                 <li> <Dropdown className='dropdown-item'>
                  
                    <Dropdown.Toggle className='dropdown-toggle' variant="transparent" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-menu'>
                      <Dropdown.Item className='dropdown-menu-item' href="#/action-1">Login</Dropdown.Item>
                      <Dropdown.Item className='dropdown-menu-item'  href="#/action-2">My Wishlist</Dropdown.Item>
                      <Dropdown.Item className='dropdown-menu-item'  href="#/action-3">Order History</Dropdown.Item>
                      <Dropdown.Item className='dropdown-menu-item'  href="#/action-4">Checkout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></li>
              
                <li><Dropdown className='dropdown-item'>
                  
                  <Dropdown.Toggle className='dropdown-toggle' variant="transparent" id="dropdown-basic">
                    USD
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='dropdown-menu'>
                    <Dropdown.Item className='dropdown-menu-item item-diff'  href="#/action-1">USD</Dropdown.Item>
                    <Dropdown.Item className='dropdown-menu-item item-diff'  href="#/action-2">EUR</Dropdown.Item>
                    <Dropdown.Item className='dropdown-menu-item item-diff'  href="#/action-3">GPB</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
                <li>
                <Dropdown className='dropdown-item'>
                  
                  <Dropdown.Toggle className='dropdown-toggle' variant="transparent" id="dropdown-basic">
                   <img src={Image.en}/>
                   ENGLISH
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='dropdown-menu'>
                    <Dropdown.Item className='dropdown-menu-item item-diff'  href="#/action-1"> English</Dropdown.Item>
                    <Dropdown.Item className='dropdown-menu-item item-diff'  href="#/action-2">Arabic</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Menu