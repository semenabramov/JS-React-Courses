import React from 'react';
import {

    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native';

const MainDashboard = () => {
    return (
        <SafeAreaView style={styles.MainArea}>
            <View style={styles.LogoContainer}>
                <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
            </View>
            <ScrollView>
                
            </ScrollView>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    MainArea: {
        backgroundColor: '#f6f6f6',
        flex: 1,
        alignItems: 'center',
    },
    LogoContainer: {
        alignItems: "center",
        padding: 16,
        backgroundColor: '#ffffff',
        width: '100%'
    },
    LogoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#262626',
        fontFamily: 'Gill Sans Ultra Bold',
    },
});

export default MainDashboard;