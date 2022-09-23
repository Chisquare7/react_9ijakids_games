import React from 'react'

export default function Card({games}) {
  return (
		<div className='search_flex'>
			<div className="search_box">
				<div className="search_img">
					<img
						alt={games.Topic}
						src={process.env.PUBLIC_URL + games.GameImage}
					/>
				</div>
				<div>
					<h3 className="search_topic">{games.Topic}</h3>
					<p className="search_items">{games.Level}</p>
					<p className="search_items">{games.Group}</p>
					<p className="search_items">{games.Subject}</p>
				</div>
			</div>
		</div>
	);
}
