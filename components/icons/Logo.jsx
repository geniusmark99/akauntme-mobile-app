import Svg, { Path } from "react-native-svg"

const Logo = (props) => {
    return (
        <Svg
            width={18}
            height={14}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.28 14h-5.596a2.53 2.53 0 01-1.66-2.72l.996-1.691L12.545 7l4.735 7zM11.365 5.064l-4.043 7.149-.452.801-.009.009A2.687 2.687 0 014.785 14H0l5.692-9.866.451-.786.003-.003L8.076 0l2.063 3.175.586.906.64.983z"
            />
        </Svg>
    )
}

export default Logo