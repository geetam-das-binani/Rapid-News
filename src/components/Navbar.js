import {Link} from 'react-router-dom'
import React from 'react'


  function Navbar(props){
        return (
        <div>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode==='black'?'light':'dark'} bg-${props.mode==='black'?'light':'dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand my-1" href="#" style={{color:props.mode==='black'?'black':'white'}}>{props.title}</Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
             <Link style={{color:props.mode==='black'?'black':'white'}} className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link style={{color:props.mode==='black'?'black':'white'}}  className="nav-link" to="business">Business</Link>
            </li>
            <li className="nav-item">
            <Link style={{color:props.mode==='black'?'black':'white'}} className="nav-link" to="entertainment">Entertainment</Link>
            </li> 
            <li className="nav-item">
            <Link style={{color:props.mode==='black'?'black':'white'}} className="nav-link" to="health">Health</Link>
            </li> 
            <li className="nav-item">
            <Link style={{color:props.mode==='black'?'black':'white'}} className="nav-link" to="science">Science</Link>
            </li>
            <li className="nav-item">
            <Link style={{color:props.mode==='black'?'black':'white'}} className="nav-link" to="sports">Sports</Link>
            </li>
            <li className="nav-item">
            <Link style={{color:props.mode==='black'?'black':'white'}} className="nav-link" to="technology">Technology</Link>
            </li>
    
       
      </ul>
     
    </div>
  </div>
</nav>
        <div className="form-check fixed-top  form-switch">
      <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label style={{color:props.mode==='black'?'black':'White'}}  className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn}</label>
    </div>
      
  </div>
  )
   }
      
  export default Navbar