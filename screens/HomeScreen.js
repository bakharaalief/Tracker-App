import { ScrollView, StyleSheet, View } from "react-native";
import CategoryList from "../components/home/CategoryList";
import ExpenseList from "../components/home/ExpenseList";
import { listCategory, listExpense } from "../data/dummy-data";

export default function HomeScreen(){
    const categories = listCategory;
    const expenses = listExpense;
    
    return <ScrollView nestedScrollEnabled={true} overScrollMode="never">
        <CategoryList categories={categories}/>
        <View style={styles.expenseList}>
            <ExpenseList expenses={expenses} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    expenseList: {
        marginTop: 10
    }
})