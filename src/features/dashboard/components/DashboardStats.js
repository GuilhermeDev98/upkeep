import { CogIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { MODAL_BODY_TYPES } from '../../../utils/globalConstantUtil'
import { openModal } from '../../../features/common/modalSlice'

import FormatDateToBr from '../../../pages/protected/Utils/FormatDateToBr'

function DashboardStats({ maintenance, id }) {

    const dispatch = useDispatch()

    return (
        <div className="stats shadow" onClick={() => dispatch(openModal({ title: "Editar Manutenção", bodyType: MODAL_BODY_TYPES.EDIT_MAINTENANCE, extraObject: maintenance }))}>
            <div className="stat">
                <div className={`stat-figure`}><CogIcon className='h-10 w-10' /></div>
                <div className="stat-title">{maintenance.vehicle.nickname}</div>
                <div >{FormatDateToBr(maintenance.date)}</div>
                <div className="stat-desc">Agendada</div>
            </div>
        </div>
    )
}

export default DashboardStats