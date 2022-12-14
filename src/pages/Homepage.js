import {React, useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Close, MenuOutlined } from "@mui/icons-material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";
import book_logo from "../assets/book_logo.svg";
import book_foot from "../assets/book_foot.svg";
import Top_Banner from "../assets/Top_Banner.png";
import Timer from "../assets/Timer.png";
import facebook_icon from "../assets/facebook_icon.png";
import pinterest_icon from "../assets/pinterest_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import location_icon from "../assets/location_icon.png";
import message_icon from "../assets/message_icon.png";
import phone_icon from "../assets/phone_icon.png";
import Newsletter from "../assets/Newsletter.png";
import color_location_icon from "../assets/color_location_icon.png";
import color_message_icon from "../assets/color_message_icon.png";
import Games from '../games.json';
import Search from "../components/Search";




const Homepage = () => {

  const [active, setActive] = useState(false)
  
  const showMenu = () => {
    setActive(!active)
  }

	return (
		<div>
			<section className="nav_extension">
				<div className="container">
					<div className="nav_extension_inner">
						<div className="navleft_ext">
							<div className="navext_contents content_one">
								<img
									src={color_location_icon}
									alt="colored location icon"
									className="asset_icon"
								/>
								<p className="navext_text">9ijakids lane, Lagos</p>
							</div>
							<div className="navext_contents">
								<img
									src={color_message_icon}
									alt="colored message Icon"
									className="asset_icon"
								/>
								<p className="navext_text">9ijakids@test.com</p>
							</div>
						</div>
						<div className="navright_ext">
							<div className="ext_right">
								<img
									src={facebook_icon}
									alt="facebook social"
									className="fb_icon social_icon"
								/>
								<img
									src={pinterest_icon}
									alt="pinterest"
									className="asset_icon social_icon"
								/>
								<img
									src={twitter_icon}
									alt="twitter social"
									className="asset_icon social_icon"
								/>
								<img
									src={instagram_icon}
									alt="instagram social"
									className="asset_icon social_icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="nav_section">
				<div className="container">
					<div className=" main_nav">
						<Link className="main_logo">
							<img src={book_logo} alt="main logo" className="page_logo" />
							<p className="main_logo_text">9IJAKIDS</p>
						</Link>
						<motion.div
							className="menu_content"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
						>
							<MenuOutlined className="menu_icon" onClick={showMenu} />
						</motion.div>
						<div className={active ? "right_nav active" : "right_nav"}>
							<ul>
								<div className="closed_content">
									<Close className="closed_icon" onClick={showMenu} />
								</div>
								<li className="nav_items">
									<Link to="/" className="nav_text">
										Home
									</Link>
								</li>
								<li className="nav_items">
									<Link to="/" className="nav_text">
										About
									</Link>
								</li>
								<li className="nav_items">
									<Link to="/" className="nav_text">
										Games
									</Link>
								</li>
								<li className="nav_items">
									<Link to="/" className="nav_text">
										Competition
									</Link>
								</li>
								<li className="nav_signup nav_items">
									<Link to="/">
										<motion.button
											className="signup_button"
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 0.8 }}
										>
											Register
										</motion.button>
									</Link>
								</li>

								<div className="search_content nav_items">
									
									<Search details={Games}/>

									{/* <li className="each_nav">
										<Link
											to="/"
											className="nav_text"
											onClick={() => onSearch(search)}
										>
											<FontAwesomeIcon
												icon={faMagnifyingGlass}
												className="search_icon"
											/>
										</Link>
									</li> */}
								</div>

							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="intro">
				<div className="container">
					<div className="container_row hero_container">
						<div className="container_col hero_text">
							<div className="left_column">
								<div className="left_col_heading">
									<p className="hero_para">Learning is Fun</p>
									<h1 className="hero_head">
										Learn New Skills Online <br /> Find Best Courses
									</h1>
								</div>
								<div className="left_col_text hero_action">
									<li className="each_action">
										<Link to="/">
											<motion.button
												className="action_button signup"
												whileHover={{ scale: 1.2 }}
												whileTap={{ scale: 0.8 }}
												animate={{ marginRight: 7 }}
											>
												Register
											</motion.button>
										</Link>
									</li>

									<li className="each_action">
										<Link to="/">
											<motion.button
												className="action_button login"
												whileHover={{ scale: 1.2 }}
												whileTap={{ scale: 0.8 }}
												animate={{ marginRight: 7 }}
											>
												Login
											</motion.button>
										</Link>
									</li>
								</div>
							</div>
						</div>
						<div className="hero_image container_col">
							<img src={Top_Banner} alt="Top Banner" className="hero_img" />
						</div>
					</div>
					<div className="timer_img">
						<img src={Timer} alt="Timer" className="timer_image" />
					</div>
				</div>
			</section>

			<section className="section_two">
				<div className="container">
					<div>
						<h2 className="section_subtitle game_title">Popular Games</h2>
					</div>
					<div className="games_container">
						{Games &&
							Games.map((game) => {
								return (
									<div className="game_box" key={game.id}>
										<div className="game_img">
											<img
												src={game.GameImage}
												alt="A type of kid's game"
												className="img_games"
											/>
										</div>
										<div className="game_content">
											<p className="game_head">{game.GameTitle}</p>
											<p className="game_text">{game.GameDescription}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>

			<section className="section_three">
				<div className="container">
					<div className="subscribe_container">
						<div className="subscribe_col news_img">
							<img src={Newsletter} alt="Newsletter" />
						</div>
						<div className="subscribe_col news_contents">
							<div className="top_col">
								<p className="news_text">Subscrible now</p>
								<h2 className="section_subtitle">Be in the know...</h2>
							</div>
							<div className="bottom_col news_field">
								<input
									type="email"
									placeholder="Enter email address"
									className="email_input"
								/>
								<span className="subscribe_container">
									<Link to="/">
										<motion.button
											className="subscribe_button"
											whileTap={{ scale: 0.8 }}
										>
											Subscrible now
										</motion.button>
									</Link>
								</span>
								{/* <span className="msg_icon"></span> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section_four">
				<div className="container top_footer">
					<div className="footer_container">
						<div className="left_footer">
							<div className="left_contents">
								<img src={book_foot} alt="footer logo" className="foot_icons" />
								<p className="logo_text">9IJAKIDS</p>
							</div>
							<div className="left_contents">
								<img
									src={location_icon}
									alt="location"
									className="asset_icon foot_icons"
								/>
								<p className="foot_text">9ijakids lane</p>
							</div>
							<div className="left_contents">
								<img
									src={message_icon}
									alt="emails"
									className="asset_icon foot_icons"
								/>
								<p className="foot_text">9ijakids@test.com</p>
							</div>
							<div className="left_contents">
								<img
									src={phone_icon}
									alt="phone calls"
									className="asset_icon foot_icons"
								/>
								<p className="foot_text">phone 9ijakids</p>
							</div>
						</div>
						<div className="right_footer">
							<div>
								<p className="foot_head">Community</p>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Learners
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Partners
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Developers
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Beta Testers
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Translators
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Blog
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Tech Blog
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Teaching Center
									</Link>
								</li>
							</div>
							<div>
								<p className="foot_head">Informations</p>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										About
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Pricing
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Blog
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Careers
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Contact
									</Link>
								</li>
							</div>
							<div>
								<p className="foot_head">More</p>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Press
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Investors
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Terms
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Privacy
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Help
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Accessibilty
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Contact
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Articles
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Directory
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Affiliates
									</Link>
								</li>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="foot_extension">
						<div className="ext_left">
							<p className="ext_text">test</p>
							<p className="ext_text">test</p>
							<p className="ext_text">test</p>
						</div>
						<div className="ext_right">
							<img
								src={facebook_icon}
								alt="facebook social"
								className="fb_icon social_icon"
							/>
							<img
								src={pinterest_icon}
								alt="pinterest"
								className="asset_icon social_icon"
							/>
							<img
								src={twitter_icon}
								alt="twitter social"
								className="asset_icon social_icon"
							/>
							<img
								src={instagram_icon}
								alt="instagram social"
								className="asset_icon social_icon"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
