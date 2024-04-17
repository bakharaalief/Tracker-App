import { createSlice } from "@reduxjs/toolkit";
import Expense from "../models/Expense";

export const expenseSlice = createSlice({
    name: "expenses",
    initialState: {
        expenses: []
    },
    reducers: {
        addExpense: (state, action) => {
            const latestIndex = state.expenses.length;
            const { name, total, category } = action.payload;

            state.expenses.push(new Expense(latestIndex, name, total, category))
        }
    }
})

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;