function ModalCreateVehicle({ closeModal }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Nome" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full">
                        <option selected>Marca</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Modelo" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Versão" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Tipo" className="input input-bordered w-full" />
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-success" onClick={() => closeModal()}>Criar</label>
            </div>
        </>
    )
}

export default ModalCreateVehicle