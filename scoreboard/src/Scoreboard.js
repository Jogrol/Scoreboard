import React, { Component } from 'react'
import Player from './Player'

const players = [
  {
    id: 1,
    name: 'Wouter',
    score: 2
  },
  {
    id: 2,
    name: 'Mimi',
    score: 5
  },
  {
    id: 3,
    name: 'Milan',
    score: 4
  }
]

export default class Scoreboard extends Component {
  renderPlayer(player) {
    return <Player
        key={player.id}
        name={player.name}
        score={player.score}
      
    />
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
      </div>
    )
  }
}