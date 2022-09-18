import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Close, MenuOutlined } from "@mui/icons-material";
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

const Homepage = () => {

  const [active, setActive] = useState(false)
  
  const showMenu = () => {
    setActive(!active)
  }


	return (
		<div>
			<section className="nav_section">
				<div className="container main_nav">
					<div className="main_logo">
						<img src={book_logo} alt="main logo" className="page_logo" />
						<li>
							<Link></Link>
							<p>9IJAKIDS</p>
						</li>
					</div>
					<div className="menu_content">
						<MenuOutlined className="menu_icon" onClick={showMenu} />
					</div>
					<div className={active ? 'right_nav active' : 'right_nav'}>
						<ul>
							<div className="closed_content">
								<Close className="closed_icon" onClick={showMenu} />
							</div>
							<li>
								<Link to="/" className="nav_text">
									Home
								</Link>
							</li>
							<li>
								<Link to="/" className="nav_text">
									About
								</Link>
							</li>
							<li>
								<Link to="/" className="nav_text">
									Games
								</Link>
							</li>
							<li>
								<Link to="/" className="nav_text">
									Competition
								</Link>
							</li>
							<li>
								<Link to="/">
									<button className="signup_button">Register</button>
								</Link>
							</li>
							{/* <li className="each_nav">
						<Link to="/" className="nav_text">
							Search
						</Link>
					</li> */}
						</ul>
					</div>
				</div>
			</section>

			<section className="intro">
				<div className="container">
					<div className="section_row hero_text">
						<div className="section_col">
							<p className="hero_para">Learning is Fun</p>
							<h1 className="hero_head">
								Learn New Skills Online Find Best Courses
							</h1>
						</div>
						<div className="section_col hero_action">
							<li className="each_action">
								<Link to="/">
									<button className="action_button signup">Register</button>
								</Link>
							</li>
							<li className="each_action">
								<Link to="/">
									<button className="action_button login">Login</button>
								</Link>
							</li>
						</div>
					</div>
					<div className="hero_image">
						<img src={Top_Banner} alt="Top Banner" />
					</div>
				</div>
				<div>
					<img src={Timer} alt="Timer" />
				</div>
			</section>

			<section className="section_two">
				<div className="container">
					<div>
						<h2 className="section_subtitle">Popular Games</h2>
					</div>
					<div></div>
				</div>
			</section>

			<section className="section_three">
				<div className="container section_row">
					<div className="section_col news_img">
						<img src={Newsletter} alt="Newsletter" />
					</div>
					<div className="section_col news_contents">
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
									<button className="subscribe_button">Subscrible now</button>
								</Link>
							</span>
							{/* <span className="msg_icon"></span> */}
						</div>
					</div>
				</div>
			</section>
			<section className="section_four">
				<div className="container">
					<div>
						<div>
							<img src={book_foot} alt="footer logo" />
							<p>9IJAKIDS</p>
						</div>
						<div>
							<img src={location_icon} alt="location" />
							<p>9ijakids lane</p>
						</div>
						<div>
							<img src={message_icon} alt="emails" />
							<p>9ijakids@test.com</p>
						</div>
						<div>
							<img src={phone_icon} alt="phone calls" />
							<p>phone 9ijakids</p>
						</div>
					</div>
					<div>
						<div>
							<p>Community</p>
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
							<p>Informations</p>
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
							<p>More</p>
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
			</section>
			<div className="container">
				<div>
					<p>test</p>
					<p>test</p>
					<p>test</p>
				</div>
				<div>
					<img src={facebook_icon} alt="facebook social" />
					<img src={pinterest_icon} alt="pinterest" />
					<img src={twitter_icon} alt="twitter social" />
					<img src={instagram_icon} alt="instagram social" />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
