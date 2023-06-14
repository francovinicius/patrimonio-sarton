import style from "./Icons.css"

export default function Icons() {
    return (

        <div className="d-flex justify-content-center align-items-center flex-column">

            <div className="d-flex justify-content-center align-items-center div-central">

                <div className="div-icon d-flex flex-column justify-content-center align-items-center">
                    <a className="" href="/eletronicos">
                        <img src="./assets/img/Icons/note.svg" alt="Logo Sarton" width="100" height="40" />
                    </a>
                    <span>Eletrônicos</span>
                </div>

                <div className="div-icon d-flex flex-column justify-content-center align-items-center">
                    <a className="" href="/">
                        <img src="./assets/img/Icons/cadeira.svg" alt="Logo Sarton" width="100" height="40" />
                    </a>
                    <span>Mobília</span>
                </div>

                <div className="div-icon d-flex flex-column justify-content-center align-items-center">
                    <a className="" href="/">
                        <img src="./assets/img/Icons/carro.svg" alt="Logo Sarton" width="100" height="40" />
                    </a>
                    <span>veículos</span>
                </div>

            </div>

            <div className="margin"></div>

        </div>
    )
}