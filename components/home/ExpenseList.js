import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({expenses}){
    return <FlatList 
        data={expenses}
        renderItem={({item}) => <ExpenseItem expense={item}/>}
        keyExtractor={item => item.id}
        overScrollMode="never"
        scrollEnabled={false}
    />
}