import axios from 'axios'
import React, { useState } from 'react'
import { showNotification } from '../../../features/common/headerSlice'
import { useDispatch } from 'react-redux'

function ModalConfirmDeleteMaintenance({ closeModal, extraObject }) {
    const dispatch = useDispatch()

    const [Id, SetId] = useState(extraObject?.id)
    const [Ids, SetIds] = useState(extraObject)

    const DeleteMaintenance = async () => {
        if (Id) {
            console.log(Id)
            try {
                const { data } = await axios.delete(`maintenances/${Id}`)
                dispatch(showNotification({ message: data.message, status: 1 }))
                closeModal()
                setTimeout(() => {
                    window.location.href = window.location.href
                }, 1500)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(Ids)
            Promise.all(Ids.map(id => axios.delete(`maintenances/${id}`))).then(() => {
                dispatch(showNotification({ message: 'Manutenções Deletadas Com Sucesso!', status: 1 }))
                closeModal()
                setTimeout(() => {
                    window.location.href = window.location.href
                }, 1500)
            }).catch(err => console.log(err))
        }

    }
    return (
        <>
            <div className="flex flex-col text-center w-full pt-2 pb-2">
                <strong>Voçê Realmente Deseja Confirmar Essa Ação?</strong>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-warning" onClick={() => closeModal()}>Cancelar</label>
                <label htmlFor="my-modal" className="btn btn-success" onClick={() => DeleteMaintenance()}>Confirmar</label>
            </div>
        </>
    )
}

export default ModalConfirmDeleteMaintenance 