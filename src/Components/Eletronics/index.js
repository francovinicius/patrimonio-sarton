import styles from "./Eletronics.css"
export default function Eletronics() {
    return (



        <div className="div-eletronics d-flex justify-content-center align-items-center">

            <div class="card d-flex justify-content-center align-items-center flex-column">
                <img src="./assets/img/Icons/note.svg" class="card-img-top" alt="..." />
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                    <h5 class="card-title">Patrimônio #333</h5>

                    {/* <!-- Button trigger modal -->*/}
                    <button type="button" class="btn btn-color-blue" data-bs-toggle="modal" data-bs-target="#pat333">
                        Ver Status
                    </button>

                </div>



                {/*<!-- Modal -->*/}
                <div class="modal fade" id="pat333" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}