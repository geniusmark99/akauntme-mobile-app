import { View } from 'react-native'
import React from 'react'
import Svg, {
    Path,
    Defs,
    Pattern,
    Use,
    LinearGradient,
    Stop,
    Image
} from "react-native-svg"

const AkauntmeSlashOne = () => {
    return (
        <View>
            <Svg
                width={72}
                height={188}
                viewBox="0 0 72 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <Path
                    d="M107.508 104.572c-11.48 45.804-40.112 78.091-63.951 72.116-23.84-5.975-33.859-47.95-22.378-93.753C32.659 37.13 61.29 4.844 85.13 10.819c23.84 5.975 33.859 47.95 22.378 93.753z"
                    fill="url(#paint0_linear_326_317)"
                />
                <Path
                    d="M26.392 107h38v40h-38v-40z"
                    fill="url(#pattern0_326_317)"
                    fillOpacity={0.1}
                />
                <Path
                    d="M39.392 40h38v38h-38V40z"
                    fill="url(#pattern1_326_317)"
                    fillOpacity={0.1}
                />
                <Defs>
                    <Pattern
                        id="pattern0_326_317"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use
                            xlinkHref="#image0_326_317"
                            transform="matrix(.02105 0 0 .02 -.026 0)"
                        />
                    </Pattern>
                    <Pattern
                        id="pattern1_326_317"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use xlinkHref="#image1_326_317" transform="scale(.02)" />
                    </Pattern>
                    <LinearGradient
                        id="paint0_linear_326_317"
                        x1={33.5}
                        y1={226}
                        x2={97}
                        y2={9.99999}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#635BFF" stopOpacity={0.8} />
                    </LinearGradient>
                    <Image
                        id="image0_326_317"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO2ZzU4CMRDH/4m6nBCv6pMIdz2iPIagb4ErPpQHCIKJGi9+3VkPeAPvNZvMmobsR7vTlkL2n8xltp321+mk2xSo9K9dAHcAfgDMAQzIt3EaABArFq5zQgFN6jtlYirWBHBWsm9E8IEJkNuSk0jslAGS2I0JkIiCnWR8TwZTWYBQoz8om0lm2MobKO97Uuxzshhsx2B8bdkeyBuQSCpqXbWo74wxvrKKAoXMQo6t7wNIQDBJZnRsRhCBDyC2VYFYW5GSqjLCWREb2VtLRrYWRBiYhBOQooln9eVeDUSZX34bINyrgSjzy28DpOhqUEZNKTNKk5V9upYX04REXlwXIPeMmCMOCFdZYFYzLRyCWI0jKpAN2lo1AFcApgB+ySYAepqXpREDYsgFOQbwmjPAC4CjEovDkdAFqUkQbwDaAOopMM8ZmfEG5Jp87wAaKW1l6yrEHGecC7p+oQvySL52RlvZJgoxi4pXaPqVQZbkqyuALDSLfcjwC12QRQaIrIYGiCkJXZAp+c5zgnaozYPugC5BeuT7WCn2RAcAvqjNpc/FHtA5Efs/AVwA2CfrSBBPAPZ8LnbQYZfApFkMcYh0eVPscma6VAdLsjFtp7RMeFcjXG0tyNhFsUeMhxxVECfFHuYUNNecFnvAeMhRBTElYSkuXG7XlsJ7pHHZ3K59lyA2tutM4T2yUiUY0h+6Qe6KTiYvjgAAAABJRU5ErkJggg=="
                    />
                    <Image
                        id="image1_326_317"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEUlEQVR4nO2aW4iNURTHf8MxY4zbjBm33HlwSx54oSh3yT2J5IHEg3J78uDyoFxTwhMPbnnx4MEtRa7lbgzKbRAhGcmQMS4Z7fp/tZvmnO98+/v2GeRfp+nM2d9ae+219tr/tfYH//HvojUwE9gEHAceAe+AWuAb8AF4AJwAtgJTgWLfk7oGXMliXDNgDnAG+A7URfz8BE4D84ACH4YEitIhH1gJvLHG/gDOAevkmb5AmSbYTKvfD5gGrNXYWuv515LZPFeGTAKeWGMqgEWOYdJWz9605FUCE/FoiFmpXcAv/XY/SYXABKDc0r07Ce/UN6Q9cEP/M+GwAkiRPJoCy4Aa6TI6OyRlSA/gsb6bkBqMfwxS1gt09oxrSKkl8KY8kysUA5el+ynQMY4hV/X3OtCK3KPImsMNlz1j5/qnMeM0LJWHoZ0VFbtdlYd9LkWQFXfP1EiOyW6JG3Ixgqy4WG5t/kQPzUwYCxxSWAaG3AbWx+BXKeCOZBmjvKIFcCTEiy+BAY7yJ0rGK1/cLMA+KfoMrNGETeZpA4wREQ0SiDE6KvKAW5IxF08YLwWfMqx4gUKsTuzABYv1/Ck8IQipVSHj5kTIeA2hWPXND3k6cbzVBLtlMREz7n0MXeclYwoeENQWXjehsF66tuABlRI+FP+YLl3HfAjfZvEyUxn6xADpeuhDeAnw3MpchheN8BRqpdJT5YtKdAJO1jsADUc6qzp9GNCE+CiwijxvnMhgCLAduGuVxsHnGbBAh5sXQ3zBhMEMYIeoRWDQwRjGlGYKrSLFtM8CKqUe1kdNZKGPzX5BPybZGUmHeVYFmnj63age1WRy016tk2f+uAOxSsJNGg5DmcZWO+q6oOfTLvpwYC/Q0kH4OQmfn8XY2dbhGRUlFmk0ncqMlpo2ZlQssHq43TOM6wW80FjTjIuKJXrWdPXTYppa/r0dFDSxvGKuEFYDA5UNjYdH6sqhWmOuqLkdBXlWPZNVYVWolYuKNrobCWtaHHWsJSZZ5bK5EciI/uJM5TH6u6ZaPNxA136n9qELUpKRdUgWikbcA7oSH0lRn5WS8ygbbwToo/jNS4CSJ2HIYOCreNs4F2J2QOFhuE1jGVJmhajha5HRQo3jL8AoGgctdZ8ZZDnnDmNnUXJkTBzPuHjimoyoTOpKY4g8EzfMouyJJ9bmDuvMRKr8zEXPfiWALromSxopZaevVjjFunpLt2fylc3u6ZxxOTQbQp4OuwoZ8Es1f9Zp1gV9dM48sxjAIkeiWSLuFNCOOu2H0eQIhWIAqCYwE9ij75NVnNmVZr5ungaq7F0ngvrNMsC8fLDUtxfCiOZFdUiwwmOk9lEmzlWrZvSsxjQgHTZrtYvqGVKllwwM/d6gl2pcwvE/+BvwG30+cOjUBsaEAAAAAElFTkSuQmCC"
                    />
                </Defs>
            </Svg>
        </View>

    )
}

export default AkauntmeSlashOne