import React from 'react'
import "./Home.css"

const Main = () => {
  return (
    <div className="main">
        <div className="firstacapit">
            <hr className="black"/>
            <hr class="blacknext"/>
            <div className="title">
                A Nuclear Plant Is Held Hostage in Ukraine Amid Warnings of Disaster
            </div>
            <div className="paragraph">
                • With Russia controlling the Zaporizhzhia plant, Ukrainian operators working at gunpoint are all that stand between the world and a catastrophe.<br/>
                • The U.S. and its allies have called for the creation of a demilitarized zone, as Ukraine and Russia accuse each other of planning attacks on the facility.
            </div>
            <hr />
            <div className="live">
                <text className="live1">LIVE </text>
                <text className="break">....</text>
                <text className="live3"> 16m ago </text>
            </div>
            <div className="title">
                The U.N. Security council is holding an emergency meeting at Russia's request to discuss the nuclear plant.
            </div>
            <div className="paragraph2">
                See more updates <text class="plus">6+</text>
            </div>
            <img src="../images/1.webp" alt="" class="photo1"/>
            <div className="autor">
                David Guttenfelder for The New York Times
            </div>
            <br/>
            <hr class="black"/>
            <hr class="vertical"/>
            <img src="../images/2.webp" alt="" class="photo2"/>
            <div className="autor2">
                Katherine Marks for The New York Times
            </div>
            <div className="side">
                <div className="title2">
                    Serenity in Midtown, Starting at $3,200 a Night
                </div>
                <div className="paragraph3">
                    The chieg executive of Aman Resorts aims to bring the brand's understated exclusivity - originally forged in remote locations in Asia - to Manhattan.
                </div>
            </div>
            <hr class="whitenext"/>
        </div>
    </div>
  )
}

export default Main