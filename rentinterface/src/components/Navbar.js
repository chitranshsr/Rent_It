import React from 'react'
import '../components/Style.css';



function Navbar() {
  return (
    <div>
      <div className="overlay"></div>

<div className="utility-nav d-none d-md-block">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <p className="small"><i className="bx bx-envelope"></i> support@rentit.com | +91-8081009062 <i className="bx bx-phone"></i>
        </p>
      </div>

      <div className="col-12 col-md-6 text-right">
        <p className="small">Free shipping on total of $99 of all products</p>
      </div>
    </div>
  </div>
</div>

<nav className="navbar navbar-expand-md navbar-light bg-light main-menu" style={{boxShadow:'none'}}>
  <div className="container">

    <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
      <i className="bx bx-menu icon-single"></i>
    </button>

    <a className="navbar-brand" href="#">
      <h4 className="font-weight-bold"><strong>RENT-IT!</strong></h4>
    </a>

    <ul className="navbar-nav ml-auto d-block d-md-none">
      <li className="nav-item">
        <a className="btn btn-link" href="#"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
      </li>
    </ul>

    <div className="collapse navbar-collapse">
      <form className="form-inline my-2 my-lg-0 mx-auto">
        {/* <input className="form-control" type="search" placeholder="Search for products..." aria-label="Search"/> */}
        {/* <button className="btn btn-success my-2 my-sm-0" type="submit"><i className="bx bx-search"></i></button> */}
      </form>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="btn btn-link" href="#"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
        </li>
        <li className="nav-item ml-md-3">
          <a className="btn btn-primary" href="signin"><i className="bx bxs-user-circle mr-1"></i> Sign In</a>
          &nbsp;
          <a className="btn btn-primary" href="signup"><i className="bx bxs-user-circle mr-1"></i> Sign Up</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

<nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reviews</a>
        </li>
       
       
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



{/* <!-- Sidebar --> */}
<nav id="sidebar">
  <div className="sidebar-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10 pl-0">
          <a className="btn btn-primary" href="#"><i className="bx bxs-user-circle mr-1"></i> Log In</a>
        </div>

        <div className="col-2 text-left">
          <button type="button" id="sidebarCollapseX" className="btn btn-link">
            <i className="bx bx-x icon-single"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <ul className="list-unstyled components links">
    <li className="active">
      <a href="#"><i className="bx bx-home mr-3"></i> Home</a>
    </li>
    <li>
      <a href="#"><i className="bx bx-carousel mr-3"></i> Products</a>
    </li>
    <li>
      <a href="#"><i className="bx bx-book-open mr-3"></i> Schools</a>
    </li>
    <li>
      <a href="#"><i className="bx bx-crown mr-3"></i> Publishers</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bx bx-help-circle mr-3"></i>
        Support</a>
      <ul className="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a href="#">Delivery Information</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#"><i className="bx bx-phone mr-3"></i> Contact</a>
    </li>
  </ul>

  <h6 className="text-uppercase mb-1">Categories</h6>
  <ul className="list-unstyled components mb-3">
    <li>
      <a href="#">Category 1</a>
    </li>
    <li>
      <a href="#">Category 1</a>
    </li>
    <li>
      <a href="#">Category 1</a>
    </li>
    <li>
      <a href="#">Category 1</a>
    </li>
    <li>
      <a href="#">Category 1</a>
    </li>
    <li>
      <a href="#">Category 1</a>
    </li>
  </ul>

  <ul className="social-icons">
    <li><a href="#" target="_blank" title=""><i className="bx bxl-facebook-square"></i></a></li>
    <li><a href="#" target="_blank" title=""><i className="bx bxl-twitter"></i></a></li>
    <li><a href="#" target="_blank" title=""><i className="bx bxl-linkedin"></i></a></li>
    <li><a href="#" target="_blank" title=""><i className="bx bxl-instagram"></i></a></li>
  </ul>

</nav>

    </div>
  )
}

export default Navbar