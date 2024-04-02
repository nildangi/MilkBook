//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{ flex: 0.1, backgroundColor: '#04C6F1', justifyContent: 'center',alignItems:'center',height:verticalScale(30) }}>
                <Text style={{color:'#FFFF',fontWeight:'500',fontSize:18}}> Customer Payment Details</Text>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={{ margin: 10 }}
                        source={require('../../assest/Arrow-Right.png')} />
                </TouchableOpacity> */}
            </View>
            
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',margin:scale(5) }}>
                    <View style={styles.InputStyle}>
                        <Text style={{ margin: 5 }}>Society Name</Text>
                        <Image
                            style={{ marginRight:15,marginBottom:10,width:30,height:30 }}
                            source={require('../../assest/Arrow-Down.png')} />
                    </View>
                    
                </View>

                <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('PaymentDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('PaymentDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 15, color: '#04C6F1',marginTop:scale(-10) }}>1000 Liter</Text>
                            <Text style={{ fontSize: 17 }}>₹
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>60,000</Text></Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                   
                   
                    

                </View>

                <View style={{ flex: 1 }}>

                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    TextStyle: {
        color: 'black',
        fontSize: 24,
        fontWeight: '400',
        fontFamily: 'Roboto-Medium'
    },
    InputStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width:'95%',
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        margin: scale(5),
        borderWidth:0.1,
        borderColor:'black',
        elevation:10
        
    },
    viewStyle: {
        backgroundColor: 'black',
        width: scale(122),
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
    addSociety: {
        backgroundColor: '#04C6F1',
        width:scale(125),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10
    },
    boxStyle: {
        backgroundColor: 'white',
        flex: 1, 
        width: 194,
        height: 190,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 10
    },
});

//make this component available to the app
export default Payment;
