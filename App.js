import { FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import colors from './constants/colors';
import { addExpense } from './redux/expenseSlice';
import store from './redux/store';
import CategoriesScreen from './screens/CategoriesScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  const dispatch = useDispatch();

  function headerRightPressHandler(){
    dispatch(addExpense({name: "Makan Nasi", total: 10000, category: 0}));
  }

  return <Tab.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerTintColor: colors.yellow1,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.grey2,
      },
      tabBarStyle: {
        backgroundColor: colors.grey1
      },
      tabBarActiveTintColor: colors.yellow1,
      tabBarShowLabel: false,
    }}
    sceneContainerStyle={{
      backgroundColor: colors.grey2
    }}
  >
    <Tab.Screen 
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: "TRACKER APP",
        headerRight: () => (
          <Pressable style={{marginEnd: 10}} onPress={headerRightPressHandler}>
            <FontAwesome5 name="plus" size={20} color="white"/>
          </Pressable>
        ),
        tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>,
      }}
    />
    <Tab.Screen 
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={{
        title: "CATEGORIES",
        tabBarIcon: ({color, size}) => <Ionicons name='folder' color={color} size={size}/>,
      }}
    />
  </Tab.Navigator>
}

export default function App() {
  return <>
    <StatusBar style="light"/>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Tabs}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </>;
}
