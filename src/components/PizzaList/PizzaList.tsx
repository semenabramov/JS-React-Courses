import React, { useCallback } from 'react';
import { Text, ScrollView, FlatList } from 'react-native'
import { PizzaListProps, PizzaProps } from '../../models/PizzaListModels';
import Pizza from './Pizza/Pizza';

const PizzaList = ({ pizzaList }: PizzaListProps) => {
    

    const renderItem = useCallback((item) => (
        <Pizza
            key={item.item.id}
            description={item.item.description}
            title={item.item.title}
            img={item.item.img}
            price={item.item.price}
            id={item.item.id}
        />
    ), []);
    
    if (!pizzaList || !pizzaList.length) {
        return null;
    }
    return (
        <FlatList data={pizzaList} renderItem={renderItem} />
    );
};

export default PizzaList;