import { React, useState } from 'react'
import data from "./games.json"

const List = (props) => {
  {
		data.map((item) => {
			return (
				<div key={item.id}>
					<p>{item.Topic}</p>
					{/* <p>{item.Level}</p>
					<p>{item.Subject}</p> */}
				</div>
			);
		});
	}
}

export default List






            // {Games &&
						// 	Games.map((game) => {
						// 		return (
						// 			<div className="game_box" key={game.id}>
						// 				<div className="game_img">
						// 					<img
						// 						src={game.GameImage}
						// 						alt="A type of kid's game"
						// 						className="img_games"
						// 					/>
						// 				</div>
						// 				<div className="game_content">
						// 					<p className="game_head">{game.GameTitle}</p>
						// 					<p className="game_text">{game.GameDescription}</p>
						// 				</div>
						// 			</div>
						// 		);
						// 	})}