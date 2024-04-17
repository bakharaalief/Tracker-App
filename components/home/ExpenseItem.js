import { FontAwesome5 } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export default function ExpenseItem({expense}){
    return <View style={styles.itemContainer}>
        {/* icon */}
        <View style={[styles.iconBorder, {backgroundColor: expense.category.borderColor}]}>
            <FontAwesome5 name={expense.category.icon} size={20} color={expense.category.color}/>
        </View>

        {/* info */}
        <View style={styles.expenseInfo}>
            <Text style={styles.expenseName}>{expense.name}</Text>
            <Text style={styles.expenseDate}>25/10/2023</Text>
        </View>

        {/* total */}
        <Text style={styles.expenseTotal}>- Rp.{expense.total}</Text>
    </View>
}

const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 10,
        marginBottom: 15,
    },
    iconBorder: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 37,
        height: 37,
        borderRadius: 37/2
    },
    expenseInfo: {
        width:0,
        flexGrow:1,
        marginHorizontal: 12,
    },
    expenseName: {
        color: "white",
        fontWeight: "bold"
    },
    expenseDate: {
        color: "white",
    },
    expenseTotal: {
        maxWidth:120,
        color: "white",
    }
})