import styles from "./Footer.css"

export default function Footer() {
    return (
        <footer class="footer navbar-dark">
            <div class="links-uteis">
                <div>
                    <h6>Links do Site</h6>
                </div>

                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#info-gerais">Informações Gerais</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Treinamentos</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="/#contatos">Contatos</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="direitos-footer">
                <p>Todos os direitos reservados a Sarton</p>
                <div class="copy">
                    <span>Criação e Desenvolvimenjto</span>
                    <a href="https://viniciusduarte.vercel.app/" target="_blank"><img src="./assets/img/footer/Vinicius-Duarte.svg"
                        alt="Vinicius Duarte"/></a>
                </div>
            </div>

        </footer>
    )
}