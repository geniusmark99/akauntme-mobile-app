import { View, Text } from 'react-native'
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

const AkauntmeSlashTwo = () => {
    return (
        <View>
            <Svg
                width={87}
                height={130}
                viewBox="0 0 87 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <Path
                    d="M63.896 77.54c12.58 42.508 4.84 82.276-17.284 88.823-22.124 6.547-50.257-22.606-62.836-65.115-12.579-42.509-4.84-82.276 17.284-88.823C23.185 5.878 51.317 35.03 63.896 77.54z"
                    fill="url(#paint0_linear_326_322)"
                />
                <Path
                    d="M18.392 81h38v38h-38V81z"
                    fill="url(#pattern0_326_322)"
                    fillOpacity={0.1}
                />
                <Defs>
                    <Pattern
                        id="pattern0_326_322"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <Use xlinkHref="#image0_326_322" transform="scale(.02)" />
                    </Pattern>
                    <LinearGradient
                        id="paint0_linear_326_322"
                        x1={1.05995}
                        y1={12.4246}
                        x2={46.6124}
                        y2={166.363}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#635BFF" />
                    </LinearGradient>
                    <Image
                        id="image0_326_322"
                        width={50}
                        height={50}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuUlEQVR4nO2XQQ7DIBAD9//PapR3ufdUkEaYmKYz0h5yYCMvNogqAHCzV5VCtTmFKFw27A1T/xVCxhA70gBr/Yq1ZDhS9UV/hBwhI4NoZWv1ehxBSAsyMohWzgj3iAMykhjgbn5fxzIi8/s6LmSlHAkh9TmNqxY5W9+aumbtyGOEXIWMdLBaa/Q7fvzqKUKuQkY6LGEtB0JI3Ty9Ewi7OtP4u4xoQkXuEXe9UkLiKGGDGWwJGwBATeMNpgA+O5QfHhEAAAAASUVORK5CYII="
                    />
                </Defs>
            </Svg>
        </View>
    )
}

export default AkauntmeSlashTwo