import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';



const HomeScreen = ({ navigation }) => {

    const [courses, setCourses] = useState([])
    // const [courses, setCourses] = useState([
    //     {
    //         title: 'course 1ddyhas897dyhas78dhaasdasdasdassdasddasasdadsasd7890shda78sdha78sdha78sdh',
    //         key: '1'
    //     },
    //     {
    //         title: 'course 2',
    //         key: '2'
    //     }, {
    //         title: 'course 1',
    //         key: '3'
    //     },
    //     {
    //         title: 'course 2',
    //         key: '4'
    //     }, {
    //         title: 'course 1',
    //         key: '5'
    //     },
    //     {
    //         title: 'course 2',
    //         key: '6'
    //     }, {
    //         title: 'course 1',
    //         key: '7'
    //     },
    //     {
    //         title: 'course 2',
    //         key: '8'
    //     }, {
    //         title: 'course 1',
    //         key: '9'
    //     },
    //     {
    //         title: 'course 2',
    //         key: '10'
    //     },
    // ])

    return (
        <View style={styles.homeView}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.coursesList}
                data={courses}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            style={styles.courseItem}
                            onPress={() => navigation.navigate('Course', item)}
                        >
                            <Text style={styles.courseItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.addCourseButton}
                onPress={() => { navigation.navigate('CreateCourse') }}
            >
                <Text style={styles.addCourseText}>Add a course</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    homeView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    coursesList: {
        width: '100%'
    },
    courseItem: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    courseItemText: {
        fontSize: 20,
        flexWrap: 'wrap',
        fontWeight: 'bold'

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
    addCourseText: {
        fontSize: 20
    }
})

export default HomeScreen;
