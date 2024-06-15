import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './sheets/Nav.jsx'
import Section from './sheets/Section.jsx'
import SectionA from './sheets/SectionA.jsx'
import SectionB from './sheets/SectionB.jsx'
import SectionC from './sheets/SectionC.jsx'
import SectionD from './sheets/SectionD.jsx'
import Sticker from './shared/Sticker.jsx'
import SectionE from './sheets/SectionE.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sticker/> */}
    <Nav/>
    <Section/>
    <SectionA/>
    <SectionB/>
    <SectionC/>
    <SectionD/>
    <SectionE/>
  </React.StrictMode>,
)
