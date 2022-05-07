import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { game } from 'types/game';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css'

type Props = {
    gameId : string;
}

function FormCard( { gameId } : Props ) {

    const navigate = useNavigate();

    const [game, setgame] = useState<game>();

    useEffect(() => {
        axios.get(`${BASE_URL}/games/${gameId}`)
            .then(response => {
                setgame(response.data);
            })
    },[gameId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                gameId: gameId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        });
    }

    return (
        <div className="rankinggaming-form-container">
            <img className="rankinggaming-game-card-image" src={game?.image} alt={game?.title} />
            <div className="rankinggaming-card-bottom-container">
                <h3>{game?.title}</h3>
                <form className="rankinggaming-form" onSubmit={handleSubmit}>
                    <div className="form-group rankinggaming-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group rankinggaming-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="rankinggaming-form-btn-container">
                        <button type="submit" className="btn btn-primary rankinggaming-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary rankinggaming-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard;