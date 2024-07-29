import { View, Text } from 'react-native'
import React from 'react'
import Svg, {
    Path,
    G,
    Defs,
    Pattern,
    Use,
    LinearGradient,
    Stop,
    Image
} from "react-native-svg"

const AkauntmeSlash = () => {
    return (
        <View className="">
            <Svg
                width={247}
                height={310}
                viewBox="0 0 247 339"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M214.83 271.726C234.068 243.049 246 203.374 246 159.5c0-43.874-11.932-83.549-31.17-112.226C195.587 18.589 169.112 1 140 1c-29.112 0-55.587 17.59-74.83 46.274C45.932 75.95 34 115.626 34 159.5c0 43.874 11.932 83.549 31.17 112.226C84.413 300.411 110.888 318 140 318c29.112 0 55.587-17.589 74.83-46.274zM140 319c59.094 0 107-71.411 107-159.5C247 71.41 199.094 0 140 0S33 71.41 33 159.5C33 247.589 80.906 319 140 319z"
                    fill="url(#paint0_linear_1758_589)"
                />
                <G filter="url(#filter0_di_1758_589)">
                    <Path
                        d="M224.392 159.5c0 88.089-47.906 159.5-107 159.5-59.095 0-107-71.411-107-159.5 0-88.09 47.905-159.5 107-159.5 59.094 0 107 71.41 107 159.5z"
                        fill="url(#paint1_linear_1758_589)"
                    />
                </G>
                <Path
                    d="M61.392 65h38v40h-38V65z"
                    fill="url(#pattern0_1758_589)"
                    fillOpacity={0.1}
                />
                <Path
                    d="M110.392 201h38v38h-38v-38z"
                    fill="url(#pattern1_1758_589)"
                    fillOpacity={0.1}
                />
                <Path
                    d="M49.392 186h31v34h-31v-34z"
                    fill="url(#pattern2_1758_589)"
                    fillOpacity={0.1}
                />
                <Path
                    d="M118.392 75h77v77h-77V75z"
                    fill="url(#pattern3_1758_589)"
                    fillOpacity={0.1}
                />
                <Path
                    d="M133.154 155.674h-12.23a5.543 5.543 0 01-3.68-5.221c0-.248.019-.496.052-.738l2.177-3.707 3.333-5.671 10.348 15.337zM120.839 136.095l-8.838 15.663-.987 1.755-.019.02a5.869 5.869 0 01-4.537 2.141H96l12.439-21.616.987-1.722.007-.007 4.216-7.329 4.51 6.957 1.281 1.984 1.399 2.154zM69.771 177.194h-5.24l-1.28 2.48h-3.58l7.56-14.04h3.96l2.6 14.04h-3.62l-.4-2.48zm-.4-2.6l-.82-5.2-2.68 5.2h3.5zm13.326-.48l3.7 5.56h-4.24l-2.58-4.66-.82 4.66h-3.42l2.62-14.8h3.42l-1.44 8.16 4.16-4.52h4.22l-5.62 5.6zm5.323-.04c.2-1.147.594-2.154 1.18-3.02.587-.867 1.294-1.534 2.12-2 .827-.467 1.7-.7 2.62-.7.787 0 1.447.16 1.98.48.534.32.92.74 1.16 1.26l.28-1.58h3.42l-1.98 11.16h-3.42l.3-1.58c-.426.52-.966.94-1.62 1.26-.653.32-1.373.48-2.16.48-.786 0-1.486-.18-2.1-.54a3.68 3.68 0 01-1.4-1.52c-.333-.667-.5-1.447-.5-2.34 0-.427.04-.88.12-1.36zm8.36.02c.04-.24.06-.46.06-.66 0-.654-.193-1.167-.58-1.54-.373-.374-.853-.56-1.44-.56-.68 0-1.3.246-1.86.74-.56.48-.913 1.146-1.06 2-.04.24-.06.46-.06.66 0 .653.187 1.173.56 1.56.387.373.867.56 1.44.56.68 0 1.3-.247 1.86-.74.56-.494.92-1.167 1.08-2.02zm17.875-5.58l-1.96 11.16h-3.42l.26-1.52c-.44.493-.98.893-1.62 1.2-.627.293-1.3.44-2.02.44-1.12 0-2-.314-2.64-.94-.64-.64-.96-1.527-.96-2.66 0-.427.033-.814.1-1.16l1.16-6.52h3.4l-1.06 6.06c-.04.213-.06.42-.06.62 0 .56.153.993.46 1.3.32.293.76.44 1.32.44.64 0 1.18-.187 1.62-.56.453-.387.753-.934.9-1.64l1.1-6.22h3.42zm9.276-.12c1.12 0 2 .313 2.64.94.64.626.96 1.5.96 2.62 0 .373-.04.773-.12 1.2l-1.16 6.52h-3.4l1.08-6.06c.04-.227.06-.427.06-.6 0-.56-.16-.994-.48-1.3-.306-.307-.74-.46-1.3-.46-.666 0-1.226.206-1.68.62-.453.413-.746.993-.88 1.74v-.1l-1.08 6.16h-3.42l1.96-11.16h3.42l-.26 1.5c.44-.494.974-.887 1.6-1.18a4.876 4.876 0 012.06-.44zm9.337 7.44c-.014.066-.02.153-.02.26 0 .24.066.413.2.52.146.106.38.16.7.16h1.22l-.52 2.9h-1.74c-2.24 0-3.36-.94-3.36-2.82 0-.28.033-.634.1-1.06l.8-4.44h-1.36l.5-2.84h1.36l.48-2.72h3.42l-.48 2.72h2.24l-.5 2.84h-2.24l-.8 4.48zm19.725-7.44c1.2 0 2.133.32 2.8.96.68.626 1.02 1.506 1.02 2.64 0 .346-.04.733-.12 1.16l-1.16 6.52h-3.4l1.08-6.06c.026-.134.04-.314.04-.54 0-.56-.16-.987-.48-1.28-.307-.294-.74-.44-1.3-.44-.667 0-1.227.2-1.68.6-.454.386-.74.94-.86 1.66l-1.08 6.06h-3.4l1.08-6.06c.026-.134.04-.314.04-.54 0-.56-.16-.987-.48-1.28-.307-.294-.74-.44-1.3-.44-.667 0-1.227.2-1.68.6-.454.386-.74.94-.86 1.66v-.1l-1.08 6.16h-3.42l1.96-11.16h3.42l-.24 1.42a4.44 4.44 0 011.54-1.12 4.709 4.709 0 011.98-.42c.853 0 1.573.18 2.16.54.6.36 1.026.88 1.28 1.56a5.659 5.659 0 011.84-1.52c.733-.387 1.5-.58 2.3-.58zm11.892-.04c1.44 0 2.58.393 3.42 1.18.853.773 1.28 1.833 1.28 3.18 0 .44-.034.833-.1 1.18a8.321 8.321 0 01-.24.98h-7.74c-.014.08-.02.206-.02.38 0 .586.16 1.033.48 1.34.32.306.746.46 1.28.46.853 0 1.506-.36 1.96-1.08h3.64c-.48 1.133-1.26 2.06-2.34 2.78-1.08.72-2.294 1.08-3.64 1.08-1.44 0-2.594-.4-3.46-1.2-.854-.8-1.28-1.887-1.28-3.26 0-.414.04-.84.12-1.28.2-1.16.613-2.174 1.24-3.04a6.35 6.35 0 012.34-2c.933-.467 1.953-.7 3.06-.7zm1.24 4.78c.026-.187.04-.314.04-.38 0-.534-.167-.94-.5-1.22-.334-.294-.774-.44-1.32-.44-.587 0-1.107.18-1.56.54-.44.346-.76.846-.96 1.5h4.3z"
                    fill="#fff"
                />
                <Defs>
                    <Pattern
                        id="pattern0_1758_589"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use
                            xlinkHref="#image0_1758_589"
                            transform="matrix(.02105 0 0 .02 -.026 0)"
                        />
                    </Pattern>
                    <Pattern
                        id="pattern1_1758_589"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use xlinkHref="#image1_1758_589" transform="scale(.02)" />
                    </Pattern>
                    <Pattern
                        id="pattern2_1758_589"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use
                            xlinkHref="#image2_1758_589"
                            transform="matrix(.02194 0 0 .02 -.048 0)"
                        />
                    </Pattern>
                    <Pattern
                        id="pattern3_1758_589"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use xlinkHref="#image3_1758_589" transform="scale(.02)" />
                    </Pattern>
                    <LinearGradient
                        id="paint0_linear_1758_589"
                        x1={140}
                        y1={0}
                        x2={140}
                        y2={319}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#635BFF" />
                        <Stop offset={1} stopColor="#13F287" />
                    </LinearGradient>
                    <LinearGradient
                        id="paint1_linear_1758_589"
                        x1={79}
                        y1={0.00000194888}
                        x2={278}
                        y2={409}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset={0.644791} stopColor="#635BFF" />
                    </LinearGradient>
                    <Image
                        id="image0_1758_589"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO2ZzU4CMRDH/4m6nBCv6pMIdz2iPIagb4ErPpQHCIKJGi9+3VkPeAPvNZvMmobsR7vTlkL2n8xltp321+mk2xSo9K9dAHcAfgDMAQzIt3EaABArFq5zQgFN6jtlYirWBHBWsm9E8IEJkNuSk0jslAGS2I0JkIiCnWR8TwZTWYBQoz8om0lm2MobKO97Uuxzshhsx2B8bdkeyBuQSCpqXbWo74wxvrKKAoXMQo6t7wNIQDBJZnRsRhCBDyC2VYFYW5GSqjLCWREb2VtLRrYWRBiYhBOQooln9eVeDUSZX34bINyrgSjzy28DpOhqUEZNKTNKk5V9upYX04REXlwXIPeMmCMOCFdZYFYzLRyCWI0jKpAN2lo1AFcApgB+ySYAepqXpREDYsgFOQbwmjPAC4CjEovDkdAFqUkQbwDaAOopMM8ZmfEG5Jp87wAaKW1l6yrEHGecC7p+oQvySL52RlvZJgoxi4pXaPqVQZbkqyuALDSLfcjwC12QRQaIrIYGiCkJXZAp+c5zgnaozYPugC5BeuT7WCn2RAcAvqjNpc/FHtA5Efs/AVwA2CfrSBBPAPZ8LnbQYZfApFkMcYh0eVPscma6VAdLsjFtp7RMeFcjXG0tyNhFsUeMhxxVECfFHuYUNNecFnvAeMhRBTElYSkuXG7XlsJ7pHHZ3K59lyA2tutM4T2yUiUY0h+6Qe6KTiYvjgAAAABJRU5ErkJggg=="
                    />
                    <Image
                        id="image1_1758_589"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEUlEQVR4nO2aW4iNURTHf8MxY4zbjBm33HlwSx54oSh3yT2J5IHEg3J78uDyoFxTwhMPbnnx4MEtRa7lbgzKbRAhGcmQMS4Z7fp/tZvmnO98+/v2GeRfp+nM2d9ae+219tr/tfYH//HvojUwE9gEHAceAe+AWuAb8AF4AJwAtgJTgWLfk7oGXMliXDNgDnAG+A7URfz8BE4D84ACH4YEitIhH1gJvLHG/gDOAevkmb5AmSbYTKvfD5gGrNXYWuv515LZPFeGTAKeWGMqgEWOYdJWz9605FUCE/FoiFmpXcAv/XY/SYXABKDc0r07Ce/UN6Q9cEP/M+GwAkiRPJoCy4Aa6TI6OyRlSA/gsb6bkBqMfwxS1gt09oxrSKkl8KY8kysUA5el+ynQMY4hV/X3OtCK3KPImsMNlz1j5/qnMeM0LJWHoZ0VFbtdlYd9LkWQFXfP1EiOyW6JG3Ixgqy4WG5t/kQPzUwYCxxSWAaG3AbWx+BXKeCOZBmjvKIFcCTEiy+BAY7yJ0rGK1/cLMA+KfoMrNGETeZpA4wREQ0SiDE6KvKAW5IxF08YLwWfMqx4gUKsTuzABYv1/Ck8IQipVSHj5kTIeA2hWPXND3k6cbzVBLtlMREz7n0MXeclYwoeENQWXjehsF66tuABlRI+FP+YLl3HfAjfZvEyUxn6xADpeuhDeAnw3MpchheN8BRqpdJT5YtKdAJO1jsADUc6qzp9GNCE+CiwijxvnMhgCLAduGuVxsHnGbBAh5sXQ3zBhMEMYIeoRWDQwRjGlGYKrSLFtM8CKqUe1kdNZKGPzX5BPybZGUmHeVYFmnj63age1WRy016tk2f+uAOxSsJNGg5DmcZWO+q6oOfTLvpwYC/Q0kH4OQmfn8XY2dbhGRUlFmk0ncqMlpo2ZlQssHq43TOM6wW80FjTjIuKJXrWdPXTYppa/r0dFDSxvGKuEFYDA5UNjYdH6sqhWmOuqLkdBXlWPZNVYVWolYuKNrobCWtaHHWsJSZZ5bK5EciI/uJM5TH6u6ZaPNxA136n9qELUpKRdUgWikbcA7oSH0lRn5WS8ygbbwToo/jNS4CSJ2HIYOCreNs4F2J2QOFhuE1jGVJmhajha5HRQo3jL8AoGgctdZ8ZZDnnDmNnUXJkTBzPuHjimoyoTOpKY4g8EzfMouyJJ9bmDuvMRKr8zEXPfiWALromSxopZaevVjjFunpLt2fylc3u6ZxxOTQbQp4OuwoZ8Es1f9Zp1gV9dM48sxjAIkeiWSLuFNCOOu2H0eQIhWIAqCYwE9ij75NVnNmVZr5ungaq7F0ngvrNMsC8fLDUtxfCiOZFdUiwwmOk9lEmzlWrZvSsxjQgHTZrtYvqGVKllwwM/d6gl2pcwvE/+BvwG30+cOjUBsaEAAAAAElFTkSuQmCC"
                    />
                    <Image
                        id="image2_1758_589"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVR4nO2Zu2tUQRTGf8ZsBNegVjaCop0G/wBRbFTwQVIYELERLGyCMQpa2MoaBStbOxdBRP8FwQdWgoWbhHSKsVMwauEWjhz4Bscha3bvO3o/GPbOmTP3znfPY87shRo1aqTFCHAL+Ai4gtsSMKs1pMZsCQRc1G5mQWRJN9tP8TgQWCY1/FspCy6r58c3KsqdPGoiMXJ7Qz3girbIf0fErTJ/0H5i1EQSwlXVIpV5nqv3Eaq9IRYNVxOJUFuk6q71soDK93kRRP65Mj5GXnJXE4lQW2StuJbLoX0AbgPHguc1gd1rhch74CwwnMWCByWyml4SeQOYBNrAPPAN+KrrtsYaVSRyN+hPAIt9WG9RupUh8hBYBwzpL1Gv9xa4BOxVfDR1PQN0pPMTaGlu6URG9etJ/ACmgPWBzj7getC3sYtAV3NaWRBJ087rXhN6u0bi8ArPPgW8keVCHBEZmzteFhH7PLFBQetjwiwRYgfwLJjzDjge6UwHMdMo07Umg5gI3cnwWmNPgBt6+9+BbfyGpeo56dm9SiPSltwCO8SWYI5dGx6rfzrSvSz5/TKJLEi+J5IPAV80dkGyjcBWuWSIMektlElkWXKfvUJMKZBt/BVwssfaRqWznIZI0tbsg4jhEPA0mPdgheyVisiLlER2Ra5lm93fcBD4LN0TWbpWVvDBbjt2iDOSP4qqAJNdjXSvDBLs/mOofZjMEj79dqL0u13ptqtd3QL+k3THo/Q7P0j6Desgl9OGaGVHiHOqev0cC/x7UW01M+iGOCIy3jJ5lChdlR0hNgN3lLV2/jECR5OUKHmjJXK2sOnocGX117WgPyxLJCoa88aQFuT3jY52bMtIm9TGFNhzacr4omAu0u/BqjLu1AvxUdcC3ppZwlJsz6PuL2sJBw3DdvcIAAAAAElFTkSuQmCC"
                    />
                    <Image
                        id="image3_1758_589"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuUlEQVR4nO2XQQ7DIBAD9//PapR3ufdUkEaYmKYz0h5yYCMvNogqAHCzV5VCtTmFKFw27A1T/xVCxhA70gBr/Yq1ZDhS9UV/hBwhI4NoZWv1ehxBSAsyMohWzgj3iAMykhjgbn5fxzIi8/s6LmSlHAkh9TmNqxY5W9+aumbtyGOEXIWMdLBaa/Q7fvzqKUKuQkY6LGEtB0JI3Ty9Ewi7OtP4u4xoQkXuEXe9UkLiKGGDGWwJGwBATeMNpgA+O5QfHhEAAAAASUVORK5CYII="
                    />
                </Defs>
            </Svg>
        </View>
    )
}

export default AkauntmeSlash