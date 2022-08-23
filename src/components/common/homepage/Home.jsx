import React from 'react'
import "./Home.css"
import Main from './Main'

const Home = () => {
  return (
    <main>
        <div className='home'>
          <div className="live">
            <text className="live1">LIVE </text>
            <text className="break">.........</text>
            <text className="live2"> Russia-Ukraine War </text>
            <text className="live3"> 16m ago </text>
            <text className="break">....</text>
            <text className="live2"> Midterm Elections </text>
            <text className="live4"> 33m ago</text>
          </div>
          <section className='mainContent'>
            <Main />
          </section>
        </div>
    </main>
  )
}

export default Home