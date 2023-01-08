function ModalConfirmDeleteVehicle({ closeModal }) {
    return (
        <>
            <div className="flex flex-col text-center w-full pt-2 pb-2">
                <strong>Voçê Realmente Deseja Confirmar Essa Ação?</strong>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-warning" onClick={() => closeModal()}>Cancelar</label>
                <label htmlFor="my-modal" className="btn btn-success" onClick={() => closeModal()}>Confirmar</label>
            </div>
        </>
    )
}

export default ModalConfirmDeleteVehicle 