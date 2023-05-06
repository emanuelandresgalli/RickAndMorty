import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './GalleryDetails.css';



const GalleryDetail = () => {
    const {id} = useParams()
    const [character, setCharacters] = useState({})

    useEffect(()=>{
       const getCharacterById = async ()=>{ 
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        // console.log(res.data[0]);
        setCharacters(res.data)
    }
        getCharacterById()
    },[])
  return (
    <div>
      {character ? (
        <>
        <section>
          
          <Link to="/gallery">
        <figure className="contenedor_details">
         
          <div className="contenedor_nombre_character">
          <h2>{character.name}</h2>
          <h3>{character.status}</h3>
          </div>
        
          <img className="img_details" src={character.image} alt="{character.name}" />
          <div className="contenedor_footer_imagen">
          <p>{character.gender}</p>
          <p>{character.species}</p>
          </div>
          </figure>
          </Link>
          </section>
        </>
      ): null}
    </div>
  )
}

export default GalleryDetail;
