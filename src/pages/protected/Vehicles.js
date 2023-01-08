import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

import { PlusIcon, PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline'
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import { openModal } from '../../features/common/modalSlice'

const userSourceData = [
  { source: "Carro 1", count: "26,345", conversionPercent: 10.2 },
  { source: "Carro 2", count: "21,341", conversionPercent: 11.7 },
  { source: "Instagram Ads", count: "34,379", conversionPercent: 12.4 },
  { source: "Affiliates", count: "12,359", conversionPercent: 20.9 },
  { source: "Organic", count: "10,345", conversionPercent: 10.3 },
]

function Vehicles() {

  const dispatch = useDispatch()
  const [ShowQuant, SetShowQuant] = useState(10)
  const [CheckboxesMarked, SetCheckboxesMarked] = useState([])

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

  useEffect(() => {
    if (CheckboxesMarked.length == 0) document.getElementById('MasterCheckbox').checked = false
  }, [CheckboxesMarked])

  return (
    <>

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold ml-2">Veículos</h1>
        <div className='flex items-center'>
          <strong className='mr-2'>Exibir</strong>
          <div className="btn-group mr-5 items-center">
            <button className={`btn ${ShowQuant == 10 ? 'btn-active' : ''}`} onClick={() => SetShowQuant(10)}>10</button>
            <button className={`btn ${ShowQuant == 50 ? 'btn-active' : ''}`} onClick={() => SetShowQuant(50)}>50</button>
            <button className={`btn ${ShowQuant == 100 ? 'btn-active' : ''}`} onClick={() => SetShowQuant(100)}>100</button>
          </div>
          <div className="btn btn-success" onClick={() => dispatch(openModal({ title: "Novo Veículo", bodyType: MODAL_BODY_TYPES.CREATE_VEHICLE }))}>< PlusIcon className='h-5 w-5' /></div>
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
                userSourceData.map((u, k) => {
                  return (
                    <tr key={k}>
                      <th><input type="checkbox" className="checkbox" id="checkbox" onClick={() => CheckUncheckOneCheckbox(k)} /></th>
                      <td>{u.source}</td>
                      <td>{u.count}</td>
                      <td>{`${u.conversionPercent}%`}</td>
                      <td> lorem inpsin </td>
                      <td className='text-center'>
                        <div className="btn-group">
                          <button className="btn btn-warning" onClick={() => dispatch(openModal({ title: "Editar Veículo", bodyType: MODAL_BODY_TYPES.EDIT_VEHICLE }))}><PencilIcon className='h-4 w-4' /></button>
                          <button className="btn btn-error" onClick={() => dispatch(openModal({ title: "Deletar Veículo", bodyType: MODAL_BODY_TYPES.CONFIRM_DELETE_VEHICLE }))}><TrashIcon className='h-4 w-4' /></button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className='text-center mt-2'>
          <div className="btn-group">
            <button className="btn">1</button>
            <button className="btn btn-active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vehicles