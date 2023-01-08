import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import { CogIcon } from "@heroicons/react/24/outline";


const statsData = [
    { title: "Carro 1", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 2", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 3", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 4", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 1", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 2", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 3", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 4", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 1", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 2", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 3", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 4", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 1", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 2", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 3", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
    { title: "Carro 4", value: "10/01/2023", icon: <CogIcon className='w-8 h-8' />, description: "Agendada" },
]

function Dashboard() {


    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} />
                        )
                    })
                }
            </div>

            <div className='text-center mt-5'>
                <div className="btn-group">
                    <button className="btn">1</button>
                    <button className="btn btn-active">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>

        </>
    )
}

export default Dashboard