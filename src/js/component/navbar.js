import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar d-flex justify-content-around navbar-light bg-secondary">
			<div className="wrap d-flex align-items-center justify-content-between" style={{width: "70%"}}>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" width="100" alt="star wars logo" />
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary dropdown-toggle">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
