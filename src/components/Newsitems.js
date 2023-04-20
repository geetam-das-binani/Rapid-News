import React from 'react'

function Newsitems(props) {
    return (
         <div className="card my-1" style={{backgroundColor:props.mode==='black'?'white':'black',border:props.mode==='black'?'1px solid black':'1px solid white'}}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>{props.newssource}</span>
          <img src={props.imageurl===null?'https://images.indianexpress.com/2023/04/jack-intel.jpg':props.imageurl} className="card-img-top" alt="..."/>
      <div style={{color:props.mode==='black'?'black':'white'}} className="card-body">
        <h5 className="card-title">{props.title}...</h5>
        <p className="card-text">{props.description}</p>
        <p style={{color:props.mode==='black'?'black':'white'}} className="card-text">By{props.newsauthor} on {new Date(props.newsdate).toGMTString().slice(0,-3)}</p>
    <a href={props.newsurl} target={'_blank'}  rel="noreferrer" className="btn btn-primary" style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} >Read More</a>
      </div>
    </div>
   
    )
     
    }
    export default Newsitems

