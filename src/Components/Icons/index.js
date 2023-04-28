import style from "./Icons.css"

export default function Icons() {
    return (
        <div className="d-flex justify-content-center align-items-center div-central">

            <div className="categoria-icon d-flex justify-content-center align-items-center">
                <a className="navbar-brand d-flex flex-column justify-content-center align-items-center" href="/">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40" />
                    <span>Eletronicos</span>
                </a>
            </div>

            <div className="categoria-icon d-flex justify-content-center align-items-center">
                <a className="navbar-brand d-flex flex-column justify-content-center align-items-center" href="/">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40" />
                    <span>Escritório</span>
                </a>

            </div>

            <div className="categoria-icon d-flex justify-content-center align-items-center">

                <a className="navbar-brand d-flex flex-column justify-content-center align-items-center" href="/">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40" />
                    <span>Sl Arquivos</span>

                </a>
            </div>
            <div className="categoria-icon d-flex justify-content-center align-items-center">

                <a className="navbar-brand d-flex flex-column justify-content-center align-items-center" href="/">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40" />
                    <span>Banheiro</span>
                    
                </a>
                

            </div>
            <div className ="categoria-icon d-flex justify-content-center align-items-center">
                <a className="navbar-brand d-flex flex-column justify-content-center align-items-center" href="/">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40" />
                    <span>Automóveis</span>

                </a>

            </div>


            <div className="margin"></div>
        </div>

    )
}