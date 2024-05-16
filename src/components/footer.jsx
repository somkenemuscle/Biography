import React from 'react'
import '../styles/footer.css'
import logo from '../image/physics (3).png'

function footer() {
  return (
    <div className="footer-container">
        <footer className="footer-content">
        <img src={logo} width="30" height="23" alt=""/>
        <span className="footer-text1">EINSTEIN'S</span> <span className="footer-text2">LEGACY</span>
        <p className="footer-text3">@ copyright 2024.</p>
        </footer>
    

    </div>
  )
}

export default footer