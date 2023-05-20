import { Link } from "react-router-dom"
import "./Home.css"
import video from "../assets/rick-1.mp4";

const Home = () => {
  return (
    <>
      <div>
   
        <Link  to="/gallery">
        <div className="background-video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
        {/* <img src="https://i.pinimg.com/564x/58/23/f9/5823f95f4ff6bcdc0fb321d29e3f087a.jpg" alt="rickandmorty" /> */}
        </Link>
      
      </div>
    </>
  )
}

export default Home

    