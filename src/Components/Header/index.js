import style from "./Header.css"

export default function Header() {
    return (
    <header id="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#info-gerais">Informações Gerais</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Treinamentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#contatos">Contatos</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </header>
)}