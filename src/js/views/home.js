import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="bg-dark vh-100 text-left px-5">
		<h1 className="text-danger pt-5">Characters</h1>
		<p className="pt-2">
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<h1 className="text-danger pt-5">Planets</h1>
	</div>
);
