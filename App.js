import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import colors from './constants/colors';
import CategoriesScreen from './screens/CategoriesScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return <Tab.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerTintColor: colors.yellow1,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.grey2
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
        tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>,
      }}
    />
    <Tab.Screen 
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={{
        title: "CATEGORIES",
        tabBarIcon: ({color, size}) => <Ionicons name='folder' color={color} size={size}/>
      }}
    />

  </Tab.Navigator>
}

export default function App() {
  return <>
    <StatusBar />
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
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
