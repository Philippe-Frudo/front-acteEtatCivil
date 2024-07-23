
import DataNav from "./../../constants/dataLinks";
import { Link } from "react-router-dom";

const Nav = ({ isOn }) => {

    return (
        <nav className="card-link">
            <ul className="ul">
                {DataNav.map((data) => {
                    return (
                        <li className="ul-li" key={data.id}>
                            <Link to={data.root} className="link">
                                <span dangerouslySetInnerHTML={{ __html: data.svg }} />
                                <span className={{ isOn } ? "link-name show-details-menu" : "link-name"} id="link-name">{ isOn } {data.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;