import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState: {
        allVehicles: []
    },
    reducers: {
        setVehicles: (state, action) => {
            state.allVehicles = action.payload
        }
    }
})

export const { setVehicles } = vehicleSlice.actions

export default vehicleSlice.reducer