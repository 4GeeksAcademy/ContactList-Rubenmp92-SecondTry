import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom"
import Card from "../component/Card"
import InfoCard from "../component/InfoCard";
import UpdateInfo from "../component/UpdateInfo";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>

		</p>

		{/* <Link to="/tarjeta/56">
			<button className="btn btn-danger mx-5">Vamos a /tarjeta</button>
		</Link> */}

		{/* <Card info = "Info enviada desde home"/> */}

		<Card />
		<InfoCard />
		<UpdateInfo />

	</div>
);
