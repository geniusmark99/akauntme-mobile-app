import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';
import CustomButton from '../../components/CustomButton';
import { SvgXml } from 'react-native-svg';
import HomeIcon from '../../components/icons/HomeIcon';
import ReportIcon from '../../components/icons/ReportIcon';
import CreateIcon from '../../components/icons/CreateIcon';
import ProfileIcon from '../../components/icons/ProfileIcon';

const TabIcon = ({ icon, color, name, focused }) => {
    let renderIcon = '';
    switch (icon) {
        case "home":
            renderIcon = <HomeIcon fill={color} />
            break;
        case "report":
            renderIcon = <ReportIcon fill={color} />
            break;
        case "history":
            renderIcon = <ReportIcon fill={color} />
            break;
        case "create":
            renderIcon = <CreateIcon fill={color} />
            break;
        case "profile":
            renderIcon = <ProfileIcon fill={color} />
            break;


    }
    return (
        <View className="items-center justify-center gap-1">
            {renderIcon}
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>{name}</Text>
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>

            <Tabs


                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#635BFF',
                    tabBarInactiveTintColor: '#757674',
                    tabBarStyle: {
                        height: 70,
                        backgroundColor: '#ffffff',
                        borderTopWidth: 1,
                        borderTopColor: '#fcfcfc',
                        shadowColor: 'none',
                        shadowOffset: 'none'

                    },
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="home"
                                color={color}
                                name="Home"
                                focused={focused}

                            />
                        )
                    }}

                />

                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: 'Report',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="report"
                                color={color}
                                name="Report"
                                focused={focused}

                            />
                        )
                    }}

                />


                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="create"
                                color={color}
                                name="Create"
                                focused={focused}

                            />
                        )
                    }}

                />

                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="profile"
                                color={color}
                                name="Profile"
                                focused={focused}

                            />
                        )
                    }}

                />
            </Tabs>



        </>

    )
}

export default TabsLayout