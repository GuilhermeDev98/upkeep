import { createSlice } from '@reduxjs/toolkit'

export const maintenanceSlice = createSlice({
    name: 'maintenances',
    initialState: {
        allMaintenances: []
    },
    reducers: {
        setMaintenances: (state, action) => {
            state.allMaintenances = action.payload
        },

    }
})

export const { setMaintenances } = maintenanceSlice.actions

export default maintenanceSlice.reducer