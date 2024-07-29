import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Logo from '../../components/icons/Logo'
import NotifyIcon from '../../components/icons/NotifyIcon'
import SearchBar from '../../components/SearchBar'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
    };


    return (
        <View className="text-black mt-8 px-2">
            <ScrollView>

                <View className="px-2 rounded-md flex flex-row h-[45px] items-center justify-between bg-akauntme">
                    <View>
                        <Logo fill="white" className="size-10" />
                    </View>

                    <SearchBar
                        placeholder="Search..."
                        onChangeText={handleSearch}
                    />
                    <View>
                        <NotifyIcon fill="white" />
                    </View>
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />


        </View>
    )
}

export default Home