import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading, isIcon }) => {
    if (isIcon) {
        return <>
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.7}
                className={`bg-akauntme text-center flex flex-row gap-x-2 rounded-xl min-h-[50px] justify-center items-center ${containerStyles}
            ${isLoading ? 'opacity-50' : ''}
            `}
                disabled={isLoading}
            >
                <Text className={`text-white font-pregular text-lg  ${textStyles}`}>

                    {title}
                </Text>
                <View>
                    {isIcon}
                </View>
            </TouchableOpacity>
        </>
    } else {
        return <>
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.7}
                className={`bg-akauntme text-center  rounded-xl min-h-[50px] justify-center items-center ${containerStyles}
            ${isLoading ? 'opacity-50' : ''}
            `}
                disabled={isLoading}
            >
                <Text className={`text-white font-pregular text-lg  ${textStyles}`}>

                    {title}
                </Text>
            </TouchableOpacity>
        </>
    }
}

export default CustomButton