export default function ProjectCard({name,img,description,repository,deploy}){
  return(
    <div>
      <h2>{name}</h2>
      <img src={`../assets/${img}`} alt="Project" />
      <p>{description}</p>
      <button><a href={repository} alt="Repository">Repository</a></button>
      <button><a href={deploy} alt="Deploy">Deploy</a></button>
    </div>
  )
}