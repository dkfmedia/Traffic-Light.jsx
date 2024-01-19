import React from "react";
import Lights from "./lights";


//create your first component
const Home = () => {
	return (
 
	<><div className="justify-content-center d-flex">
			<div className="traffic-light">
				<div className="red light"></div>
				<div className="yellow light"></div>
				<div className="green light"></div>
			</div>
		</div><div className="justify-content-center d-flex">
				<Lights />
			</div></> 
	
	);
};

export default Home;


	