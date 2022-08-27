import ProjectCard from './ProjectCard';

export default function Projects(){
  return(
    <div className='projects'>
      <h1 className="projects_title">PROJECTS</h1>
      <div className="projects_cards">
        <ProjectCard 
        name="PI Countries" 
        description="Development of a Single Page Application using React.JS and Redux.JS for the Front-End, styled with pure CSS without using external libraries. The data from an API and the Back-End were consumed using Node.JS and Express.JS, adding new functionalities to the Pokeapi API. Some functionalities of the project are to allow to show characteristic information of different countries of the world in an ordered way, either by country name or by population, allowing to filter by continent or by the name of some activity that is performed in this way, to perform searches by name, and to create new activities." 
        repository="https://github.com/JimLoy/PI-Countries" 
        deploy="https://pi-countries-jimloy.vercel.app"
      />
      <ProjectCard 
        name="PG Gimme a Ride" 
        description="Group development of a web application that connects users going to the same destination, in order to travel together and share expenses. For this project we used: React.js, Redux.js, Node.js, Express.js, PostgreSQL, MercadoPago, Sass, Material UI, Cloudinary, NodeMailer, MapBox GL JS, Auth0, Sequelize"
        repository="https://github.com/Marisaliap/PG-Subi" 
        deploy="https://gimmearide.vercel.app"
      />
      <ProjectCard 
        name="Weather App" 
        description="The front-end is developed with React and a reduced back-end with express (in Node). It returns the temperature, wind speed, humidity and wind chill of the city you write consuming information from the OpenWeather api." 
        repository="https://github.com/JimLoy/Weather-App" 
        deploy="https://weather-app-jimloy.vercel.app"
      /> 
      </div>
    </div>
  )
}