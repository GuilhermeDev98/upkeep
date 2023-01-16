import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import { openModal } from '../../features/common/modalSlice'
import Dashboard from '../../features/dashboard/index'
import { PlusIcon } from '@heroicons/react/24/outline'
import { setVehicles } from '../../features/common/vehiclesSlice'
import axios from 'axios'

function InternalPage() {
    const dispatch = useDispatch()

    const GetVehicles = async () => {
        try {
            const { data } = await axios.get('vehicles')
            dispatch(setVehicles(data.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(setPageTitle({ title: "" }))
        GetVehicles()
    }, [])



    return (
        <>
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl font-semibold mb-5">Manutenções Agendadas</h1>
                <div className='flex items-center'>
                    <div className="btn btn-success" onClick={() => dispatch(openModal({ title: "Novo Manutenção", bodyType: MODAL_BODY_TYPES.CREATE_MAINTENANCE }))}>< PlusIcon className='h-5 w-5' /> Nova Manutenção</div>
                </div>
            </div>
            <Dashboard />
        </>
    )
}

export default InternalPage