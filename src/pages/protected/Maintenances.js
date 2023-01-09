import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import axios from 'axios'

import { PlusIcon, PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline'
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import { openModal } from '../../features/common/modalSlice'
import FormatDateToBr from '../protected/Utils/FormatDateToBr'


function Maintenance() {

  const dispatch = useDispatch()
  const [ShowQuant, SetShowQuant] = useState(10)
  const [CheckboxesMarked, SetCheckboxesMarked] = useState([])
  const [Maintenances, SetMaintenances] = useState([])
  const [Pagination, SetPagination] = useState(0)

  useEffect(() => {
    dispatch(setPageTitle({ title: "" }))
  }, [])

  const MarkAllCheckboxes = () => {
    const masterCheckboxValue = document.getElementById("MasterCheckbox").checked
    const checkboxes = document.querySelectorAll("#checkbox")
    const markeds = []

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = masterCheckboxValue;
      if (checkboxes[i].checked == true) {
        markeds.push(i)
      }
    }
    SetCheckboxesMarked(markeds)
  }

  const CheckUncheckOneCheckbox = (index) => {
    if (CheckboxesMarked.includes(index)) {
      SetCheckboxesMarked(CheckboxesMarked.filter(value => value !== index))
    } else {
      SetCheckboxesMarked([...CheckboxesMarked, index])
    }
  }

  const GetMaintenances = async (url = `maintenances?perPage=${ShowQuant}&page=1`) => {
    SetCheckboxesMarked([])
    try {
      const { data } = await axios.get(url)
      SetMaintenances(data.data.data)
      delete data.data.data
      SetPagination(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const GetIdsOfCheckBoxesMarked = () => {
    return Maintenances.filter((value, index) => CheckboxesMarked.includes(index) ? value.id : false).map(value => value.id)
  }

  useEffect(() => {
    GetMaintenances()
  }, [])

  useEffect(() => {
    GetMaintenances()
  }, [ShowQuant])

  useEffect(() => {
    if (CheckboxesMarked.length == 0) document.getElementById('MasterCheckbox').checked = false
  }, [CheckboxesMarked])

  useEffect(() => {
    document.querySelectorAll('#checkbox').forEach(input => input.checked = false)
    SetCheckboxesMarked([])
  }, [Maintenances])

  return (
    <>

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold ml-2">Manutenções</h1>
        <div className='flex items-center'>
          <strong className='mr-2'>Exibir</strong>
          <div className="btn-group mr-5 items-center">
            <button className={`btn ${ShowQuant == 10 ? 'btn-active' : ''}`} onClick={() => SetShowQuant(10)}>10</button>
            <button className={`btn ${ShowQuant == 50 ? 'btn-active' : ''}`} onClick={() => SetShowQuant(50)}>50</button>
            <button className={`btn ${ShowQuant == 100 ? 'btn-active' : ''}`} onClick={() => SetShowQuant(100)}>100</button>
          </div>
          <div className="btn btn-success" onClick={() => dispatch(openModal({ title: "Nova Manutenção", bodyType: MODAL_BODY_TYPES.CREATE_MAINTENANCE }))}>< PlusIcon className='h-5 w-5' /></div>
          {CheckboxesMarked.length >= 1 && <div className="btn btn-error ml-2" onClick={() => dispatch(openModal({ title: "Apagar Em Massa", bodyType: MODAL_BODY_TYPES.CONFIRM_DELETE_MAINTENANCE, extraObject: GetIdsOfCheckBoxesMarked() }))}>< TrashIcon className='h-5 w-5' /></div>}
        </div>
      </div>
      <div className="card w-full p-6 mt-6 bg-base-100 shadow-xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th><input type="checkbox" className="checkbox" onClick={() => MarkAllCheckboxes()} id="MasterCheckbox" /></th>
                <th>Veículo</th>
                <th>Data Programada</th>
                <th>Status</th>
                <th>Motivo</th>
                <th className='text-center'> </th>
              </tr>
            </thead>
            <tbody>
              {
                Maintenances.map((u, k) => {
                  return (
                    <tr key={k}>
                      <th><input type="checkbox" className="checkbox" id="checkbox" onClick={() => CheckUncheckOneCheckbox(k)} /></th>
                      <td>{u.vehicle.nickname}</td>
                      <td>{FormatDateToBr(u.date)}</td>
                      <td>{u.status ? u.tatus : 'Não Informado'}</td>
                      <td>{u.reason}</td>
                      <td className='text-center'>
                        <div className="btn-group">
                          <button className="btn btn-warning" onClick={() => dispatch(openModal({ title: "Editar Manutenção", bodyType: MODAL_BODY_TYPES.EDIT_MAINTENANCE, extraObject: u }))}><PencilIcon className='h-4 w-4' /></button>
                          <button className="btn btn-error" onClick={() => dispatch(openModal({ title: "Deletar Manutenção", bodyType: MODAL_BODY_TYPES.CONFIRM_DELETE_MAINTENANCE, extraObject: u }))}><TrashIcon className='h-4 w-4' /></button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        {Pagination.last_page > 1 && <div className='text-center mt-2'>
          <div className="btn-group">
            {Pagination.prev_page_url && <button className="btn" onClick={() => GetMaintenances(`maintenances?perPage=${ShowQuant}&page=${Pagination?.prev_page_url.split("=")[1]}`)}>Anterior</button>}
            <button className="btn btn-active">{Pagination.current_page}</button>
            {Pagination.next_page_url && <button className="btn" onClick={() => GetMaintenances(`maintenances?perPage=${ShowQuant}&page=${Pagination?.next_page_url.split("=")[1]}`)}>Próxima</button>}
          </div>
        </div>}
      </div>
    </>
  )
}

export default Maintenance