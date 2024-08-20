import { useNavigate } from "react-router-dom"
// import IconFind from "../assets/find.png";

const PageNotFound = ({refBody}) => {
    const navigate = useNavigate()

    const back = () => {
        navigate('/acte-etat-civil')
        refBody.current.style.display ="inline-flex";
        location.reload()
    }
    return (

        <div className="center" style={{ width:"100%", height:"500px", display:"flex", alignItems:"center", alignContent:"center", justifyContent:"center", flexDirection:"column" }}>

            <box-icon name='search-alt-2' width="500px" height="500px" animation='spin' color='#000' ></box-icon>    

            <br />

            <h1>Hey! cette page n'existe pas</h1>

            <br />

            <p onClick={back} style={{ cursor:"pointer" }}>
                Retourner a l'accueil
            </p>
        </div>
    )
}

export default PageNotFound;