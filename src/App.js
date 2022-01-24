import './App.css'
{/* import the zodiac array */}
import { zodiac } from './data'
import HeaderTag from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

// console.log(zodiac)
function App() {
  return (
    <div className="App">
      <HeaderTag name='Cadillac Jack'/>
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main zodiacList={zodiac} />
      <Footer year='2021-2022' />
    </div>
  )
}

export default App
