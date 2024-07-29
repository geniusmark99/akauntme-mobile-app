import Svg, { Path } from "react-native-svg"

const ProfileIcon = (props) => {
    return (
        <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <Path
                d="M24 4c-5.505 0-10 4.495-10 10s4.495 10 10 10 10-4.495 10-10S29.505 4 24 4zM12.5 28C10.032 28 8 30.032 8 32.5v1.2c0 2.94 1.865 5.578 4.709 7.392C15.553 42.906 19.445 44 24 44c4.555 0 8.447-1.094 11.291-2.908C38.135 39.278 40 36.64 40 33.699V32.5c0-2.468-2.032-4.5-4.5-4.5h-23z"
            />
        </Svg>
    )
}

export default ProfileIcon