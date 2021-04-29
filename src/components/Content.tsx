import { Genre } from "../entities/Genre"
import { Movie } from "../entities/Movie"
import { Header } from './Header'
import { MovieCard } from './MovieCard'

interface ContentProps {
	selectedGenre: Genre
	movies: Movie[]
}

const Content: React.FC<ContentProps> = ({ selectedGenre, movies }) => {
	return (
		<div className="container">
			<Header genreTitle={selectedGenre.title} />

			<main>
				<div className="movies-list">
					{movies.map(movie => (
						<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
					))}
				</div>
			</main>
		</div>
	)
}

export { Content }