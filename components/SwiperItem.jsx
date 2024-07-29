import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import { Link, Redirect, router } from "expo-router";
import React from 'react';
import AkauntmeSlash from './AkauntmeSlash';
import CustomButton from "./CustomButton";


const { width, height } = Dimensions.get('screen');

const SwiperItem = ({ item }) => {
    const translateYImage = new Animated.Value(40);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return (
        <View style={styles.container}>

            {/* 
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
            /> */}


            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage,
                            },
                        ],
                    },
                ]}
            />

            <View style={styles.content}>

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>
            </View>
        </View>
    );
};

export default SwiperItem;

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },
    image: {
        flex: 0.6,
        width: '100%',
    },
    content: {
        flex: 0.4,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 18,
        marginVertical: 12,
        color: '#333',
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});