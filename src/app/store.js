import { configureStore } from '@reduxjs/toolkit'
import getDataSlice from './slices/getDataSlice'

export default configureStore({
  reducer: {
    dataSlice: getDataSlice,
  },
})