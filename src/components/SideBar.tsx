import { Button } from './Button'
import { Genre } from '../entities/Genre'

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Genre[]

  selectedGenreId: number
  setSelectedGenreId(id: number): void
}

const SideBar:React.FC<SideBarProps> = ({ genres, selectedGenreId, setSelectedGenreId }) => {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }


  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}

export { SideBar }