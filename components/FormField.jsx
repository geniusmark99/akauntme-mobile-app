import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles} `}>
            <Text className="text-base text-gray-600 font-pmedium">
                {title}
            </Text>
            <View className="border-[1.5px] border-akauntme/20 rounded-xl items-center flex-row focus:border-akauntme w-full h-12 px-4 bg-white ">

                <TextInput className="flex-1 text-gray-700 font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleChangeText}
                    secureTextEntry={(title === 'Password' || title === 'Confirm Password') && !showPassword}
                />
                {title === "Password" &&
                    (
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode="contain" className="w-6 h-6" />
                        </TouchableOpacity>

                    )
                }
            </View>
        </View>
    )
}

export default FormField