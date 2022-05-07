import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import { gamePage } from 'types/game';
import './styles.css';

type Props ={
    page: gamePage;
    onChange: Function;
}

function Pagination({page, onChange } : Props) {

    return (
        <div className="rankinggaming-pagination-container">
            <div className="rankinggaming-pagination-box">
                <button className="rankinggaming-pagination-button" disabled={page.first} 
                    onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number+1} de ${page.totalPages}`}</p>
                <button className="rankinggaming-pagination-button" disabled={page.last} 
                    onClick={() => onChange(page.number + 1)}>
                    <Arrow className="rankinggaming-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;