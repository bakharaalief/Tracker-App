import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

export default function CategoryList({categories}){
    return <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem category={item}/>}
        keyExtractor={item => item.id}
        horizontal={true}
        overScrollMode="never"
    />
}