import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { PizzaProps } from '../../../models/PizzaListModels';
import { View, Text, Image } from 'react-native';
import Counter from '../../Counter/Counter';


const Pizza = ({
    id,
    title,
    price,
    description,
    img,
    clickHandler,
}: PizzaProps) => {

    const changeHendler = useCallback((count: number) => {
        if (clickHandler) {
            clickHandler(title, count);
        }
    }, [])

    return (
        <View style={styles.pizzaWrapper}>
            <View style={styles.priceConteiner}>
                <Text style={styles.price}>{price}</Text>
                <Image source={{ uri: img }} style={styles.img}></Image>
                <Counter clickHandler={changeHendler} />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pizzaWrapper:{
        display: "flex",
        alignItems: 'center',
    },
    priceConteiner:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    descriptionContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    img:{
        width: 200,
        height: 200,
    },
    title:{
        fontSize: 16,
    },
    description:{
        fontSize: 12,
        color: "grey",
    },
    price:{
        fontSize: 28,
        fontWeight: "bold",
        paddingRight: 24, 
    }

})

export default React.memo(Pizza)