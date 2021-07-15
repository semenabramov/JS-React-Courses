import React from "react";
import {StyleSheet, Text} from "react-native"
import { HeaderProps } from "../../models/HeaderModels";

const Header = ({title}: HeaderProps) =>(
    <Text style={styles.title}>{title}</Text>
)

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: 'grey',
        textAlign: 'center',
        paddingTop: 34,

    },

})

export default React.memo(Header);