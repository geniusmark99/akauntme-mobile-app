import Svg, { Path } from 'react-native-svg';

const BookmarkIcon = (props) => (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
        <Path
            d="M5 5c-2.758 0-5 2.242-5 5v29c0 2.758 2.242 5 5 5h16c1.652 0 3 1.348 3 3V10c0-2.758-2.242-5-5-5zm26 0c-2.758 0-5 2.242-5 5v37c0-1.652 1.348-3 3-3h16c2.758 0 5-2.242 5-5V10c0-2.758-2.242-5-5-5z"
        />
    </Svg>
);

export default BookmarkIcon;