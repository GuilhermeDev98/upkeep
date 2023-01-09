import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { showNotification } from '../../features/common/headerSlice'


const Profile = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "" }))
    }, [])

    const EditUser = () => {
        dispatch(showNotification({ message: 'Dados Alterados Com Sucesso!', status: 1 }))
    }

    return (
        <>
            <div className="flex justify-center">
                <img src='https://placeimg.com/250/250/people' className='rounded-full' />
            </div>
            <div className="mt-2 text-center">
                <input type="text" value="Ryan Dahl" className="input w-full max-w-xs" />
            </div>
            <div className="mt-2 text-center">
                <input type="text" value="email@email.com" className="input w-full max-w-xs" />
            </div>
            <div className="mt-2 text-center">
                <input type="text" value="anypassword@123" className="input w-full max-w-xs" />
            </div>
            <div className="mt-2 text-center">
                <button className='btn btn-warning btn-success w-full max-w-xs' onClick={() => EditUser()}>Salvar</button>
            </div>
        </>
    )
}

export default Profile