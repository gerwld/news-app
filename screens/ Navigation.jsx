import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import FullPostsScreen from "./FullPostsScreen";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} options={{ title: "News" }} />
                <Stack.Screen name="fullpost" component={FullPostsScreen} options={{ title: "Post" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}