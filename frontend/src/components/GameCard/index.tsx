import GameScore from "components/GameScore";
import { Link } from "react-router-dom";
import { game } from "types/game";

type Props = {
    game: game;
}

function gameCard( {game} : Props) {


    return (
        <div>
            <img className="rankinggaming-game-card-image" src={game.image} alt={game.title} />
            <div className="rankinggaming-card-bottom-container">
                <h3>{game.title}</h3>
                <GameScore count={game.count} score={game.score}/>

                <Link to={`/form/${game.id}`}>
                    <div className="btn btn-primary rankinggaming-btn">Avaliar</div>
                </Link>
                
            </div>
        </div>
    );
}

export default gameCard;