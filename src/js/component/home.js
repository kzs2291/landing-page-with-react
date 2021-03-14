import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container mt-5">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}
