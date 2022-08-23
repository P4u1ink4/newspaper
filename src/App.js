import React from "react"
import "./App.css"
import Header from "./components/common/header/Header"
import Foot from './components/common/footer/Foot'
import Home from './components/common/homepage/Home'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Foot />
    </>
  )
}
export default App;
