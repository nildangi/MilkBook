//import liraries
import React, { Component, version } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Morning = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', backgroundColor: '#04C6F1', height: verticalScale(35), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFF', fontWeight: '700', fontSize: 18 }}>Silver Spring PH-1</Text>
            </View>
            <ScrollView>

                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>On The Way</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>on The Way</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>on The Way</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View>
                        <Image style={{ marginLeft: 5 }}
                            source={require('../../assest/milktenk.png')} />
                    </View>
                    <View style={{ marginLeft: scale(-50) }}>
                        <Text style={styles.nameStyle}>Pooja Sharma</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                        <Text style={{ color: '#04C6F1' }}>500 ML</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView >
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    addSociety: {
        backgroundColor: '#04C6F1',
        width: scale(80),
        height: verticalScale(30),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10
    },
    onTheWay: {
        backgroundColor: '#000000',
        width: scale(80),
        height: verticalScale(30),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10
    },
    mainView:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: scale(5),
        elevation: 10,
        marginBottom: scale(10)
    },
    nameStyle:
    {
        color: 'black',
        fontWeight: '400',
        fontSize: 18
    }
});

//make this component available to the app
export default Morning;
