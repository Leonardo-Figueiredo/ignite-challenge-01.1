interface HeaderProps  {
  genreTitle: string
}

const Header: React.FC<HeaderProps> = ({ genreTitle }) => {
  return (
    <header>
      <span className="category">Categoria:<span> {genreTitle}</span></span>
    </header>
  )
}

export { Header }