import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import './navigation.component.scss'

const Navigation = ()=>{
    return (
      <Fragment>
   <div className="navigation">
       <div>
       <Link  className="logo-container" to ='/'>
       <i className="fa-brands fa-cc-apple-pay" style={{color: "#333333", fontSize:'80px'}}></i>
       </Link>
       </div>
         <div className='nav-links-container'>
            <Link className="nav-link" to='/shop'>
              Shop
            </Link>
            <Link className="nav-link" to='/signin'>
              Signin
            </Link>
         </div>
      </div>
    <Outlet/>
      </Fragment>
     
    )
  }

  export default Navigation