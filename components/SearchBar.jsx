import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ placeholder, onChangeText }) => {
    return (
        <TextInput
            className="bg-white w-[70%] rounded-full px-2 caret-black-100"
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    );
};

export default SearchBar;