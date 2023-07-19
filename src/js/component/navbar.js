import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar px-5 pl-5 navbar-light bg-secondary">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" width="80" alt="star wars logo" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary dropdown-toggle">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
