import style from "./Contacts.css"

export default function () {
    return (
        <section className="contatos" id="contatos">

            <div className="margin"></div>

            <div className="d-flex justify-content-center div-txt-contatos">
                <h2>Entre em contato conosco</h2>
            </div>


            <div className="contatos-juncao">
                <div className="div-email">
                    <form action="https://formsubmit.co/seuemail@email.com" method="POST">
                        <div className="input-group mb-2">
                            <input type="text" name="name" aria-label="First name" className=" form-control bg-dark p-2 text-light"
                                required placeholder="Digite seu nome completo" />
                        </div>
                        <div className="input-group mb-2 ">
                            <input type="email" name="email" aria-label="First name" className="bg-dark p-2 text-light form-control"
                                required placeholder="Digite seu email" />
                        </div>

                        <div className="input-group mb-2">
                            <textarea className="form-control bg-dark p-2 text-light" name="menssage" id="exampleFormControlTextarea1"
                                rows="3" required placeholder="Assunto"></textarea>
                        </div>

                        <button type="button d-flex justify-content-center submit" className="btn btn-contatos"
                           target="blank">Enviar</button>


                        <input type="hidden" name="_subject" value="Novo Contato!"/>
                            <input type="text" name="_honey" classNameName="input-escondido"/>
                                <input type="hidden" name="_captcha" value="false"/>
                                    <input type="hidden" name="_next" value="https://envio-email-por-form.vercel.app/" target="blank" />
                                </form>
                            </div>

                            <div className="middlee">

                                <a className="btnn" href="mailto:viniciusfranco.sarton@gmail.com?subject=Oportunidade&body= ">
                                    <i className="fab fa-google"></i>
                                </a>

                                <a className="btnn" href="https://wa.me/+5521971326631" target="_blank">
                                    <i className="fab fa-whatsapp"></i>
                                </a>

                                <a className="btnn" href="https://www.linkedin.com/company/gruposarton/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>

                            </div>

                        </div>
                    </section>
                    )
}