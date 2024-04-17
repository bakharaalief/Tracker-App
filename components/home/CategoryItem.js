import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { numberWithComma } from "../../helper/currencyHelper";

export default function CategoryItem({category}){
    return <View style={styles.itemContainer}>
        {/* row 1 */}
        <View style={styles.rowOneContainer}>

            {/* icon */}
            <View style={[styles.iconBorder, {backgroundColor: category.borderColor}]}>
                <FontAwesome5 name={category.icon} size={20} color={category.color}/>
            </View>

            {/* menu */}
            <Entypo name="dots-three-vertical" size={18} color="white"/>
        </View>

        {/* info */}
        <Text style={styles.infoTextName}>{category.name}</Text>
        <Text style={styles.infoTextTotal}>Rp. {numberWithComma(category.total)}</Text>
    </View>
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 150,
        backgroundColor: colors.grey1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    rowOneContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconBorder: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 37,
        height: 37,
        borderRadius: 37/2
    },
    infoTextName: {
        color: "white",
        marginTop: 10
    },
    infoTextTotal: {
        color: "white",
        fontSize: 18,
    }
})