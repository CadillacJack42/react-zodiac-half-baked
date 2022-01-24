import './App.css'
import { zodiac } from './data'
import HeaderTag from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


function App() {
  return (
    <div className="App">
      <HeaderTag name='Cadillac Jack'/>
      <Main zodiacList={zodiac} />
      <Footer year='2021-2022' />
    </div>
  )
}

export default App
