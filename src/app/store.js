import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import maintenanceSlice from '../features/common/maintenanceSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import vehiclesSlice from '../features/common/vehiclesSlice'
import tableSlice from '../features/table/tableSlice'

const combinedReducer = {
  header: headerSlice,
  table: tableSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  vehicles: vehiclesSlice,
  maintenances: maintenanceSlice
}

export default configureStore({
  reducer: combinedReducer
})