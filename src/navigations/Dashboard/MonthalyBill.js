//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars';

// create a component
const MonthalyBill = ({ navigation }) => {
    const [showModal, setShowModal] = useState(true);
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.48, backgroundColor: '#04C6F1', }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', height: verticalScale(50), flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('MilkDetailsCard')}>
                        <Image style={{ marginLeft: scale(10) }}
                            source={require('../../assest/Arrow-Right.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFF', fontWeight: '500', fontSize: 18 }}> Monthly Bill</Text>
                    <Image style={{ width: 40, height: 40, margin: 10 }}
                        source={require('../../assest/Ellipse2.png')} />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ color: '#FFFF', fontWeight: '500', fontSize: 18,marginLeft:scale(5) }}> 01/09/2022 - 30/09/2022</Text>
                <Image style={{ width: 22, height: 25, marginRight: 18 }}
                        source={require('../../assest/Calendar2.png')} />
            </View>
            </View>
            <View style={styles.mainView}>
                <View style={{ marginLeft: scale(10) }}>
                    <Text style={styles.nameStyle}>Pooja Sharma</Text>
                    <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                    <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                        <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                        <Text style={{ color: '#FFFF' }}>Download PDF</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.table}>
                {/* Table Header */}
                <View style={styles.tableRow}>
                    <Text style={[styles.cell, styles.headerCell]}>Days</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Morning</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Evening</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Price Unit</Text>
                </View>
                {/* Table Rows */}
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>01</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow1}>
                    <Text style={styles.cell}>02</Text>
                    <Text style={styles.cell}>---</Text>
                    <Text style={styles.cell}>---</Text>
                    <Text style={styles.cell}>---</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>03</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow1}>
                    <Text style={styles.cell}>04</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>05</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow1}>
                    <Text style={styles.cell}>06</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>07</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow1}>
                    <Text style={styles.cell}>08</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>09</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
                <View style={styles.tableRow1}>
                    <Text style={styles.cell}>10</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>1Liter</Text>
                    <Text style={styles.cell}>120</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.LogoutBtn} onPress={() => navigation.navigate('MonthalyBill')}>
                    <Image source={require('../../assest/whatsapp.png')} />
                    <Text style={{ color: '#FFFF', margin: 10, fontWeight: '600', fontSize: 18 }}>Share With Customer</Text>
                </TouchableOpacity>
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
    nameStyle:
    {
        color: 'black',
        fontWeight: '400',
        fontSize: 18
    },
    addSociety: {
        backgroundColor: '#04C6F1',
        width: scale(110),
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
        marginBottom: scale(10),
        backgroundColor: '#FFFF',
        marginTop: 10,
        // elevation: 10,
        alignItems: 'center'
    },
    LogoutBtn: {
        backgroundColor: '#000000',
        width: scale(335),
        height: verticalScale(41),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10,
        flexDirection: 'row'
    },
    table: {
        borderWidth: 0.0,
        borderColor: '#000',
        borderRadius: 5,
        margin: 10,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.1,
        borderBottomColor: '#000',
    },
    tableRow1: {
        flexDirection: 'row',
        borderBottomWidth: 0.1,
        backgroundColor: '#ECECEC',
        borderBottomColor: '#000',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
    },
    headerCell: {
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: 'white'
    },
});

//make this component available to the app
export default MonthalyBill;
