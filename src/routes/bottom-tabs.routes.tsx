import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SkillsScreen from '../screens/Skills/SkillsScreen';
import ProjectsScreen from '../screens/Projects/ProjectsScreen';
import ContactsScreen from '../screens/Contacts/ContactsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen 
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons 
                            name='home-outline'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarActiveTintColor: '#FAA1D4',
                    headerShown: false
                }}
            />

            <Screen 
                name='skills'
                component={SkillsScreen}
                options={{
                    title: 'Skills',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons 
                            name='remote-desktop'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarActiveTintColor: '#FAA1D4',
                    headerShown: false
                }}
            />

            <Screen 
                name='projects'
                component={ProjectsScreen}
                options={{
                    title: 'Projetos',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons 
                            name='folder-heart-outline'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarActiveTintColor: '#FAA1D4',
                    headerShown: false
                }}
            />

            <Screen 
                name='contacts'
                component={ContactsScreen}
                options={{
                    title: 'Contatos',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons 
                            name='phone-outline'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarActiveTintColor: '#FAA1D4',
                    headerShown: false
                }}
            />
        </Navigator>
    );
};