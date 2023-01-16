import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FormatDateToBr from '../Utils/FormatDateToBr'
import { showNotification } from '../../../features/common/headerSlice'
import { setMaintenances } from '../../../features/common/maintenanceSlice'

import { useDispatch, useSelector } from 'react-redux'


const ModalCreateMaintenance = ({ closeModal }) => {

    const dispatch = useDispatch()

    const { allVehicles } = useSelector(state => state.vehicles)

    const [CarSelected, SetCarSelected] = useState()
    const [MaintenanceDate, SetMaintenanceDate] = useState()
    const [MaintenanceReason, SetMaintenanceReason] = useState('')

    if (allVehicles.length == 0) {
        dispatch(showNotification({ message: 'É necessário Cadastrar Um Veículo Para Prosseguir Com Essa Ação !', status: 0 }))
        closeModal()
    }

    const CreateMaintenance = async () => {
        const maintenanceData = {
            date: FormatDateToBr(MaintenanceDate),
            vehicle_id: CarSelected,
            reason: MaintenanceReason
        }

        try {
            const { data } = await axios.post('/maintenances', maintenanceData)
            const newData = await axios.get('/maintenances')
            console.log(newData.data.data.data)
            dispatch(setMaintenances(newData.data.data.data))
            dispatch(showNotification({ message: data.message, status: 1 }))
            closeModal()
        } catch (error) {
            dispatch(showNotification({ message: error?.response?.data?.message, status: 0 }))
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full" onChange={e => SetCarSelected(e.target.value)}>
                        <option>Selecione o Veículo</option>
                        {allVehicles && allVehicles.map((car, key) => <option value={car.id} key={key}>{car.nickname}</option>)}
                    </select>
                </div>
                <div className="form-control w-full mt-5">
                    <input type="date" placeholder="Data Da Manutenção" onChange={e => SetMaintenanceDate(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <textarea className="textarea textarea-bordered" onChange={e => SetMaintenanceReason(e.target.value)} placeholder="Motivo"></textarea>
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-success" onClick={() => CreateMaintenance()}>Criar</label>
            </div>
        </>
    )
}

export default ModalCreateMaintenance