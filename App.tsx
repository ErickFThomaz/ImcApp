import {StatusBar} from 'expo-status-bar';
import Main from "./src/Main";
import Context from "./src/Context";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import History from "./src/History";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <Context>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="Home"
                            component={Main}
                            options={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <Image className="-ml-0.5" source={require("./assets/home.png")}></Image>
                                },
                                tabBarActiveTintColor: 'tomato',
                                tabBarInactiveTintColor: 'gray',
                                headerShown: false
                            })}
                        />
                        <Tab.Screen
                            name="Histórico"
                            component={History}
                            options={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <Image className="-ml-0.5" source={require("./assets/clock.png")}></Image>
                                },
                                tabBarActiveTintColor: 'tomato',
                                tabBarInactiveTintColor: 'gray',
                                headerShown: false
                            })}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" animated={false}/>
        </Context>
    );
}

