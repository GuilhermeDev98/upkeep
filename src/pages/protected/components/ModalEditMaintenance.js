function ModalEditMaintenance({ closeModal }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <input type="datetime-local" placeholder="Data Da Manutenção" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <textarea className="textarea textarea-bordered" placeholder="Motivo"></textarea>
                </div>
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full">
                        <option selected>Status</option>
                        <option>Agendada</option>
                        <option>Em Andamento</option>
                        <option>Finalizada</option>
                        <option>Cancelada</option>
                    </select>
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-warning" onClick={() => closeModal()}>Editar</label>
            </div>
        </>
    )
}

export default ModalEditMaintenance