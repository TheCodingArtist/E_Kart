import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div style={{width:'100%'}} className='container-fluid mt-5 w-100 bg-info'>
      <div className="d-flex justify-content-between p-5">

        <div style={{width:'400px'}} className="intro">
          <h5><i className ="fa-solid fa-music me-2"></i>Media Player</h5>
          <p>Designed and built with all love in the world by the luminar team with the help of our contributors </p>
          <p>Code licensed Luminar, docs cc bu 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>

        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'Black'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'Black'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'Black'}}>Wishlist</Link>
        </div>

        <div className="guides d-flex flex-column">
          <h5>Guide</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'Black'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'Black'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'Black'}} target='_blank'>React Router</a>
        </div>

        <div className="contact">
          <h5>Contact</h5>
          <div className="d-flex">
            <input type="text" className='form-control' placeholder='Enter your email here'/>
            <button className='btn btn-info ms-3'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3 ">
            <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
              <i className='fa-solid fa-phone'></i>
            </a>
          </div>
        </div>

      </div>
      <p className='text-center mt-5'>Copyright © 2024 React Bootstrap. Built with Docusaurus.</p>
    </div>
    </div>
  )
}

export default Footer