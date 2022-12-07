import weather from '../assets/bkg2.jpg';
import gimme from '../assets/gimmeARide.png';
import country from '../assets/landingPageWallpaper.jpg';

export default function ProjectCard({ name, description, repository, deploy }) {
	const img =
		name === 'PI Countries'
			? country
			: name === 'PG Gimme a Ride'
			? gimme
			: weather;

	return (
		<div className="card">
			<img className="card_img" src={img} alt={`Project ${name}`} />
			<h3 className="card_title">{name}</h3>
			<p className="card_description">{description}</p>
			<div className="card_bts">
				<a href={repository} className="card_link repo_bts" alt="Repository">
					<button className="card_button">Repository</button>
				</a>
				<a href={deploy} className="card_link dep_bts" alt="Deploy">
					<button className="card_button">Deploy</button>
				</a>
			</div>
		</div>
	);
}
