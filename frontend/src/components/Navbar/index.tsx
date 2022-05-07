import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import {ReactComponent as RankingGaming} from 'assets/img/rankinggaming.svg';
import './styles.css'

function Navbar() {
    return(
        <header>
            <nav className="container">
                <div className="rankinggaming-nav-content">
                    <RankingGaming />
                    <a href="https://github.com/LaurianoMonte/RankingGaming">
                    <div className="rankinggaming-contact-container">
                        <GithubIcon />
                        <p className="rankinggaming-contact-link">/desenvolvedores</p>
                    </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;