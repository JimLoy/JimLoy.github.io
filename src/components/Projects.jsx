import ProjectCard from './ProjectCard';

export default function Projects(){
  return(
    <div>
      <h1 className="title">PROJECTS</h1>
      <ProjectCard 
        name="PI-Countries" 
        img="ElandingPageWallpaper.jpg" 
        description="Desarrollo de una Single Page Application usando React.JS y Redux.JS para el Front-End, estilizados con CSS puro sin usar librerías externas. Los datos de una API y el Back-End fueron consumidos usando Node.JS y Express.JS, añadiendo nuevas funcionalidades a la API Pokeapi. Algunas funcionalidades del proyecto son permitir mostrar información característica de diferentes países del mundo de forma ordenada, ya sea por nombre de país o por población, permitiendo filtrar por continente o por el nombre de alguna actividad que se realice así, realizar búsquedas por nombre, y crear nuevas actividades." 
        repository="https://github.com/JimLoy/PI-Countries" 
        deploy="https://pi-countries-jimloy.vercel.app"
      /> 
    </div>
  )
}