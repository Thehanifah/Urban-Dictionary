import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
   
  return (
    <>
     <section className='footer'>
       <div className='social-media-container'>
        <a href="/https://web.facebook.com/-url" target="_blank" rel="noopener noreferrer">
        <FaFacebook  className='Social-media-icons' /> 
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='Social-media-icons' /> 
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutubeSquare className='Social-media-icons'  />   
        </a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className='Social-media-icons'  /> 
        </a>
       </div>
       <article className='social-media-container'>
           <a href="/" className='footerlinks'>Home</a>
           <a href="" className='footerlinks'>News</a>
           <a href="" className='footerlinks'>About</a>
           <a href="" className='footerlinks'>Contact us</a>
           <a href="" className='footerlinks'>Our Team </a>
       </article>
     </section>
    </>
  )
}

export default Footer
