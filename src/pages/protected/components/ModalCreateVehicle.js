import axios from 'axios'
import React, { useState } from 'react'
import { showNotification } from '../../../features/common/headerSlice'
import { useDispatch } from 'react-redux'

function ModalCreateVehicle({ closeModal }) {

    const dispatch = useDispatch()

    const [nickname, SetNickname] = useState('')
    const [brand, SetBrand] = useState('')
    const [model, SetModel] = useState('')
    const [version, SetVersion] = useState('')
    const [type, SetType] = useState('')

    const CreateVehicle = async () => {
        try {
            const { data } = await axios.post('vehicles', { nickname, brand, model, version, type })
            dispatch(showNotification({ message: data.message, status: 1 }))
            closeModal()
            setTimeout(() => {
                window.location.href = window.location.href
            }, 1500)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="flex flex-col">
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Nome" onChange={e => SetNickname(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full" onChange={e => SetBrand(e.target.value)}>
                        <option>Selecione a Marca</option>
                        <option value={'marca do carro'}>Homer</option>
                    </select>
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Modelo" onChange={e => SetModel(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Versão" onChange={e => SetVersion(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Tipo" onChange={e => SetType(e.target.value)} className="input input-bordered w-full" />
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-success" onClick={() => CreateVehicle()}>Criar</label>
            </div>
        </>
    )
}

export default ModalCreateVehicle