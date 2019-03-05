import React from 'react'

const display = ({player}) => {
  return (
    <section>
      <h3>Status of Player</h3>
      <p className="balls">Balls: <span data-testid="ball-count">{player.balls}</span></p>
      <p className="strikes">Stikes: <span data-testid="strike-count">{player.strikes}</span></p>
    </section>
  )
}

export default display
