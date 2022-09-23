import React from 'react'
import Card from './Card'

export default function SearchList({ filteredGames }) {
    const filtered = filteredGames.map((games) => (
			<Card key={games.id} games={games} />
		));
  return (
    <div>
      {filtered}
    </div>
  )
}

