//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: 'lightyellow' }}>
                <Text>1st Part</Text>
            </View>

            <View style={{ flex: 3, backgroundColor: 'lightpink', flexDirection: 'row', flexWrap: 'wrap' }}>
                <View>
                    <View style={{ backgroundColor: 'orange', flex: 1, width: 194, height: 150, margin: 5, borderRadius: 10 }}>
                        <Image source={require('../../assest/icon/3User.png')} />
                        <Text>Total Society</Text>
                        <Text>10</Text>
                        <Text>View Society</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', flex: 1, width: 194, height: 150, margin: 5, borderRadius: 10 }}>
                        <Image source={require('../../assest/icon/3User.png')} />
                        <Text>Total Society</Text>
                        <Text>10</Text>
                        <Text>View Society</Text>
                    </View>
                </View>
                <View>
                    <View style={{ backgroundColor: 'orange', flex: 1, width: 194, height: 150, margin: 5, borderRadius: 10 }}>
                        <Image source={require('../../assest/icon/3User.png')} />
                        <Text>Total Society</Text>
                        <Text>10</Text>
                        <Text>View Society</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', flex: 1, width: 194, height: 150, margin: 5, borderRadius: 10 }}>
                        <Image source={require('../../assest/icon/3User.png')} />
                        <Text>Total Society</Text>
                        <Text>10</Text>
                        <Text>View Society</Text>
                    </View>
                </View>

            </View>

            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                <Text>3rd Part</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
});

//make this component available to the app
export default Home;
