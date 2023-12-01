import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const CourseScreen = ({ navigation }) => {

    return (
        <View style={styles.courseCreatorView}>
            <Text style={styles.courseCreatorText}>Course name:</Text>
            <TextInput style={styles.courseCreatorInput}></TextInput>
            <TouchableOpacity
                style={styles.addCourseButton}
                onPress={() => { navigation.navigate('Home') }}
            >
                <Text style={styles.addCourseText}>Add to my courses</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    courseCreatorView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    courseCreatorText: {
        fontSize: 16
    },
    addCourseButton: {
        margin: 40,
        backgroundColor: 'grey',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        fontSize: 10,
    },
    courseCreatorInput: {
        backgroundColor: 'grey',
        opacity: 0.2,
        width: '50%'
    }

})

export default CourseScreen;
