import React from 'react';
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import AkauntmeSlashOne from '../components/AkauntmeSlashOne';
import AkauntmeSlashTwo from '../components/AkauntmeSlashTwo';
import Animated from 'react-native-reanimated';
import Swiper from '../components/Swiper';
import AkauntmeSlash from '../components/AkauntmeSlash';



const RootLayout = () => {


    return (
        <SafeAreaView className="bg-white h-full"

        >
            <ScrollView contentContainerStyle={{ height: '100%' }}
            >
                <View className="w-full justify-center items-center px-4 h-full relative overflow-hidden">
                    <View className=" absolute right-0 top-0">
                        <AkauntmeSlashOne />
                    </View>

                    <View className=" absolute left-0 bottom-0">
                        <AkauntmeSlashTwo />
                    </View>


                    <View className="justify-center items-center mt-10">
                        <View className="relative justify-center w-full items-center">
                            <AkauntmeSlash />
                        </View>

                        <Text className="text-xl font-pregular text-black/70 mt-7 text-center italic">
                            Your <Text className="text-akauntme font-psemibold relative shadow-md shadow-akauntme before:absolute before:content-[''] 
                        before:w-[2px] before:h-[2px]  underline">Accounting</Text> Padi for keeping track Business and Personal use.
                        </Text>


                        <CustomButton title="Get Started"
                            textStyles="font-psemibold"
                            handlePress={() => router.push('/sign-in')}
                            containerStyles="w-40 p-2 m-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-300"
                        />
                    </View>


                </View>

            </ScrollView>


            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>


    )

}


export default RootLayout;