import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/apropos">À propos</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Réservation</Link></li>
                <li><Link to="/commander">Commander en ligne</Link></li>
                <li><Link to="/connexion">Connexion</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
