import { CogIcon } from '@heroicons/react/24/outline'


function DashboardStats({ maintenance, id }) {

    return (
        <div className="stats shadow">
            <a href="#">
                <div className="stat">
                    <div className={`stat-figure`}><CogIcon className='h-10 w-10' /></div>
                    <div className="stat-title">{maintenance.vehicle.nickname}</div>
                    <div >{maintenance.date}</div>
                    <div className="stat-desc">Agendada</div>
                </div>
            </a>
        </div>
    )
}

export default DashboardStats