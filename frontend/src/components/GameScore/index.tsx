import GameStars from "components/GameStars";
import './styles.css';

type Props = {
    score:number;
    count:number;
}

function GameScore( {score, count} : Props ){

    return (
        <div className="rankinggaming-score-container">
            <p className="rankinggaming-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <GameStars score={score}/>
            <p className="rankinggaming-score-count">{count} avaliações</p>
        </div>
    );

}

export default GameScore;