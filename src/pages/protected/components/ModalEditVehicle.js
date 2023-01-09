import axios from 'axios'
import React, { useState } from 'react'
import { showNotification } from '../../../features/common/headerSlice'
import { useDispatch } from 'react-redux'

function ModalEditVehicle({ closeModal, extraObject }) {
    console.log(extraObject)

    const dispatch = useDispatch()

    const [nickname, SetNickname] = useState(extraObject.nickname)
    const [brand, SetBrand] = useState(extraObject.brand)
    const [model, SetModel] = useState(extraObject.model)
    const [version, SetVersion] = useState(extraObject.version)
    const [type, SetType] = useState(extraObject.type)

    const EditVehicle = async () => {
        try {
            const { data } = await axios.put(`vehicles/${extraObject.id}`, { nickname, brand, model, version, type })
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
                    <input type="text" placeholder="Nome" defaultValue={nickname} onChange={e => SetNickname(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <select className="select select-bordered w-full" onChange={e => SetBrand(e.target.value)}>
                        <option defaultValue={brand} value={brand}>{brand}</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Modelo" defaultValue={model} onChange={e => SetModel(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Versão" defaultValue={version} onChange={e => SetVersion(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5">
                    <input type="text" placeholder="Tipo" defaultValue={type} onChange={e => SetType(e.target.value)} className="input input-bordered w-full" />
                </div>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-warning" onClick={() => EditVehicle()}>Editar</label>
            </div>
        </>
    )
}

export default ModalEditVehicle