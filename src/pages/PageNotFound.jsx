import { Link } from "react-router-dom"
// import IconFind from "../assets/find.png";

const PageNotFound = () => {
    return (

        <div className="center" style={{ width:"100%", height:"500px", display:"flex", alignItems:"center", alignContent:"center", justifyContent:"center", flexDirection:"column" }}>

            <box-icon name='search-alt-2' width="500px" height="500px" animation='spin' color='#000' ></box-icon>    

            <br />

            <h1>Hey! cette page n'existe pas</h1>

            <br />

            <Link to="/acte-etat-civil">
                Retourner a l'accueil
            </Link>
        </div>
    )
}

export default PageNotFound;