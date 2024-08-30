import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">StoreFuture</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <a className="nav-link" href="#">Juegos</a>
        <a className="nav-link" href="#">Consolas</a>
        <a className="nav-link" href="#">Articulos</a>
        <a className="nav-link" href="#">PassGame</a>
      </div>
    </div>
  </div>

    <CartWidget/>
</nav>

  
    </header>
  
  )
}

export default NavBar