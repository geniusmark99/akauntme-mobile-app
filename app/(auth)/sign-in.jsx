import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import AkauntmeSiginScreen from '../../components/AkauntmeSigninScreen';

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    const Submit = () => {
        Alert.alert("Hello There");
    }

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View className="w-full justify-center px-4 py-6 items-center">
                    <View className="w-full">
                        <AkauntmeSiginScreen />
                    </View>
                    <Text className="text-2xl mt-7 font-psemibold ">Sign in</Text>

                    <FormField
                        title="email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        placeholder="youremail@gmail.com"
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        placeholder="****************"
                        otherStyles="mt-7"
                        keyboardType="password"
                    />
                    <View className="w-full mt-4">
                        <Link href="https://akauntme-ui.vercel.app/" className='text-right text-base underline text-akauntme'>Forget Password?</Link>
                    </View>
                    <CustomButton title="Sign In"
                        handlePress={Submit}
                        isLoading={isSubmitting}
                        containerStyles="mt-7 w-40 rounded-full shadow-sm shadow-indigo-030"
                        textStyles="font-bold"
                        isIcon={
                            <Image source={images.ArrowRight} className="w-5 h-5" resizeMode='contain' />
                        }

                    />


                    <View className="justify-center py-5 flex-row gap-2">
                        <Text className="text-base text-gray-600 font-pregular">Don't have an account ?</Text>
                        <Link href="/sign-up" className="text-base font-psemibold text-akauntme">Sign up</Link>
                    </View>


                    <View className="flex space-y-5 justify-center text-center">

                        <View className="flex flex-row justify-between items-center gap-x-5">
                            <View className="h-[0.5px] w-9 bg-gray-600/70"></View>
                            <Text className="text-sm relative text-gray-700 text-center">Or Sign in with</Text>
                            <View className="h-[0.5px] w-9 bg-gray-600/70"></View>
                        </View>

                        <View className="flex flex-row gap-x-8 justify-center">
                            <View className="flex rounded-full w-5 h-5">
                                <Image source={images.GoogleLogo} className="w-6 h-6" resizeMode='contain' />
                            </View>

                            <View className="flex rounded-full w-5 h-5">
                                <Image source={images.AppleLogo} className="w-6 h-6" resizeMode='contain' />
                            </View>

                            <View className="flex rounded-full w-5 h-5">
                                <Image source={images.FbLogo} className="w-6 h-6" resizeMode='contain' />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn