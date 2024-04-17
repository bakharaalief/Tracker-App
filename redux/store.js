import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenseSlice"

export default configureStore({
    reducer: {
        expenses: expensesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})