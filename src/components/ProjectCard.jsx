import weather from '../assets/bkg2.jpg';
import gimme from '../assets/gimmeARide.png';
import country from '../assets/landingPageWallpaper.jpg';


export default function ProjectCard({name,description,repository,deploy}){
  return(
    <div>
      <h2>{name}</h2>
      <img src={name === "PI Countries" ? 
        country 
        : name === "PG Gimme a Ride" ? 
        gimme 
        : weather} alt={`Project ${name}`} />
      <p>{description}</p>
      <button><a href={repository} alt="Repository">Repository</a></button>
      <button><a href={deploy} alt="Deploy">Deploy</a></button>
    </div>
  )
}