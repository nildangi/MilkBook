//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
const AddCustomer = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4, backgroundColor: '#04C6F1', flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
                        <Image
                            style={{ margin: 10, justifyContent: 'center' }}
                            source={require('../../assest/Arrow-Right.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginLeft: 100 }}>
                    <Text style={{ color: '#FFFF', fontWeight: '600', fontSize: 18 }}> Delivered Milk</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row',backgroundColor:'yellow' }}>

                <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio === 1 ? <View style={styles.radioBg}>
                                </View> : null
                            }
                        </View>
                        <Text style={[styles.radioText]}>Customer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio === 2 ?
                                    <View>
                                        <View style={styles.radioBg}></View>
                                        <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{margin:10,backgroundColor:'red'}}>Nilesh</Text>
                                        </View>
                                    </View> : null
                            }
                        </View>
                        <Text style={[styles.radioText]}>Delivery Partner</Text>
                    </View>
                </TouchableOpacity>

            </View>
            {/* <View style={{ flex: 6, alignItems: 'center', flexDirection: 'row',backgroundColor:'lightblue' }}>
                </View> */}

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    radioText: {
        fontSize: 20
    },
    radio: {
        height: 32,
        width: 32,
        borderColor: '#04C6F1',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center'

    },
    radioBg: {
        backgroundColor: '#04C6F1',
        height: 20,
        width: 20,
        margin: 4,
        borderRadius: 20
    },
    radioWrapper: { flexDirection: 'row', alignItems: 'center' }
});

//make this component available to the app
export default AddCustomer;
