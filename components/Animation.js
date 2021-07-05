import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { purple } from '../utils/colors'

export default function Animation() {
    const [value ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(value, {
            toValue: 1,
            duration: 1000,
        }).start()
    }, [])

    const interpolateRotating = value.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.Text style={{
                transform: [
                    { rotate: interpolateRotating }]
            }}>
                <MaterialCommunityIcons name="head-question-outline" size={200} color={purple}/>
            </Animated.Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});