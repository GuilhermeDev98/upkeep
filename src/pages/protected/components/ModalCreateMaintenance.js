import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FormatDateToBr from '../Utils/FormatDateToBr'
import { showNotification } from '../../../features/common/headerSlice'
import { useDispatch } from 'react-redux'


const ModalCreateMaintenance = ({ closeModal }) => {

    const dispatch = useDispatch()

    const [UserCars, SetUserCars] = useState([])
    const [CarSelected, SetCarSelected] = useState()
    const [MaintenanceDate, SetMaintenanceDate] = useState()
    const [MaintenanceReason, SetMaintenanceReason] = useState('')

    const GetUserCars = async () => {
        try {
            const { data } = await axios.get('vehicles')
            SetUserCars(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const CreateMaintenance = async () => {
        const maintenanceData = {
            date: FormatDateToBr(MaintenanceDate),
            vehicle_id: CarSelected,
            reason: MaintenanceReason
        }

        try {
            const { data } = await axios.post('/maintenances', maintenanceData)
            dispatch(showNotification({ message: data.message, status: 1 }))
            closeModal()
            setTimeout(() => {
                window.location.href = window.location.href
            }, 1500)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        GetUserCars()
    }, [])

    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full" onChange={e => SetCarSelected(e.target.value)}>
                        <option>Selecione o Veículo</option>
                        {UserCars.map((car, key) => <option value={car.id} key={key}>{car.nickname}</option>)}
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