import { useEffect } from 'react'
import RowDetailModalBody from '../features/table/components/RowDetailModalBody'
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'

import ModalCreateMaintenance from '../pages/protected/components/ModalCreateMaintenance'
import ModalEditMaintenance from '../pages/protected/components/ModalEditMaintenance'
import ModalConfirmDeleteMaintenance from '../pages/protected/components/ModalConfirmDeleteMaintenance'

import ModalCreateVehicle from '../pages/protected/components/ModalCreateVehicle'
import ModalEditVehicle from '../pages/protected/components/ModalEditVehicle'
import ModalConfirmDeleteVehicle from '../pages/protected/components/ModalConfirmDeleteVehicle'

function ModalLayout() {


    const { isOpen, bodyType, size, extraObject, title } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }



    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                    <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                    <h3 className="font-semibold text-2xl text-center">{title}</h3>

                    {
                        {
                            [MODAL_BODY_TYPES.USER_DETAIL]: <RowDetailModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CREATE_MAINTENANCE]: <ModalCreateMaintenance closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.EDIT_MAINTENANCE]: <ModalEditMaintenance closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CONFIRM_DELETE_MAINTENANCE]: <ModalConfirmDeleteMaintenance closeModal={close} extraObject={extraObject} />,

                            [MODAL_BODY_TYPES.CREATE_VEHICLE]: <ModalCreateVehicle closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.EDIT_VEHICLE]: <ModalEditVehicle closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CONFIRM_DELETE_VEHICLE]: <ModalConfirmDeleteVehicle closeModal={close} extraObject={extraObject} />,

                        }[bodyType]
                    }
                </div>
            </div>
        </>
    )
}

export default ModalLayout