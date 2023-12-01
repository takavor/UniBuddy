import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const CourseScreen = ({ route, navigation }) => {

    const { title } = route.params

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default CourseScreen;
