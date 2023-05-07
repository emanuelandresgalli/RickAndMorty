import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Gallery.css';
// import video from '../assets/futuro-12917.mp4';


const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      let filteredCharacters = res.data.results;
      if (searchTerm) {
        filteredCharacters = filteredCharacters.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setCharacters(filteredCharacters);
      setTotalPages(res.data.info.pages);
    };
    getCharacters();
  }, [currentPage, searchTerm]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div >
       <div className="gallery-details">
    {/* <video autoPlay loop muted>
      <source src={video} type="video/mp4" />
      </video>
    {} */}
      <div className="contenedor_buscador">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for a character"
      />
    
      </div>
      
       
      </div>
      
    
      {characters.map((character)=>(
        <Link key={character.id} to={`${character.id}`}>
          <figure className="contenedor_gallery" >
            <h3 className="gallery_titulo">{character.name}</h3>
            <img className="gallery_img" src={character.image} alt="{character.name}" />
          </figure>
        </Link>
        
      ))}
       
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button className="button_page" key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
    
  )
}

export default Gallery;