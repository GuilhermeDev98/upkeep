/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import Square2StackIcon from '@heroicons/react/24/outline/Square2StackIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import ShieldCheckIcon from '@heroicons/react/24/outline/ShieldCheckIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'

import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { CogIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";


const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  {
    path: '/app/maintenances', // url
    icon: <CogIcon className={iconClasses} />, // icon component
    name: 'Manutenções', // name that appear in Sidebar
  },
  {
    path: '/app/vehicles', // url
    icon: <CpuChipIcon className={iconClasses} />, // icon component
    name: 'Veículos', // name that appear in Sidebar
  },
  /*{
    path: '/app/read-me', // url
    icon: <Cog8ToothIcon className={iconClasses} />, // icon component
    name: 'Configurações', // name that appear in Sidebar
  }*/
  {
    path: '/app/signout', // url
    icon: <ArrowLeftOnRectangleIcon className={iconClasses} />, // icon component
    name: 'Sair', // name that appear in Sidebar
  },
]

export default routes
