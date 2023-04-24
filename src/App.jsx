import React from 'react'

import MapSection from './components/map/Map' 


import './App.css'

const location = {
  address: 'Orange Hay Riad',
  lat: 33.95427796123598,
  lng: -6.853011461244328,
} 

const App = () => (
  <div className="App">
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
  </div>
)

export default App
