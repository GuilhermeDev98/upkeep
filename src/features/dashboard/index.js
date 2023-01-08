import DashboardStats from './components/DashboardStats'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Dashboard = () => {

    const [Maintenances, SetMaintenances] = useState([])
    const [Pagination, SetPagination] = useState(0)

    const GetMaintenances = async () => {
        try {
            const { data } = await axios.get('maintenances')
            SetMaintenances(data.data.data)
            SetPagination(data.data.total)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetMaintenances()
    }, [])

    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    Maintenances.map((d, k) => {
                        return (
                            <DashboardStats key={k} maintenance={d} id={k} />
                        )
                    })
                }
            </div>

            {Maintenances.length == 0 && <div className='text-center'><strong>Nenhuma Manutenção Programada !</strong></div>}

            {Pagination > 1 && <div className='text-center mt-5'>
                <div className="btn-group">
                    <button className="btn">1</button>
                    <button className="btn btn-active">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>}

        </>
    )
}

export default Dashboard