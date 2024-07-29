import { View, Text, ScrollView, Image, Alert, Picker } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import Checkbox from 'expo-checkbox';
import AkauntmeLogo from '../../components/AkauntmeLogo';
import Svg, { Path } from "react-native-svg"

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        business_name: "",
        business_email: "",
        business_phone: "",
        business_type: "",
        password: "",
        confirm_password: ""

    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const Submit = () => {
        router.push('(tabs)/home');
    }

    return (
        <SafeAreaView className="bg-white h-full font-pregular">
            <ScrollView>
                <View className="w-full h-full items-center justify-center flex px-4 py-6">
                    <View className="w-full justify-between flex-row items-center flex">
                        <Link href="/sign-in" className='bg-gray-200 focus:border-akauntme border-2 rounded-full w-10 h-10 flex justify-center items-center'>
                            <Svg
                                width={16}
                                height={12}
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M1 6h14M1 6l5.056 5M1 6l5.056-5"
                                    stroke="#635BFF"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </Link>
                        <AkauntmeLogo />
                        <View className="invisible w-10"></View>
                    </View>

                    <Text className="text-base text-center mt-7">
                        Fill your business details below or register
                        with your social handle.
                    </Text>

                    <FormField
                        title="Business Name"
                        value={form.business_name}
                        placeholder="Akauntme Business"
                        handleChangeText={(e) => setForm({ ...form, business_name: e })}
                        otherStyles="mt-5"
                    />

                    <FormField
                        title="Business email"
                        value={form.business_email}
                        placeholder="yourbusinessemail@gmail.com"
                        handleChangeText={(e) => setForm({ ...form, business_email: e })}
                        otherStyles="mt-5"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Business Phone"
                        value={form.business_phone}
                        placeholder="+1234567890"
                        handleChangeText={(e) => setForm({ ...form, business_phone: e })}
                        otherStyles="mt-5"
                    />

                    <FormField
                        title="Business Type"
                        value={form.business_type}
                        handleChangeText={(e) => setForm({ ...form, business_type: e })}
                        otherStyles="mt-5"
                        keyboardType="email-address"
                    />


                    <FormField
                        title="Password"
                        value={form.password}
                        placeholder="***************"
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-5"
                        keyboardType="password"
                    />


                    <FormField
                        title="Confirm Password"
                        value={form.comfirm_password}
                        placeholder="***************"
                        handleChangeText={(e) => setForm({ ...form, confirm_password: e })}
                        otherStyles="mt-5"
                        keyboardType="password"
                    />


                    <View className="mt-7 flex flex-row items-center gap-x-4">
                        <Checkbox
                            className="form-checkbox h-5 w-5 rounded-md transition duration-150 ease-in-out"
                            value={isChecked} onValueChange={setChecked} color="rgb(99,91,211)" />
                        <Text className="text-gray-500">Agree with <Text className="text-akauntme underline">Terms & Conditions</Text></Text>
                    </View>

                    <CustomButton title="Sign Up" handlePress={Submit}
                        isLoading={isSubmitting}
                        textStyles="font-psemibold"
                        containerStyles="mt-7 w-full rounded-full"
                    />



                    <View className="flex space-y-5 justify-center text-center mt-7">

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

export default SignUp