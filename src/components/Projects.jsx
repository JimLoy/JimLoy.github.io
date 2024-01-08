import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<div className="projects">
			<h1 className="projects_title">PROJECTS</h1>
			<div className="projects_cards">
				<ProjectCard
					name="PG Gimme a Ride"
					description="Group development of a web application that connects users going to the same destination, in order to travel together and share expenses. For this project we used: React, Redux, Node, Express, PostgreSQL, MercadoPago, Sass, Material UI, Cloudinary, NodeMailer, MapBox GL JS, Auth0, Sequelize"
					repository="https://github.com/Marisaliap/PG-Subi"
					deploy="https://gimmearide.vercel.app"
				/>
				<ProjectCard
					name="PI Countries"
					description="Development of a Single Page Application using React and Redux for the Front-End, styled with pure CSS. The data from an API and the Back-End were consumed using Node and Express, adding new functionalities to the Pokeapi API."
					repository="https://github.com/JimLoy/PI-Countries"
					deploy={null && "https://countries-jimloy.vercel.app"}
				/>
				<ProjectCard
					name="Weather App"
					description="The front-end app is developed with React. It returns the temperature, wind speed, humidity and wind chill of the city you write consuming information from the OpenWeather api."
					repository="https://github.com/JimLoy/Weather-App"
					deploy={null && "https://weather-app-jimloy.vercel.app"}
				/>
			</div>
		</div>
	);
}
