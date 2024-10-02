import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/Card"
import Card from './components/Card'
import Intro from "./components/Intro"
function App() {

  return (
    <>
      <div className='container flex flex-col gap-5'>
        <Intro/>

        <div className='container_columns flex gap-11 
        md:flex-wrap md:w-screen '>
          <div className='flex flex-col gap-16 w-2/5 items-center 
          md:flex-row md:w-full md:justify-center '>
            {crew.map((person) => (
              person.id % 2 !== 0 
                && <Card
                  key={person.id}
                  name={person.nam}
                  pic = {`./Photos/photo${person.id}.png`}
                  pos = {person.position}
                />
            ))}
          </div>
          <div className='flex flex-col gap-16 w-2/5 mt-20 
          md:flex-row md:w-full md:justify-center md:mt-0'>
          {crew.map((person) => (
              person.id % 2 == 0 
                && <Card
                  key={person.id}
                  name={person.nam}
                  pic = {`./Photos/photo${person.id}.png`}
                  pos = {person.position}
                />
            ))}
          </div>
          
        </div>



      </div>

    </>
  )
}
const crew = [
  {
    "id": 1,
    "nam": "Bill Mahoney",
    "position": "PRODUCT OWNER",
  },
  {
    "id": 2,
    "nam": "Saba Cabrera",
    "position": "ART DIRECTOR"
  },
  {
    "id": 3,
    "nam": "Shae Le",
    "position": "TECH LEAD"
  },
  {
    "id": 4,
    "nam": "Skylah Lu",
    "position": "UX DESIGNER"
  },
  {
    "id": 5,
    "nam": "Griff Richards",
    "position": "DEVELOPER"
  },
  {
    "id": 6,
    "nam": "Stan John",
    "position": "DEVELOPER"
  }

]

export default App
