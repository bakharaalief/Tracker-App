import Category from "../models/Category";
import Expense from "../models/Expense";

export const listCategory = [
    new Category(0, "Food", 1000000, "hamburger", "#47BF84", "#364A46"),
    new Category(1, "Travel", 0, "car", "#D5AF4C", "#46453E"),
    new Category(2, "Shoping", 300000, "shopping-cart", "#42799B", "#36444E"),
]

export let listExpense = []

for (let i = 0; i < 20; i++) {
    if(i % 2 === 0){
        listExpense.push(new Expense(i, "Makan Nasi", 10000, listCategory[0]))
    } else {
        listExpense.push(new Expense(i, "Isi Bensin", 3000, listCategory[1]))
    }
}