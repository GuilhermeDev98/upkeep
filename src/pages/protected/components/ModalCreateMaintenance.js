function ModalCreateMaintenance({ closeModal }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full">
                        <option selected>Carro</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className="form-control w-full mt-5">
                    <input type="datetime-local" placeholder="Data Da Manutenção" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <textarea className="textarea textarea-bordered" placeholder="Motivo"></textarea>
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-success" onClick={() => closeModal()}>Criar</label>
            </div>
        </>
    )
}

export default ModalCreateMaintenance