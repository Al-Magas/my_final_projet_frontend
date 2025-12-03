import restauranfood from './icons_assets/restauranfood.jpg';
import { Link } from "react-router-dom";
function Presentation() {
    return (
        <div className='primaryCard hero'>
            <div>
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>Le meilleiur restaurant aux saveurs internationales</p>
                <Link to="/reservations">
                    <button type="submit">Reserver en ligne</button>
                </Link>
            </div>

            <img src={restauranfood} alt="Restaurant food" />
        </div>
    );
}

export default Presentation;
