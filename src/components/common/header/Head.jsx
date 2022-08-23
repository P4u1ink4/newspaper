import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
            <div className="icons">
                <img src="../images/menu.png" alt="" class="menu"/>
                <img src="../images/search.png" alt=""/>
                <text><b>U.S.</b>   INTERNATIONAL    CANADA    ESPANOL    ##</text>
                <button className='subscribe'>SUBSCRIBE FOR $0.50/WEEK</button>
                <button className='login'>LOG IN</button>
            </div>
            <div className="down">
                <div className="day"><br /><b>Tuesday,August 23, 2022</b><br />Today's Paper</div>
                <img src='../images/logo.png' alt='' class="logo"/>
                <img src='../images/cloud.webp' alt='' class="pogoda"/>
                <div className="pogodatekst"><b>20°C</b></div>
                <div className="pogodatekst2"><b>23°</b> 17°</div>
            </div>
            <div className="idk">Dow 
                <text>-1.91% ↓</text>
            </div>
         </div>
      </section>
    </>
  )
}

export default Head