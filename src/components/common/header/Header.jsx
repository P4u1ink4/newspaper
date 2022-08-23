import React, { useState } from "react"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <hr />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>World</li>
              <li>U.S.</li>
              <li>Politics</li>
              <li>N.Y.</li>
              <li>Business</li>
              <li>Opinion</li>
              <li>Tech</li>
              <li>Science</li>
              <li>Health</li>
              <li>Sports</li>
              <li>Arts</li>
              <li>Books</li>
              <li>Style</li>
              <li>Food</li>
              <li>Travel</li>
              <li>Magazine</li>
              <li>T Magazine</li>
              <li>Real Estate</li>
              <li>Video</li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
      <hr class="s1"/>
    </>
  )
}

export default Header