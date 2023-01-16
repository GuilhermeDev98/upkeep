import axios from 'axios'
import React, { useState } from 'react'
import FormatDateToBr from '../Utils/FormatDateToBr'
import { showNotification } from '../../../features/common/headerSlice'
import { useDispatch } from 'react-redux'


function ModalEditMaintenance({ closeModal, extraObject }) {
    const dispatch = useDispatch()

    const [Date, SetDate] = useState(extraObject?.date)
    const [Reason, SetReason] = useState(extraObject?.reason)
    const [Id, SetId] = useState(extraObject?.id)


    const EditMaintenance = async () => {
        const newValue = {
            date: FormatDateToBr(Date),
            reason: Reason
        }

        try {
            const { data } = await axios.put(`maintenances/${Id}`, newValue)
            dispatch(showNotification({ message: data.message, status: 1 }))
            closeModal()
            setTimeout(() => {
                window.location.href = window.location.href
                console.log('pow')

            }, 1500)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <input type="date" placeholder="Data Da Manutenção" defaultValue={extraObject.date} onChange={e => SetDate(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <textarea className="textarea textarea-bordered" defaultValue={extraObject.reason} onChange={e => SetReason(e.target.value)} placeholder="Motivo"></textarea>
                </div>
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full">
                        <option>Selecione Um Status</option>
                        <option>Agendada</option>
                        <option>Em Andamento</option>
                        <option>Finalizada</option>
                        <option>Cancelada</option>
                    </select>
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-warning" onClick={() => EditMaintenance()}>Editar</label>
            </div>
        </>
    )
}

export default ModalEditMaintenance