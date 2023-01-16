import DashboardStats from './components/DashboardStats'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setMaintenances } from '../common/maintenanceSlice';




const Dashboard = () => {
    const dispatch = useDispatch()

    const { allMaintenances } = useSelector(state => state.maintenances)

    const [Pagination, SetPagination] = useState(0)

    const GetMaintenances = async (url = 'maintenances?perPage=8&page=1') => {
        try {
            const { data } = await axios.get(url)
            dispatch(setMaintenances(data.data.data))
            delete data.data.data
            SetPagination(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetMaintenances()
    }, [])
    console.log(allMaintenances)
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    allMaintenances.map((d, k) => {
                        return (
                            <DashboardStats key={k} maintenance={d} id={k} />
                        )
                    })
                }
            </div>

            {allMaintenances.length == 0 && <div className='text-center'><strong>Nenhuma Manutenção Programada !</strong></div>}

            {Pagination.last_page > 1 && <div className='text-center mt-5'>
                <div className="btn-group">
                    {Pagination.prev_page_url && <button className="btn" onClick={() => GetMaintenances(`maintenances?perPage=8&page=${Pagination?.prev_page_url.split("=")[1]}`)}>Anterior</button>}
                    <button className="btn btn-active">{Pagination.current_page}</button>
                    {Pagination.next_page_url && <button className="btn" onClick={() => GetMaintenances(`maintenances?perPage=8&page=${Pagination?.next_page_url.split("=")[1]}`)}>Próxima</button>}
                </div>
            </div>}

        </>
    )


}

export default Dashboard