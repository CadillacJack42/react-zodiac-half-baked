import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <div className='zodiac-card'>
      <img src={`images/${props.name}.png`}>
      </img>
      <p className='name'>
        {props.name}
      </p>
      <p>
        {props.dates}
      </p>
    </div>
  ) 
}
