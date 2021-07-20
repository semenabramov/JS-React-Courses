import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCallback } from 'react';
import { CounterProps } from "../../models/CounterModels";

const Counter = ({clickHandler}: CounterProps) =>{
    const [currentCounter, setCurrentCounter] = useState(0);
    const onIncrement = useCallback(()=> {
        setCurrentCounter(prevValue => prevValue + 1);
        if(clickHandler){
            clickHandler(currentCounter + 1);
        }
    },[])
    const onDecrement = useCallback(()=> {
        setCurrentCounter(prevValue => prevValue - 1);
        if(clickHandler){
            clickHandler(currentCounter - 1);
        }
    },[])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onIncrement}> 
                <Text>+</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{currentCounter}</Text>
            <TouchableOpacity onPress={onDecrement}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: 16,
    },
    count:{
        marginVertical: 16,
        fontSize: 32,
    }
})

export default React.memo(Counter)