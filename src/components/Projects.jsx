import ProjectCard from './ProjectCard';

export default function Projects(){
  return(
    <div>
      <h1 className="title">PROJECTS</h1>
      <ProjectCard 
        name="PI Countries" 
        description="Desarrollo de una Single Page Application usando React.JS y Redux.JS para el Front-End, estilizados con CSS puro sin usar librerías externas. Los datos de una API y el Back-End fueron consumidos usando Node.JS y Express.JS, añadiendo nuevas funcionalidades a la API Pokeapi. Algunas funcionalidades del proyecto son permitir mostrar información característica de diferentes países del mundo de forma ordenada, ya sea por nombre de país o por población, permitiendo filtrar por continente o por el nombre de alguna actividad que se realice así, realizar búsquedas por nombre, y crear nuevas actividades." 
        repository="https://github.com/JimLoy/PI-Countries" 
        deploy="https://pi-countries-jimloy.vercel.app"
      />
      <ProjectCard 
        name="PG Gimme a Ride" 
        description="Desarrollo grupal de una aplicación web que conecta usuarios que van a un mismo destino, para poder viajar juntos y compartir gastos. Para este proyecto se utilizó: React.js, Redux.js, Node.js, Express.js, PostgreSQL, MercadoPago, Sass, Material UI, Cloudinary, NodeMailer, MapBox GL JS, Auth0, Sequelize" 
        repository="https://github.com/Marisaliap/PG-Subi" 
        deploy="https://gimmearide.vercel.app"
      />
      <ProjectCard 
        name="Weather App" 
        description="El front-end esta desarrollado con React y un reducido back-end con express (en Node). Devuelve la temperatura, velocidad del viento, humedad y sensacion termica de la ciudad que escribas consumiendo la informacion de la api OpenWeather" 
        repository="https://github.com/JimLoy/Weather-App" 
        deploy="https://weather-app-jimloy.herokuapp.com"
      />   
    </div>
  )
}