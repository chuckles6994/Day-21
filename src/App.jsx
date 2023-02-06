import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MyHeading } from './components/MyHeading'
import { EventsDemo } from './components/EventsDemo/EventsDemo'
import { StateDemo } from './components/StateDemo/StateDemo'


// console.log('somethin 1')
// const clickFunction = () => {
//   console.log(a);
//   console.log(b);
// }

// legit react component right hur:

const App = () => {

  return (
    <div className="App">
      <h1>sup all</h1>
      {MyHeading({name: "chuck"})}
      <EventsDemo />
      <StateDemo />
      {/* <MyHeading name = "Maan" info = { {age: 30, hairColor: 'blonde'} }/> */}
      {/* interpreted as text in HTML:
      {/* console.log('somethin 2') */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clickFunction}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App

